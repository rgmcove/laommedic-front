(function() {
  'use strict';

  angular.module('app.cexternas.services', [])
    .factory('CausasExternas', CausasExternas);


  CausasExternas.$inject = ['$resource', 'BASEURL'];

  function CausasExternas($resource, BASEURL) {
    return $resource(BASEURL + '/causasexternas/:idCausa', {
      idCausa: '@idCausa'
    }, {
      'update': {
        method: 'PUT'
      },
      queryByNombre: {
        url: BASEURL + '/causasexternas/nombre/:query',
        method: 'GET',
        isArray: true,
        params: {
          query: '@query'
        }
      }
    });
  }



})();
