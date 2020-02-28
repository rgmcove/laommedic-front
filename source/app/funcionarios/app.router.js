(function() {
  'use strict';

  angular.module('app.funcionarios.router', ['app.funcionarios.controller'])
    .config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('funcionarios', {
        url: '/funcionarios/list',
        template: '<funcionarioslist/>'
      })
      .state('funcionarioscreate', {
        url: '/funcionarios/create',
        template: '<funcionarioscreate></funcionarioscreate>'
      })
      .state('funcionariosupdate', {
        url: '/funcionarios/update/:idUsuario',
        template: '<funcionariosupdate/>'
      });

  }
})();
