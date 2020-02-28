(function() {
  'use strict';

  angular.module('app.recepcionista.router', [

    ])
    .config(configure);

  //Se inyecta los parametros
  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  //Se configura las rutas de la aplicación para modelo
  function configure($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('recepcionista', {
        url: '/recepcionista',
        template: '<recepcionista/>'

      });
  }
})();
