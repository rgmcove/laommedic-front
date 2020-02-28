(function() {
  'use strict';

  angular.module('app.pertratante.router', ['app.pertratante.controller'])
    .config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('pertratantecreate', {
        url: '/pertratante/create',
        template: '<pertratantecreate></pertratantecreate>'
      })
      .state('pertratantelist', {
        url: '/pertratante/list',
        template: '<pertratantelist></pertratantelist>'
      })
      .state('pertratanteupdate', {
        url: '/pertratante/update/:idPersonal',
        template: '<pertratanteupdate></pertratanteupdate>'
      });

  }

})();
