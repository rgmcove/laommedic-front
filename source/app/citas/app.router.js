(function() {
  'use strict';

  angular.module('app.citas.router', ['app.citas.controller'])
    .config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('citaslist', {
        url: '/citas/list',
        template: '<citaslist/>'
      })
      .state('citascreate', {
        url: '/citas/create',
        template: '<citascreate></citascreate>'
      })
      .state('citasupdate', {
        url: '/citas/update/:idCita',
        template: '<citasupdate></citasupdate>'
      })
      .state('citasdelete', {
        url: '/citas/delete/:idCita',
        template: '<citasdelete></citasdelete>'
      })
      .state('citas', {
        url: '/citas/:idCita',
        template: '<citas></citas>'
      })
      .state('agendalist', {
        url: '/agenda/list',
        template: '<agendalist></agendalist>'
      })
      .state('agenda', {
        url: '/agenda',
        template: '<agenda/>'
      })
      .state('historias', {
        url: '/historias',
        template: '<historias></historias>'
      });

  }
})();
