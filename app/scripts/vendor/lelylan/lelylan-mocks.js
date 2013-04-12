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

  /* Device */

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
});
