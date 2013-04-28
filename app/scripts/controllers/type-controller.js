'use strict';

function TypeCtrl($scope, $routeParams, $location) {
  $scope.typeId = $routeParams.typeId;
}

TypeCtrl.$inject = ['$scope', '$routeParams', '$location'];
