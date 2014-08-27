'use strict';

angular.module('lelylan.dashboards.type')
  .controller('MainCtrl', function ($scope, $rootScope, $timeout, $q, $location, $route, $cacheFactory, ENV, Device, Type, Category, AccessToken, Dimension, Column, Menu) {

    // Logged in or out
    $scope.logged = function() {
      return !!AccessToken.get();
    };

    // App dimensions (to fit the page)
    $scope.dimensions = Dimension.get();

    // Visible columns
    $scope.columns = Column.get();

    // Visible menu (on the left)
    $scope.menu = Menu.get();

    // OAuth credentials
    $scope.credentials = ENV.credentials;

    // Typology of types to be selected
    $scope.typology = 'populars';


    /* Initialization */

    $rootScope.load = function() {

      /* Categories API request */

      var categories = Category.all({}, { cache: true }).
        success(function(categories) {
          $rootScope.categories = categories;
          $rootScope.categories.unshift({ tag: 'all', name: 'All'});
          $rootScope.currentCategory = $rootScope.categories[0];
        });


      /* Types API request */

      var types;

      var setTypes = function(types) {
        if (types.length == 0) {
          $location.path('/no-types')
        }

        $rootScope.all   = types;
        $rootScope.types = types;
      }

      if ($scope.typology == 'populars')
        types = Type.popular({ per: 100 }, { cache: true }).success(setTypes);

      if ($scope.typology == 'recents')
        types = Type.public({ per: 50 }, { cache: true }).success(setTypes);

      if ($scope.typology == 'yours')
        types = Type.all({ per: 100 }, { cache: true }).success(setTypes);


      /* Types per category */

      $q.all([categories, types]).then(function(values) {
        _.map($rootScope.categories, function(category) {
          category.types = _.countBy($rootScope.all, function(type) {
            return (type.category == category.tag) ? 'count' : 'missed'
          }).count;
        });

        $rootScope.categories[0].types = $rootScope.all.length;
        init();
      });


      /* Visualization */

      var init = function(values) {
        $rootScope.loading = false;
        $rootScope.setCategory($rootScope.categories[0]);
        $scope.currentType = $rootScope.types[0];
      }
    }


    $rootScope.setTypology = function(typology) {
      $location.path('/');
      $scope.typology = typology;
      $rootScope.load();
    };


    /* Token expiration */

    $scope.$on('oauth:expired', function(event) {
      $location.path('expired');
    });

  });
