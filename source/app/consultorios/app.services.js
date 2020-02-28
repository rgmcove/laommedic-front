(function() {
  'use strict';

  angular.module('app.consultorios.services', [])
    .factory('Consultorios', Consultorios);


  Consultorios.$inject = ['$resource', 'BASEURL'];

  function Consultorios($resource, BASEURL) {
    return $resource(BASEURL + '/consultorios/:idConsultorio', {
      idConsultorio: '@idConsultorio'
    }, {
      'update': {
        method: 'PUT'
      },

      queryByNombre: {
        url: BASEURL + '/consultorios/nombre/:query',
        method: 'GET',
        isArray: true,
        params: {
          query: '@query'
        }
      }
    });
  }


})();
