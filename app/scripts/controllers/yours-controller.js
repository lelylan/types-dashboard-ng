'use strict';

function YoursCtrl(Type, AccessToken, $scope, $rootScope) {
  $rootScope.active = 'yours';
  $scope.authorized = (!!AccessToken.get().access_token);
  $scope.loading    = true;

  if($scope.authorized) {
    $scope.types = Type.query({ per: 250 }, function(){
      $scope.loading = false;
    });
  }
}

YoursCtrl.$inject = ['Type', 'AccessToken', '$scope', '$rootScope'];
