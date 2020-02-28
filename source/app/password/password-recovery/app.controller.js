(function() {
  'use strict';

  angular.module('app.password.recovery.controller', []).controller(
    'PassRecoveryCtrl', PassRecoveryCtrl);


  PassRecoveryCtrl.$inject = ['$location', '$mdToast', '$stateParams',
    'RecoveryPass'
  ];

  function PassRecoveryCtrl($location, $mdToast, $stateParams, RecoveryPass) {

    var vm = this;

    vm.enviar = function() {

      RecoveryPass.save(vm.recovery, function() {
        $location.path('/');
        $mdToast.show(
          $mdToast.simple()
          .textContent(
            'Se Enviado Un email a tu correo Electronico...')
          .position('bottom right'));
      }, function() {
        $mdToast.show(
          $mdToast.simple()
          .textContent(
            'El Correo Electronico No Esta Registrado')
          .position('bottom right'));

      });
    };
  }



})();
