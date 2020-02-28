(function() {
  'use strict';

  angular.module('app.password.confirm.router', [
    'app.password.confirm.controller'
  ]).config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('password-confirm', {
        url: '/passconfirm/:idUsuario/:recuperacionPass',
        template: '<passconfirm></passconfirm>'
      });


  }

})();
