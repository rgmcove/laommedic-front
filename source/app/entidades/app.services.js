(function() {
  'use strict';

  angular.module('app.entidades.services', [])
    .factory('Entidades', Entidades);


  Entidades.$inject = ['$resource', 'BASEURL'];

  function Entidades($resource, BASEURL) {
    return $resource(BASEURL + '/entidades/:id', { //CUANDO LA LLAVE PRIMARIA NO ES AI
      id: '@id'
    }, {
      'update': {
        method: 'PUT'
      },

      queryByNombre: {
        url: BASEURL + '/entidades/nombre/:query',
        method: 'GET',
        isArray: true,
        params: {
          query: '@query'
        }
      }
    });
  }


})();
