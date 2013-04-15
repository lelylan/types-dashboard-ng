'use strict';

function YoursCtrl(Type, AccessToken, $scope, $rootScope) {
  $rootScope.active = 'yours';
  $scope.authorized = (!!AccessToken.get().access_token);
  $scope.loading    = true;
  $scope.types      = Type.query({ per: 100 }, function(){ $scope.message = false });
};

YoursCtrl.$inject = ['Type', 'AccessToken', '$scope', '$rootScope'];
