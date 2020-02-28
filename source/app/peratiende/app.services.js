(function() {
  'use strict';

  angular.module('app.peratiende.services', [])
    .factory('PersonalAtiende', PersonalAtiende);


  PersonalAtiende.$inject = ['$resource', 'BASEURL'];

  function PersonalAtiende($resource, BASEURL) {
    return $resource(BASEURL + '/personalatiende/:idAtiende', {
      idAtiende: '@idAtiende'
    }, {
      'update': {
        method: 'PUT'
      },

      queryByNombre: {
        url: BASEURL + '/personalatiende/nombre/:query',
        method: 'GET',
        isArray: true,
        params: {
          query: '@query'
        }
      }
    });
  }


})();
