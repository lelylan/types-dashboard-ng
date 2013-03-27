'use strict';

var app = angular.module('lelylan.dashboards.types', [
  'ui.bootstrap',
  'lelylan'
]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/types/:id', { templateUrl: '/partials/type.html',  controller: TypeCtrl }).
    when('/popular',   { templateUrl: '/partials/types.html', controller: PopularTypesCtrl }).
    when('/public',    { templateUrl: '/partials/types.html', controller: PublicTypesCtrl }).
    when('/types',     { templateUrl: '/partials/types.html', controller: PrivateTypesCtrl }).
    when('/categories/:category', { templateUrl: '/partials/types.html',  controller: CategoriesCtrl }).
    otherwise({redirectTo: '/popular'});
}]);
