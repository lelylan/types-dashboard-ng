'use strict';

angular.module('lelylan.dashboards.types', ['lelylan.components.type']);

angular.module('lelylan.dashboards.types')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', { templateUrl: 'views/home.html', controller: 'DashboardCtrl' })
      .when('/new', { templateUrl: 'views/new-type.html', controller: 'CreateCtrl' })
      .when('/types', { templateUrl: 'views/types.html', controller: 'YoursCtrl' })
      .when('/popular', { templateUrl: 'views/types.html', controller: 'PopularCtrl' })
      .when('/categories/:category', { templateUrl: 'views/types.html',  controller: 'CategoryCtrl' })
      .when('/types/:typeId', { templateUrl: 'views/type.html',  controller: 'TypeCtrl' })
      .when('/learn', { templateUrl: 'views/learn.html', controller: 'DashboardCtrl' })
      .when('/how', { templateUrl: 'views/how.html', controller: 'DashboardCtrl' })
      .otherwise({redirectTo: '/'});
  }]);
