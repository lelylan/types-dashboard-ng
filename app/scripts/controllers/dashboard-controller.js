'use strict';

function DashboardCtrl($scope, $rootScope, $http, $location) {
  $rootScope.active = '';
  $scope.oauth = {
    redirect: 'http://t.lelylan.com',
    client:   '49e0f0319b3c773b083c8e3da3b946a10ddf5485d2e3ceadf91428dfb3f05471',
    scope:    'types'
  };

  $scope.$on('lelylan:logout', function(event) {
    $rootScope.active = '';
    $location.path('/');
  });

  $scope.$on('lelylan:type:delete', function(event, type) {
    $rootScope.active = 'yours';
    $location.path('types');
  });
}

DashboardCtrl.$inject = ['$scope', '$rootScope', '$http', '$location'];

var cl = new CanvasLoader('lelylan-request-loading');
cl.setColor('#239cbb');
cl.setShape('spiral');
cl.setDiameter(20);
cl.setDensity(70);
cl.setRange(0.7);
cl.setSpeed(2);
cl.setFPS(35);
cl.show();
