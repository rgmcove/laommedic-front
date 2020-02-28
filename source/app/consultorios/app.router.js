(function() {
  'use strict';

  angular.module('app.consultorios.router', ['app.consultorios.controller'])
    .config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('consultorioscreate', {
        url: '/consultorios/create',
        template: '<consultorioscreate></consultorioscreate>'
      })
      .state('consultorioslist', {
        url: '/consultorios/list',
        template: '<consultorioslist></consultorioslist>'
      })
      .state('consultoriosupdate', {
        url: '/consultorios/update/:idConsultorio',
        template: '<consultoriosupdate></consultoriosupdate>'
      });

  }

})();
