(function() {
  'use strict';

  angular.module('app.paciente.router', [

    ])
    .config(configure);

  //Se inyecta los parametros
  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  //Se configura las rutas de la aplicación para modelo
  function configure($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('paciente', {
        url: '/paciente',
        template: '<paciente/>'

      });
  }
})();
