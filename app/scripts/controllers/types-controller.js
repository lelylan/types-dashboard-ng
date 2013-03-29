'use strict';

// Generic top level controller
function DashboardCtrl($scope, $rootScope) {
  $rootScope.active = 'popular';
};

DashboardCtrl.$inject = ['$scope', '$rootScope'];


// Popular types (predefined)
function PopularTypesCtrl($scope, $rootScope) {
  $rootScope.active = 'popular';
  $scope.authorized = true;
  $scope.loading    = false;
  $scope.types      = popularTypes;
};

PopularTypesCtrl.$inject = ['$scope', '$rootScope'];


// Created types
function PrivateTypesCtrl(Type, AccessToken, $scope, $rootScope) {
  $rootScope.active = 'private';
  $scope.authorized = (!!AccessToken.get().access_token);
  $scope.loading    = true;
  $scope.types      = Type.query({ per: 100 }, function(){ $scope.message = false });
};

PrivateTypesCtrl.$inject = ['Type', 'AccessToken', '$scope', '$rootScope'];


// Category scpecific types
function CategoriesCtrl(Type, $scope, $routeParams, $rootScope) {
  $rootScope.active = $routeParams.category;
  $scope.authorized = true;
  $scope.loading    = false;
  $scope.types      = Type.public({ category: $routeParams.category }, function(){ $scope.message = false });
};

CategoriesCtrl.$inject = ['Type', '$scope', '$routeParams', '$rootScope'];


// Single type visualization
function TypeCtrl(Type, $scope, $routeParams, $rootScope) {
  $scope.typeId = $routeParams.typeId;
};

TypeCtrl.$inject = ['Type', '$scope', '$routeParams', '$rootScope'];


// Type creation view
function CreateTypeCtrl(Type, AccessToken, $scope, $routeParams, $rootScope, $location) {
  $rootScope.active = 'create';
  $scope.authorized = (!!AccessToken.get().access_token);
  //$scope.authorized = true;
  $scope.type = new Type();
  $scope.create = function() {
    $scope.type.$save(function() { $location.url('/types/' + $scope.type.id); });
  };
};

TypeCtrl.$inject = ['Type', 'AccessToken', '$scope', '$routeParams', '$rootScope', '$location'];


var popularTypes = [{
  uri: 'http://api.lelylan.com/types/1',
  id: '1',
  name: 'Basic Light',
  description: 'The **Basic Light** type represents the most basic light structure.',
  categories: ['lights'],
  created_at: '2012-09-01T15:01:22Z',
  updated_at: '2012-09-01T15:01:22Z',
}, {
  uri: 'http://api.lelylan.com/types/1',
  id: '1',
  name: 'Complex Light',
  description: 'The **Comples Light** type represents the most complete light structure.',
  categories: ['lights'],
  created_at: '2012-09-01T15:01:22Z',
  updated_at: '2012-09-01T15:01:22Z',
}];
