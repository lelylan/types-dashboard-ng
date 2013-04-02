'use strict';

// TODO set the correct authorization check and set the oauth2 on testing
function CreateCtrl(Type, AccessToken, $scope, $routeParams, $rootScope, $location) {
  $rootScope.active = 'create';
  $scope.authorized = (!!AccessToken.get().access_token);
  //$scope.authorized = true;
  $scope.type = new Type();

  $scope.create = function() {
    $scope.type.$save(function() {
      $rootScope.active = 'private'
      $location.url('/types/' + $scope.type.id);
    });
  };
};

CreateCtrl.$inject = ['Type', 'AccessToken', '$scope', '$routeParams', '$rootScope', '$location'];
