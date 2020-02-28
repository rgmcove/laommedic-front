(function() {
  'use strict';

  angular.module('app.config', []).constant('BASEURL',
      'http://localhost:8080/laommedic/webresources')
    //'http://laomback-laommedic.rhcloud.com/LAOMMEDIC/webresources')
    .config(configure);

  configure.$inject = ['$authProvider', 'BASEURL'];

  function configure($authProvider, BASEURL) {
    // Parametros de configuración Satellizer
    $authProvider.loginUrl = BASEURL + '/auth/login';
    $authProvider.tokenName = 'token';
    $authProvider.tokenPrefix = 'laommedic-backendedic';
  }

  //En este módulo se pueden declarar y asignar todas las constantes
  //que se usarán en la aplicación.

})();
