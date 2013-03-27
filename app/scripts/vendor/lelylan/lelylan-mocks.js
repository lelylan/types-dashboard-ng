'use strict';

var test = angular.module('test', ['lelylan.dashboards.types', 'ngMockE2E']);

test.run(function($httpBackend) {
  $httpBackend.when('GET', /\/templates\//).passThrough();

  $httpBackend.whenGET('http://api.lelylan.com/types/1').respond(type);
  $httpBackend.whenPUT(/http:\/\/api.lelylan.com\/types/)
    .respond(function(method, url, data, headers){ return [200, updateType(data), {}]; });

  $httpBackend.whenPOST('http://api.lelylan.com/properties')
    .respond(function(method, url, data, headers){ return [200, createProperty(data), {}]; });
  $httpBackend.whenPUT(/http:\/\/api.lelylan.com\/properties/)
    .respond(function(method, url, data, headers){ return [200, updateProperty(data), {}]; });
  $httpBackend.whenDELETE(/http:\/\/api.lelylan.com\/properties/)
    .respond(function(method, url, data, headers){ return [200, deleteProperty(data), {}]; });

  // TODO refactoring
  var createProperty = function(data) {
    console.log("Yoooo Create");
    data = eval( '(' + data + ')'); // TODO use angular.toJSON
    var resource = angular.copy({});
    angular.forEach(data, function(value, key) { resource[key] = value; });
    resource.id = JSON.stringify(Math.floor(Math.random()*1000000)) + 10;
    return resource;
  }

  var updateProperty = function(data) {
    console.log("Yoooo Update");
    data = eval( '(' + data + ')'); // TODO use angular.toJSON
    var resource = angular.copy(property);
    angular.forEach(data, function(value, key) { resource[key] = value; });
    return resource;
  }

  var deleteProperty = function(data) {
    data = eval( '(' + data + ')'); // TODO use angular.toJSON
    var resource = angular.copy(property);
    angular.forEach(data, function(value, key) { resource[key] = value; });
    return resource;
  }

  var updateType = function(data) {
    data = eval( '(' + data + ')'); // TODO use angular.toJSON
    var resource = angular.copy(type);
    resource.properties = data._properties;
    return resource;
  }
});
