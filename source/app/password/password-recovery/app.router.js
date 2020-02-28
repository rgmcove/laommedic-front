(function() {
  'use strict';

  angular.module('app.password.recovery.router', [
    'app.password.recovery.controller'
  ]).config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('password-recovery', {
        url: '/passrecovery',
        template: '<passrecovery></passrecovery>'
      });


  }

})();
