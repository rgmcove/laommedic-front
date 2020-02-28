(function() {
  'use strict';

  angular.module('app.peratiende.router', ['app.peratiende.controller'])
    .config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('peratiendecreate', {
        url: '/peratiende/create',
        template: '<peratiendecreate></peratiendecreate>'
      })
      .state('peratiendelist', {
        url: '/peratiende/list',
        template: '<peratiendelist></peratiendelist>'
      })
      .state('peratiendeupdate', {
        url: '/peratiende/update/:idAtiende',
        template: '<peratiendeupdate></peratiendeupdate>'
      });

  }

})();
