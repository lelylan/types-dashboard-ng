'use strict';

angular.module('lelylan.dashboards.type')
  .controller('CreateCtrl', function ($scope, $rootScope, $location, $cacheFactory, $timeout, ENV, Device, Type, AccessToken, Menu) {

    // set the view as loaded
    $rootScope.loading = false;

    // set lelylan as top menu
    Menu.set('lelylan');


    // set physical (step 3)
    $scope.createType = function() {
      Type.create({ name: $scope.type.name, category: 'others' }).
        success(function(data) {
          $scope.type.id = data.id;
        });
    }

    // redirect to the devices list and add the new devices to the list (if everything is cached)
    $scope.complete = function() {

      // remove the cached types
      var cached = $cacheFactory.get('$http').remove(ENV.endpoint + '/types');

      // redirect
      $location.path('/');
      $rootScope.setTypology('yours');
    }

  });
