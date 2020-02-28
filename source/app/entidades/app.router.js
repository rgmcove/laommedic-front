(function() {
  'use strict';

  angular.module('app.entidades.router', ['app.entidades.controller'])
    .config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('entidadescreate', {
        url: '/entidades/create',
        template: '<entidadescreate></entidadescreate>'
      })
      .state('entidadeslist', {
        url: '/entidades/list',
        template: '<entidadeslist></entidadeslist>'
      })
      .state('entidadesupdate', {
        url: '/entidades/update/:idEntidad',
        template: '<entidadesupdate></entidadesupdate>'
      });

  }

})();
