(function() {
  'use strict';

  angular.module('app.antecedentes.router', ['app.antecedentes.controller'])
    .config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('antecedentescreate', {
        url: '/antecedentes/create',
        template: '<antecedentescreate></antecedentescreate>'
      })
      .state('antecedenteslist', {
        url: '/antecedentes/list',
        template: '<antecedenteslist></antecedenteslist>'
      })
      .state('antecedentesupdate', {
        url: '/antecedentes/update/:idAntecedente',
        template: '<antecedentesupdate></antecedentesupdate>'
      });

  }

})();
