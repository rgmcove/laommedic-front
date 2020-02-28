(function() {
  'use strict';

  angular.module('app.pertratante.services', [])
    .factory('PersonalTratante', PersonalTratante);


  PersonalTratante.$inject = ['$resource', 'BASEURL'];

  function PersonalTratante($resource, BASEURL) {
    return $resource(BASEURL + '/personaltratante/:idPersonal', {
      idPersonal: '@idPersonal'
    }, {
      'update': {
        method: 'PUT'
      },
      queryByNombre: {
        url: BASEURL + '/personaltratante/nombre/:query',
        method: 'GET',
        isArray: true,
        params: {
          query: '@query'
        }
      }
    });
  }



})();
