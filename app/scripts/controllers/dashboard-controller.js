'use strict';

function DashboardCtrl($scope, $rootScope) {
  $rootScope.active = '';
  $scope.oauth = {
    client:   '<client-id>',
    redirect: '<redirect>',
    scope:    '<scope>',
    state:    '<state>'
  };
};

DashboardCtrl.$inject = ['$scope', '$rootScope'];
