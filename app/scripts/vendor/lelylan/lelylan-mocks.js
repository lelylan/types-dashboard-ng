'use strict';

var test = angular.module('test', ['lelylan.dashboards.types', 'ngMockE2E']);

test.run(function($httpBackend) {
  // Get user profile
  $httpBackend.whenGET('http://api.lelylan.com/me').respond({ id: 1, email: 'alice@example.com' });
  // Get the created types
  $httpBackend.whenGET('http://api.lelylan.com/types?per=100').respond(yourTypes);
  // Get category based types
  $httpBackend.whenGET('http://api.lelylan.com/types/public?category=lights').respond(yourTypes);
  $httpBackend.whenGET(/http:\/\/api.lelylan.com\/types\/public/).respond([]);
  // Get a type defined by its ID
  $httpBackend.whenGET('http://api.lelylan.com/types/1').respond(type);
  // Create a type
  $httpBackend.whenPOST('http://api.lelylan.com/types').respond(type);

  $httpBackend.whenGET(/partials/).passThrough();
  $httpBackend.whenGET(/templates/).passThrough();
});
