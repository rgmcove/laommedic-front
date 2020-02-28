(function() {
  'use strict';

  angular.module('app.auditausuarios.router', [
      'app.auditausuarios.controller'
    ])
    .config(configure);

  //Se inyecta los parametros
  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  //Se configura las rutas de la aplicación para modelo
  function configure($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('auditausuarios', {
        url: '/auditausuarios',

        template: '<auditausuarios/>'


      });
  }
})();
