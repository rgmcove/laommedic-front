(function() {
  'use strict';

  angular.module('app.ocupaciones.router', ['app.ocupaciones.controller'])
    .config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('ocupacionescreate', {
        url: '/ocupaciones/create',
        template: '<ocupacionescreate></ocupacionescreate>'
      })
      .state('ocupacioneslist', {
        url: '/ocupaciones/list',
        template: '<ocupacioneslist></ocupacioneslist>'
      })
      .state('ocupacionesupdate', {
        url: '/ocupaciones/update/:idOcupacion',
        template: '<ocupacionesupdate></ocupacionesupdate>'
      });

  }

})();
