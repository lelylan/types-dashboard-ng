'use strict';

function PrivateCtrl(Type, AccessToken, $scope, $rootScope) {
  $rootScope.active = 'private';
  $scope.authorized = (!!AccessToken.get().access_token);
  $scope.loading    = true;
  $scope.types      = Type.query({ per: 100 }, function(){ $scope.message = false });
};

PrivateCtrl.$inject = ['Type', 'AccessToken', '$scope', '$rootScope'];
