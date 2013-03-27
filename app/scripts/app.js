'use strict';

var app = angular.module('lelylan.dashboards.types', [
  'ui.bootstrap',
  'lelylan'
]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/types/popular', {templateUrl: '/partials/types.html', controller: PopularTypesCtrl}).
    when('/types/public',  {templateUrl: '/partials/types.html', controller: PublicTypesCtrl}).
    when('/types',         {templateUrl: '/partials/types.html', controller: PrivateTypesCtrl}).
    otherwise({redirectTo: '/types/popular'});
}]);


