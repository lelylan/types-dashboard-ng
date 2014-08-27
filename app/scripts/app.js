'use strict';

angular.module('lelylan.dashboards.type', [
  'lelylan.dashboards.dimension',
  'lelylan.dashboards.column',
  'lelylan.dashboards.menu',
  'lelylan.directives.type',
  'config',
  'ngRoute'
]);

// routing
angular.module('lelylan.dashboards.type').config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/types.html',
      controller:  'TypesCtrl'
    })
    .when('/types/:id/', {
      templateUrl: 'views/type.html',
      controller: function ($scope, $rootScope, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.url = window.location.href;
        $rootScope.page = 'type';
        $rootScope.loading = false;
      }
    })
    .when('/types/:id/embed', {
      templateUrl: 'views/type.html',
      controller: function ($scope, $rootScope, $routeParams) {
        $scope.id = $routeParams.id;
        $rootScope.embed = 'embed';
        $rootScope.loading = false;
      }
    })
    .when('/create', {
      templateUrl: 'views/create.html',
      controller:  'CreateCtrl'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: function($rootScope, $timeout, AccessToken) {
        $rootScope.loading = false;
        $timeout(function() {
          if(!!AccessToken.get()) {
            $location.path('/');
            $location.replace();
          }
        }, 0);
      }
    })
    .when('/expired', {
      templateUrl: 'views/expired.html',
      controller: function($rootScope) {
        $rootScope.loading = false;
      }
    })
    .when('/no-types', {
      templateUrl: 'views/no-types.html',
      controller: function($rootScope) {
        $rootScope.loading = false;
      }
    })
    .when('/access_token=:accessToken', {
      template: '-',
      controller: function ($location, $route, $routeParams, $timeout, AccessToken) {
        var hash = $location.path().substr(1);
        AccessToken.setTokenFromString(hash);
        $location.path('/');
        $location.replace();
      }
    })
    .otherwise({
      redirectTo: '/'
    });
})

// spinner on http request
angular.module('lelylan.dashboards.type').config(function ($httpProvider) {
  $httpProvider.responseInterceptors.push('myHttpInterceptor');
  var spinnerFunction = function spinnerFunction(data, headersGetter) {
    $("#spinner").show();
    return data;
  };

  $httpProvider.defaults.transformRequest.push(spinnerFunction);
});

angular.module('lelylan.dashboards.type').factory('myHttpInterceptor', function ($q, $window) {
  return function (promise) {
    return promise.then(function (response) {
      $("#spinner").hide();
      return response;
    }, function (response) {
      $("#spinner").hide();
      return $q.reject(response);
    });
  };
});

angular.module('lelylan.dashboards.type')
.directive('dynFbCommentBox', function () {
    function createHTML(href, numposts, width, colorscheme) {
        return '<div class="fb-comments" ' +
                       'data-href="' + href + '" ' +
                       'data-numposts="' + numposts + '" ' +
                       'data-width="' + width + '" ' +
                       'data-colorsheme="' + colorscheme + '">' +
               '</div>';
    }

    return {
        restrict: 'A',
        scope: {},
        link: function postLink(scope, elem, attrs) {
            attrs.$observe('pageHref', function (newValue) {
                var href        = newValue;
                var numposts    = attrs.numposts    || 5;
                var colorscheme = attrs.colorscheme || 'light';
                var width       = attrs.width || '100px';

                elem.html(createHTML(href, numposts, width, colorscheme));
                FB.XFBML.parse(elem[0]);
            });
        }
    };
});
