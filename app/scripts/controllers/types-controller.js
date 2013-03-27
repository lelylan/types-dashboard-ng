function PopularTypesCtrl(Type, $scope, $routeParams, $rootScope) {
  console.log('Popular');
  $rootScope.active = 'popular';
  $scope.types  = popularTypes;

  var converter = new Showdown.converter();
  _.each($scope.types, function(type) { type.description = converter.makeHtml(type.description); })
}

function PublicTypesCtrl(Type, $scope, $routeParams, $rootScope) {
  console.log('Public');
  $rootScope.active = 'public';
  $scope.types = [];
}

function PrivateTypesCtrl(Type, $scope, $routeParams, $rootScope) {
  console.log('Private');
  $rootScope.active = 'private';
  $scope.types = [];
}

function CategoriesCtrl(Type, $scope, $routeParams, $rootScope) {
  console.log('Category');
  $rootScope.active = $routeParams.category;
  $scope.types = [];
}

function TypeCtrl(Type, $scope, $routeParams, $rootScope) {
  $rootScope.active = 'public';
  $scope.id = $routeParams.id;
}

function DashboardCtrl(Type, $scope, $routeParams, $rootScope) {
  $rootScope.active = 'popular';
}


PopularTypesCtrl.$inject = ['Type', '$scope', '$routeParams', '$rootScope'];
PublicTypesCtrl.$inject  = ['Type', '$scope', '$routeParams', '$rootScope'];
PrivateTypesCtrl.$inject = ['Type', '$scope', '$routeParams', '$rootScope'];
TypeCtrl.$inject         = ['Type', '$scope', '$routeParams', '$rootScope'];

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
