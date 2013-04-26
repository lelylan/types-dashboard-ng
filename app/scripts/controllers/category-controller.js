'use strict';

function CategoryCtrl(Type, $scope, $routeParams, $rootScope) {
  $rootScope.active = $routeParams.category;
  $scope.authorized = true;
  $scope.loading = true;

  $scope.types = Type.public({ categories: $routeParams.category }, function(){
    $scope.loading = false;
  });
}

CategoryCtrl.$inject = ['Type', '$scope', '$routeParams', '$rootScope'];
