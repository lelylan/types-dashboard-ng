'use strict';

var app = angular.module('lelylan.dashboards.types', ['ui.bootstrap', 'lelylan.components.type']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', { templateUrl: '/partials/home.html', controller: DashboardCtrl }).
    when('/what', { templateUrl: '/partials/what.html', controller: DashboardCtrl }).
    when('/how', { templateUrl: '/partials/how.html', controller: DashboardCtrl }).
    when('/popular', { templateUrl: '/partials/types.html', controller: PopularCtrl }).
    when('/types', { templateUrl: '/partials/types.html', controller: PrivateCtrl }).
    when('/categories/:category', { templateUrl: '/partials/types.html',  controller: CategoryCtrl }).
    when('/new', { templateUrl: '/partials/new-type.html', controller: CreateCtrl }).
    when('/types/:typeId', { templateUrl: '/partials/type.html',  controller: TypeCtrl }).
    otherwise({redirectTo: '/'});
}]);
