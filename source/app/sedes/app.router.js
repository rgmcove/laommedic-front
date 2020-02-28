(function() {
  'use strict';

  angular.module('app.sedes.router', ['app.sedes.controller'])
    .config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('sedescreate', {
        url: '/sedes/create',
        template: '<sedescreate></sedescreate>'
      })
      .state('sedeslist', {
        url: '/sedes/list',
        template: '<sedeslist></sedeslist>'
      })
      .state('sedesupdate', {
        url: '/sedes/update/:idSedes',
        template: '<sedesupdate></sedesupdate>'
      });

  }

})();
