'use strict';

var test = angular.module('test', ['lelylan.dashboards.types', 'ngMockE2E']);

test.run(function($httpBackend, LoggedUser, Simulation) {

  LoggedUser.set()

  /* Dashboard */

  $httpBackend.whenGET('http://api.lelylan.com/me').respond({ id: 1, email: 'alice@example.com' });
  $httpBackend.whenGET('http://api.lelylan.com/types?per=100').respond(yourTypes);
  $httpBackend.whenGET('http://api.lelylan.com/types/public?category=lights').respond(yourTypes);
  $httpBackend.whenGET('http://api.lelylan.com/types/1').respond(type);
  $httpBackend.whenPOST('http://api.lelylan.com/types').respond(type);

  /* Type */

  $httpBackend.whenGET('http://api.lelylan.com/types/1').respond(type);
  $httpBackend.whenDELETE('http://api.lelylan.com/types/1').respond(type);
  $httpBackend.whenPUT(/http:\/\/api.lelylan.com\/types/)
    .respond(function(method, url, data, headers){ return [200, updateType(data), {}]; });
  $httpBackend.whenGET('http://api.lelylan.com/types/2')
    .respond(function(method, url, data, headers) {
      var resource = angular.copy(type);
      resource.owner_id = 2;
      return [200, resource, {}];
    });

  // Property related
  $httpBackend.whenPOST('http://api.lelylan.com/properties')
    .respond(function(method, url, data, headers){ return [200, createConnection(data), {}]; });
  $httpBackend.whenPUT(/http:\/\/api.lelylan.com\/properties/)
    .respond(function(method, url, data, headers){ return [200, updateConnection(data), {}]; });
  $httpBackend.whenDELETE(/http:\/\/api.lelylan.com\/properties/)
    .respond(function(method, url, data, headers){ return [200, deleteConnection(data), {}]; });

  // Functions related
  $httpBackend.whenPOST('http://api.lelylan.com/functions')
    .respond(function(method, url, data, headers){ return [200, createConnection(data), {}]; });
  $httpBackend.whenPUT(/http:\/\/api.lelylan.com\/functions/)
    .respond(function(method, url, data, headers){ return [200, updateConnection(data), {}]; });
  $httpBackend.whenDELETE(/http:\/\/api.lelylan.com\/functions/)
    .respond(function(method, url, data, headers){ return [200, deleteConnection(data), {}]; });

  // Statuses related
  $httpBackend.whenPOST('http://api.lelylan.com/statuses')
    .respond(function(method, url, data, headers){ return [200, createConnection(data), {}]; });
  $httpBackend.whenPUT(/http:\/\/api.lelylan.com\/statuses/)
    .respond(function(method, url, data, headers){ return [200, updateConnection(data), {}]; });
  $httpBackend.whenDELETE(/http:\/\/api.lelylan.com\/statuses/)
    .respond(function(method, url, data, headers){ return [200, deleteConnection(data), {}]; });

  // Device related
  $httpBackend.whenPUT(/http:\/\/api.lelylan.com\/devices\/1\/properties/)
    .respond(function(method, url, data, headers){ return [200, updateDevice(data), {}]; });


  // Dynamic simulation of connection creation
  var createConnection = function(data) {
    data = angular.fromJson(data);
    var resource = angular.copy({});
    angular.forEach(data, function(value, key) { resource[key] = value; });
    resource.id = JSON.stringify(Math.floor(Math.random()*1000000)) + 10;
    return resource;
  }

  // Dynamic simulation of connection update
  var updateConnection = function(data) {
    data = angular.fromJson(data);
    var resource = angular.copy(property);
    angular.forEach(data, function(value, key) { resource[key] = value; });
    return resource;
  }

  // Dynamic simulation of connection removal
  var deleteConnection = function(data) {
    data = angular.fromJson(data);
    var resource = angular.copy(property);
    angular.forEach(data, function(value, key) { resource[key] = value; });
    return resource;
  }

  // Dynamic simulation of type update
  var updateType = function(data) {
    data = angular.fromJson(data);
    var resource = angular.copy(type);
    if (data.name)        resource.name = data.name;
    if (data.description) resource.description = data.description;
    if (data._properties) resource.properties = data._properties;
    if (data._functions)  resource.functions  = data._functions;
    if (data._statuses)   resource.statuses   = data._statuses;
    if (data.categories)  resource.categories = data.categories;
    return resource;
  }


  /* Simulated Device */

  $httpBackend.whenPUT(/http:\/\/api.lelylan.com\/devices\/1\/properties/)
    .respond(function(method, url, data, headers){ return [200, updateDevice(data), {}]; });

  var updateDevice = function(data) {
    data = angular.fromJson(data);
    var resource = Simulation.get();
    _.each(data.properties, function(property) {
      var result = _.find(resource.properties, function(_property){ return _property.id == property.id; });
      result.expected = result.value = property.value;
    });
    return resource;
  }

  /* Pass through */

  $httpBackend.whenGET(/partials/).passThrough();
  $httpBackend.whenGET(/templates/).passThrough();
  $httpBackend.when('GET', /types.lelylan.com/).passThrough(); // to test the spinner visualization
});
