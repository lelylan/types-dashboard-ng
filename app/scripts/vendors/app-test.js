/* Mocks definition */

app.run(['$httpBackend', '$timeout', 'ENV', 'Profile', function($httpBackend, $timeout, ENV, Profile) {

  // Device names
  var names = ['light', 'lock', 'thermostat', 'alarm-clock'];

  // Preset the logged user
  Profile.set({id: '1'});

  // Jasmin configurations
  jasmine.getFixtures().fixturesPath = 'spec/fixtures';

  // Pass through requests
  $httpBackend.when('GET', /views/).passThrough();

  // Shared resources
  var devices = JSON.parse(readFixtures('devices.json'));
  var categories = JSON.parse(readFixtures('categories.json'));
  var privates = JSON.parse(readFixtures('privates.json'));
  var me = JSON.parse(readFixtures('me.json'));

  $httpBackend.whenGET(ENV.endpoint + '/categories').respond(categories);
  $httpBackend.whenGET(ENV.endpoint + '/me').respond(me);
}]);
