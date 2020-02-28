(function() {
  'use strict';

  angular.module('app.auditacitas.router', [
      'app.auditacitas.controller'
    ])
    .config(configure);

  //Se inyecta los parametros
  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  //Se configura las rutas de la aplicación para modelo
  function configure($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('auditacitas', {
        url: '/auditacitas',

        template: '<auditacitas/>'

      });
  }
})();
