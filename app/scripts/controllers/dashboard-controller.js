'use strict';

function DashboardCtrl($scope, $rootScope, $http, $location) {
  $rootScope.active = '';
  $scope.oauth = {
    redirect: 'http://localhost:3501/',
    client:   '81e265dbf00569f9ba39dcc0dc0043020cdb4d2030ad77233be7c27aa447977e',
    scope:    'types',
    state:    ''
  };

  $scope.$on('lelylan:logout', function(event) {
    $location.path('/');
  });
};

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
