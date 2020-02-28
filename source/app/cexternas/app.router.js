(function() {
  'use strict';

  angular.module('app.cexternas.router', ['app.cexternas.controller'])
    .config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('cexternascreate', {
        url: '/cexternas/create',
        template: '<cexternascreate></cexternascreate>'
      })
      .state('cexternaslist', {
        url: '/cexternas/list',
        template: '<cexternaslist></cexternaslist>'
      })
      .state('cexternasupdate', {
        url: '/cexternas/update/:idCausa',
        template: '<cexternasupdate></cexternasupdate>'
      });

  }

})();
