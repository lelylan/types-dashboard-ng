'use strict';

function PopularCtrl($scope, $rootScope) {
  $rootScope.active = 'popular';
  $scope.authorized = true;
  $scope.loading    = false;
  $scope.types      = popularTypes;
}

PopularCtrl.$inject = ['$scope', '$rootScope'];
