'use strict';

var test = angular.module('test', ['lelylan.dashboards.types', 'ngMockE2E']);

test.run(function($httpBackend) {

  // Get the created types
  $httpBackend.whenGET('http://api.lelylan.com/types?per=100').respond(yourTypes);

  // Get a type
  $httpBackend.whenGET('http://api.lelylan.com/types/1').respond(type);

  $httpBackend.whenGET(/partials/).passThrough();
  $httpBackend.whenGET(/templates/).passThrough();
});
