(function() {
  'use strict';

  angular.module('app.usuarios.services', [])
    .factory('Usuarios', Usuarios)
    .factory('Generos', Generos)
    .factory('Escolaridades', Escolaridades)
    .factory('TipoDocumentos', TipoDocumentos)
    .factory('EntidadesAdministradoras', EntidadesAdministradoras)
    .factory('TipoAfiliados', TipoAfiliados)
    .factory('Ips', Ips)
    .factory('Ciudades', Ciudades);

  Usuarios.$inject = ['$resource', 'BASEURL'];

  function Usuarios($resource, BASEURL) {
    return $resource(BASEURL + '/usuarios/:idUsuario', {
      idUsuario: '@idUsuario'
    }, {
      'update': {
        method: 'PUT'
      },

      queryByIdenti: {
        url: BASEURL + '/usuarios/numero/:query',
        method: 'GET',
        isArray: true,
        params: {
          query: '@query'
        }
      },

      findBySede: {
        url: BASEURL + '/usuarios/sede/:query',
        method: 'GET',
        isArray: true,
        params: {
          query: '@query'
        }
      },

      findByFisio: {
        url: BASEURL + '/usuarios/numer/:query',
        method: 'GET',
        isArray: true,
        params: {
          query: '@query'
        }
      },
      findByIdAndCode: {
        url: BASEURL + '/usuarios/codigo/:idUsuario/:recuperacionPass',
        method: 'GET',
        params: {
          idUsuario: '@idUsuario',
          recuperacionPass: '@recuperacionPass',
        }
      },
      updatePass: {
        url: BASEURL + '/usuarios/passconfirm/:idUsuario',
        method: 'PUT',
        params: {
          idUsuario: '@idUsuario'
        }
      }
    });
  }



  Ciudades.$inject = ['$resource', 'BASEURL'];

  function Ciudades($resource, BASEURL) {
    return $resource(BASEURL + '/ciudades/:idCiudad', {
      idCiudad: '@idCiudad'
    }, {
      queryByNombre: {
        url: BASEURL + '/ciudades/nombre/:query',
        method: 'GET',
        isArray: true,
        params: {
          query: '@query'
        }
      }
    });
  }

  EntidadesAdministradoras.$inject = ['$resource', 'BASEURL'];

  function EntidadesAdministradoras($resource, BASEURL) {
    return $resource(BASEURL + '/administradoras', {
      codigoEntidad: '@codigoEntidad'
    }, {
      findByNombre: {
        url: BASEURL + '/administradoras/nombre/:query',
        method: 'GET',
        isArray: true,
        params: {
          query: '@query'
        }
      }
    });
  }

  Ips.$inject = ['$resource', 'BASEURL'];

  function Ips($resource, BASEURL) {
    return $resource(BASEURL + '/ips', {
      idIps: '@idIps'
    }, {
      findByNombre: {
        url: BASEURL + '/ips/nombre/:query',
        method: 'GET',
        isArray: true,
        params: {
          query: '@query'
        }
      }
    });
  }

  TipoAfiliados.$inject = ['$resource', 'BASEURL'];

  function TipoAfiliados($resource, BASEURL) {
    return $resource(BASEURL + '/afiliados');
  }

  Generos.$inject = ['$resource', 'BASEURL'];

  function Generos($resource, BASEURL) {
    return $resource(BASEURL + '/generos/:idGenero', {
      idGenero: '@idGenero'
    }, {
      queryByNombre: {
        url: BASEURL + '/generos/nombre/:query',
        method: 'GET',
        isArray: true,
        params: {
          query: '@query'
        }
      }
    });
  }

  Escolaridades.$inject = ['$resource', 'BASEURL'];

  function Escolaridades($resource, BASEURL) {
    return $resource(BASEURL + '/escolaridades/:idEscolaridad', {
      idEscolaridad: '@idEscolaridad'
    }, {
      queryByNombre: {
        url: BASEURL + '/escolaridades/nombre/:query',
        method: 'GET',
        isArray: true,
        params: {
          query: '@query'
        }
      }
    });
  }

  TipoDocumentos.$inject = ['$resource', 'BASEURL'];

  function TipoDocumentos($resource, BASEURL) {
    return $resource(BASEURL + '/tipodocumentos/:idTipoDocumento', {
      idTipoDocumento: '@idTipoDocumento'
    }, {
      queryByNombre: {
        url: BASEURL + '/tipodocumentos/nombre/:query',
        method: 'GET',
        isArray: true,
        params: {
          query: '@query'
        }
      }
    });
  }


})();
