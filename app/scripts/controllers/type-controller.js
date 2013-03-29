'use strict';

function TypeCtrl($scope, $routeParams) {
  $scope.typeId = $routeParams.typeId;
};

TypeCtrl.$inject = ['$scope', '$routeParams'];
