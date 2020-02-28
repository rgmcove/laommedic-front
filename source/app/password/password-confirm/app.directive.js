(function() {
  'use strict';

  angular.module('app.password.confirm.directive', [

  ]).directive('passconfirm', passconfirm);


  passconfirm.$inject = [];

  function passconfirm() {
    return {
      scope: {},
      templateUrl: 'app/password/password-confirm/password-confirm.html',
      controller: 'PassConfirmCtrl',
      controllerAs: 'vm'
    };
  }



})();
