(function() {
  'use strict';

  angular.module('app.antecedentes.services', [])
    .factory('Antecedentes', Antecedentes);


  Antecedentes.$inject = ['$resource', 'BASEURL'];

  function Antecedentes($resource, BASEURL) {
    return $resource(BASEURL + '/antecedentes/:idAntecedente', {
      idAntecedente: '@idAntecedente'
    }, {
      'update': {
        method: 'PUT'
      }
    });
  }



})();
