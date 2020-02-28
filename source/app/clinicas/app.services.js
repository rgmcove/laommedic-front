(function() {
  'use strict';

  angular.module('app.clinicas.services', [])
    .factory('Clinicas', Clinicas)
    .factory('Regimenes', Regimenes);


  Clinicas.$inject = ['$resource', 'BASEURL'];

  function Clinicas($resource, BASEURL) {
    return $resource(BASEURL + '/clinicas/:idClinica', {
      idClinica: '@idClinica'
    }, {
      'update': {
        method: 'PUT'
      },

      queryByNombre: {
        url: BASEURL + '/clinicas/nombre/:query',
        method: 'GET',
        isArray: true,
        params: {
          query: '@query'
        }
      }
    });
  }

  Regimenes.$inject = ['$resource', 'BASEURL'];

  function Regimenes($resource, BASEURL) {
    return $resource(BASEURL + '/regimenes/:idRegimen', {
      idRegimen: '@idRegimen'
    }, {
      queryByNombre: {
        url: BASEURL + '/regimenes/nombre/:query',
        method: 'GET',
        isArray: true,
        params: {
          query: '@query'
        }
      }
    });
  }

})();
