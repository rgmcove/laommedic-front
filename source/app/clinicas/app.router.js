(function() {
  'use strict';

  angular.module('app.clinicas.router', ['app.clinicas.controller'])
    .config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('clinicascreate', {
        url: '/clinicas/create',
        template: '<clinicascreate></clinicascreate>'
      })
      .state('clinicaslist', {
        url: '/clinicas/list',
        template: '<clinicaslist></clinicaslist>'
      })
      .state('clinicasupdate', {
        url: '/clinicas/update/:idClinica',
        template: '<clinicasupdate></clinicasupdate>'
      });

  }

})();
