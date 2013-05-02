'use strict';

function DashboardCtrl($scope, $rootScope, $http, $location, $timeout) {
  $rootScope.active = '';
  $scope.alerts = [];

  $scope.oauth = {
    client:   '49e0f0319b3c773b083c8e3da3b946a10ddf5485d2e3ceadf91428dfb3f05471',
    redirect: 'http://t.lelylan.com',
    scope:    'types'
  };

  $scope.$on('lelylan:logout', function(event) {
    $rootScope.active = '';
    $location.path('/');
  });

  $scope.$on('lelylan:type:delete', function(event, type) {
    $rootScope.active = 'yours';
    $location.path('types');
    $scope.alerts.push({ type: 'success', msg: type.name + ' successfully deleted' })
    $timeout(function() { $scope.closeAlert($scope.alerts.length - 1) }, 10000);
  });

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
}

DashboardCtrl.$inject = ['$scope', '$rootScope', '$http', '$location', '$timeout'];

var cl = new CanvasLoader('lelylan-request-loading');
cl.setColor('#239cbb');
cl.setShape('spiral');
cl.setDiameter(20);
cl.setDensity(70);
cl.setRange(0.7);
cl.setSpeed(2);
cl.setFPS(35);
cl.show();
