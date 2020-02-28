(function() {
  'use strict';

  angular.module('app.sedes.services', [])
    .factory('Sedes', Sedes);


  Sedes.$inject = ['$resource', 'BASEURL'];

  function Sedes($resource, BASEURL) {
    return $resource(BASEURL + '/sedes/:idSedes', {
      idSedes: '@idSedes'
    }, {
      'update': {
        method: 'PUT'
      },

      queryByNombre: {
        url: BASEURL + '/sedes/nombre/:query',
        method: 'GET',
        isArray: true,
        params: {
          query: '@query'
        }
      },
      findByIdUsuarioSede: {
        url: BASEURL + '/sedes/usuarios/:idUsuario',
        method: 'GET',
        isArray: true,
        params: {
          idUsuario: '@idUsuario'
        }
      }
    });
  }



})();
