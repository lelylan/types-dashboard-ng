'use strict';


// Generic top level controller
function DashboardCtrl(Type, $scope, $routeParams, $rootScope) {
  $rootScope.active = 'popular';
};

DashboardCtrl.$inject = ['Type', '$scope', '$routeParams', '$rootScope'];


// Popular types (predefined)
function PopularTypesCtrl(Type, $scope, $routeParams, $rootScope) {
  $scope.types = popularTypes;
  $rootScope.active = 'popular';
};

PopularTypesCtrl.$inject = ['Type', '$scope', '$routeParams', '$rootScope'];


// Created types
function PrivateTypesCtrl(Type, $scope, $routeParams, $rootScope) {
  $scope.types = Type.query({ per: 100 });
  $rootScope.active = 'private';
};

PrivateTypesCtrl.$inject = ['Type', '$scope', '$routeParams', '$rootScope'];


// All types
function PublicTypesCtrl(Type, $scope, $routeParams, $rootScope) {
  $scope.types = [];
  $rootScope.active = 'public';
};

PublicTypesCtrl.$inject = ['Type', '$scope', '$routeParams', '$rootScope'];


// Category scpecific types
function CategoriesCtrl(Type, $scope, $routeParams, $rootScope) {
  $rootScope.active = $routeParams.category;
  $scope.types = Type.public({ category: $routeParams.category });
};

CategoriesCtrl.$inject = ['Type', '$scope', '$routeParams', '$rootScope'];


// Single type visualization
function TypeCtrl(Type, $scope, $routeParams, $rootScope) {
  $scope.typeId = $routeParams.typeId;
};

TypeCtrl.$inject = ['Type', '$scope', '$routeParams', '$rootScope'];


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
