(function() {
  'use strict';

  angular.module('app.password.recovery.directive', [

  ]).directive('passrecovery', passrecovery);


  passrecovery.$inject = [];

  function passrecovery() {
    return {
      scope: {},
      templateUrl: 'app/password/password-recovery/password-recovery.html',
      controller: 'PassRecoveryCtrl',
      controllerAs: 'vm'
    };
  }



})();
