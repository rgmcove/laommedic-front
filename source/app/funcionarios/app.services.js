(function() {
  'use strict';

  angular.module('app.funcionarios.services', [])
    .factory('Roles', Roles)
    .factory('TiposSangre', TiposSangre)
    .factory('TiposUsuarios', TiposUsuarios)
    .factory('EstadosCiviles', EstadosCiviles);


  Roles.$inject = ['$resource', 'BASEURL'];

  function Roles($resource, BASEURL) {
    return $resource(BASEURL + '/roles');
  }

  TiposSangre.$inject = ['$resource', 'BASEURL'];

  function TiposSangre($resource, BASEURL) {
    return $resource(BASEURL + '/tipossangre');
  }

  TiposUsuarios.$inject = ['$resource', 'BASEURL'];

  function TiposUsuarios($resource, BASEURL) {
    return $resource(BASEURL + '/tiposusuarios');
  }

  EstadosCiviles.$inject = ['$resource', 'BASEURL'];

  function EstadosCiviles($resource, BASEURL) {
    return $resource(BASEURL + '/estadosciviles');
  }

})();
