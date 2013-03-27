function PopularTypesCtrl(Type, $scope, $routeParams) {
  $scope.types = popularTypes;

  var converter = new Showdown.converter();
  _.each($scope.types, function(type) { type.description = converter.makeHtml(type.description); })
}

function PublicTypesCtrl(Type, $scope, $routeParams) {
  $scope.types = [];
}

function PrivateTypesCtrl(Type, $scope, $routeParams) {
  $scope.types = [];
}

PopularTypesCtrl.$inject = ['Type', '$scope', '$routeParams'];
PublicTypesCtrl.$inject = ['Type', '$scope', '$routeParams'];
PrivateTypesCtrl.$inject = ['Type', '$scope', '$routeParams'];

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
