'use strict';

function CategoryCtrl(Type, $scope, $routeParams, $rootScope) {
  $rootScope.active = $routeParams.category;
  $scope.authorized = true;
  $scope.loading    = false;
  $scope.types      = Type.public({ category: $routeParams.category }, function(){ $scope.message = false });
};

CategoryCtrl.$inject = ['Type', '$scope', '$routeParams', '$rootScope'];
