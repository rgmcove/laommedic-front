(function() {
  'use strict';

  angular.module('app.tiantecedentes.router', [
      'app.tiantecedentes.controller'
    ])
    .config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('tiantecedentescreate', {
        url: '/tiantecedentes/create',
        template: '<tiantecedentescreate></tiantecedentescreate>'
      })
      .state('tiantecedenteslist', {
        url: '/tiantecedentes/list',
        template: '<tiantecedenteslist></tiantecedenteslist>'
      })
      .state('tiantecedentesupdate', {
        url: '/tiantecedentes/update/:idTipoAntecedente',
        template: '<tiantecedentesupdate></tiantecedentesupdate>'
      });

  }

})();
