'use strict';

function PopularCtrl($scope, $rootScope) {
  $rootScope.active = 'popular';
  $scope.authorized = true;
  $scope.loading    = false;
  $scope.types      = popularTypesList;
}

PopularCtrl.$inject = ['$scope', '$rootScope'];

var popularTypesList = function() {
  return [{
    uri: 'http://api.lelylan.com/types/1',
    id: '1',
    name: 'Basic Light',
    description: 'The **Basic Light** type represents the most basic light structure.',
    categories: ['lights'],
    created_at: '2012-09-01T15:01:22Z',
    updated_at: '2012-09-01T15:01:22Z',
  }, {
    uri: 'http://api.lelylan.com/types/2',
    id: '2',
    name: 'Complex Light',
    description: 'The **Comples Light** type represents the most complete light structure.',
    categories: ['lights'],
    created_at: '2012-09-01T15:01:22Z',
    updated_at: '2012-09-01T15:01:22Z',
  }];
}
