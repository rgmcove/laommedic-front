(function() {
  'use strict';

  angular.module('app.tiantecedentes.services', [])
    .factory('TiposAntecedentes', TiposAntecedentes);


  TiposAntecedentes.$inject = ['$resource', 'BASEURL'];

  function TiposAntecedentes($resource, BASEURL) {
    return $resource(BASEURL + '/tiposantecedentes/:idTipoAntecedente', {
      idTipoAntecedente: '@idTipoAntecedente'
    }, {
      'update': {
        method: 'PUT'
      },

      queryByNombre: {
        url: BASEURL + '/tiposantecedentes/nombre/:query',
        method: 'GET',
        isArray: true,
        params: {
          query: '@query'
        }
      }
    });
  }



})();
