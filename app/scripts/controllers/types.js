'use strict';

angular.module('lelylan.dashboards.type')
  .controller('TypesCtrl', function ($scope, $rootScope, $timeout, $q, $location, $route, $cacheFactory, ENV, Device, Type, Category, AccessToken, Dimension, Column, Menu) {


    /* Loads resources */

    $rootScope.load();


    /* Category selection */

    $rootScope.setCategory = function(category) {
      if (category.types) { // does not open when there are no types per category

        $rootScope.currentCategory = category;
        $rootScope.types = (category.tag == 'all') ? $rootScope.all : _.where($rootScope.all, { category: category.tag });
        $scope.currentType = $rootScope.types[0];

        if ($scope.columns.count == 'one') {
          Column.setVisible({ one: false, two: true, three: false });
          Column.set($scope.dimensions);
        }
      }
    }



    /* Type selection */

    $scope.selectType = function(type) {
      $scope.currentType = type;

      if ($scope.columns.count == 'two') {
        Column.setVisible({ one: false, two: true, three: true });
        Menu.set('categories');
      }

      if ($scope.columns.count == 'one') {
        Column.setVisible({ one: false, two: false, three: true });
        Menu.set('list');
      }
    };


    /* Device deleted */

    $rootScope.$on('lelylan:type:delete', function(event, type) {
      var cached = $cacheFactory.get('$http').get(ENV.endpoint + '/types/popular');
      var types  = JSON.parse(cached[1]);

      var _type = _.find(types, function(resource) {
        return resource.id == type.id;
      });

      if (_type) {
        var index = types.indexOf(_type);
        types.splice(index, 1);
        cached[1] = JSON.stringify(types);
      }

      if ($scope.columns.count == 'one') {
        Column.setVisible({ one: false, two: true, three: false });
        Menu.set('categories');
      }

      $route.reload();
    });




    /* ---------- *
     * Navigation *
     * ---------- */


    /* Move back to categories */

    $rootScope.moveToCategories = function() {

      if ($scope.columns.count == 'two') {
        Column.setVisible({ one: true, two: true, three: false });
        Menu.set('none');
      }

      if ($scope.columns.count == 'one') {
        Column.setVisible({ one: true, two: false, three: false });
        Menu.set('none');
      }

    };



    /*
     * Move back to types
     */

    $rootScope.moveToTypes = function() {
      if ($scope.columns.count == 'one') {
        Column.setVisible({ one: false, two: true, three: false });
        Menu.set('categories')
      }
    };


    // set the default menu when opening the page
    if ($scope.columns.count == 'one') {
      Column.setVisible({ one: false, two: true, three: false });
      Menu.set('categories');
    }

  });
