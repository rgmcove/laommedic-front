(function() {
  'use strict';

  angular.module('app.ocupaciones.services', [])
    .factory('Ocupaciones', Ocupaciones);


  Ocupaciones.$inject = ['$resource', 'BASEURL'];

  function Ocupaciones($resource, BASEURL) {
    return $resource(BASEURL + '/ocupaciones/:id', {
      id: '@id'
    }, {
      'update': {
        method: 'PUT'
      }
    });
  }



})();
