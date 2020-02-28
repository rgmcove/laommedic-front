(function() {
  'use strict';

  angular.module('app.usuarios.router', ['app.usuarios.controller'])
    .config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('usuarios', {
        url: '/usuarios/list',
        template: '<usuarioslist/>'
      })
      .state('usuariosrecep', {
        url: '/usuarios/recep',
        template: '<usuariosrecep/>'
      })
      .state('usuarioscreate', {
        url: '/usuarios/create',
        template: '<usuarioscreate></usuarioscreate>'
      })
      .state('usuariosupdate', {
        url: '/usuarios/update/:idUsuario',
        template: '<usuariosupdate/>'
      });

  }
})();
