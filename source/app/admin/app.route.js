(function() {
  'use strict';

  angular.module('app.admin.router', [
      'app.admin.controller'
    ])
    .config(configure);

  //Se inyecta los parametros
  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  //Se configura las rutas de la aplicación para modelo
  function configure($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('admin', {
        url: '/admin',
        template: '<administrador></administrador>'
      });
  }
})();
