'use strict';

function DashboardCtrl($scope, $rootScope, $http) {
  $rootScope.active = '';
  $scope.oauth = {
    client:   '<client-id>',
    redirect: '<redirect>',
    scope:    '<scope>',
    state:    '<state>'
  };
};

DashboardCtrl.$inject = ['$scope', '$rootScope', '$http'];

var cl = new CanvasLoader('lelylan-request-loading');
cl.setColor('#239cbb');
cl.setShape('spiral');
cl.setDiameter(20);
cl.setDensity(70);
cl.setRange(0.7);
cl.setSpeed(2);
cl.setFPS(35);
cl.show();
