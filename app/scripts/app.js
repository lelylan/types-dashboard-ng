'use strict';

var app = angular.module('lelylan.dashboards.types', [
  'ui.bootstrap',
  'lelylan',
  'lelylan.components.type'
]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/types/:typeId', { templateUrl: '/partials/type.html',  controller: TypeCtrl }).
    when('/popular', { templateUrl: '/partials/types.html', controller: PopularTypesCtrl }).
    when('/types', { templateUrl: '/partials/types.html', controller: PrivateTypesCtrl }).
    when('/categories/:category', { templateUrl: '/partials/types.html',  controller: CategoriesCtrl }).
    otherwise({redirectTo: '/popular'});
}]);
