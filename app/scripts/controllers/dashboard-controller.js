'use strict';

function DashboardCtrl($scope, $rootScope, $http) {
  $rootScope.active = '';
  $scope.oauth = {
    client:   '<client-id>',
    redirect: '<redirect>',
    scope:    '<scope>',
    state:    '<state>'
  };

  var url = 'http://types.lelylan.com/types/public';
  $http({ method: 'GET', url: url }).success(function() {console.log("YUO")});
};

DashboardCtrl.$inject = ['$scope', '$rootScope', '$http'];


  var cl = new CanvasLoader('lelylan-request-loading');
  cl.setColor('#239cbb');
  cl.setDiameter(20);
  cl.setDensity(70);
  cl.setRange(0.7);
  cl.setSpeed(2);
  cl.setFPS(35);
  cl.show();


