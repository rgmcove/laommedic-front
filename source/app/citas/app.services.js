(function() {
  'use strict';

  angular.module('app.citas.services', [])
    .factory('Citas', Citas)
    .factory('Cups', Cups)
    .factory('FuerzasMusculares', FuerzasMusculares)
    .factory('FinalidadesConsultas', FinalidadesConsultas)
    .factory('TiposDeDiagnosticosPrincipales', TiposDeDiagnosticosPrincipales)
    .factory('EstadoSalidas', EstadoSalidas)
    .factory('IngresoInstituciones', IngresoInstituciones)
    .factory('FinalidadesProcedimientos', FinalidadesProcedimientos)
    .factory('Diagnosticos', Diagnosticos)
    .factory('AmbitosProcedimientos', AmbitosProcedimientos);



  Citas.$inject = ['$resource', 'BASEURL'];

  function Citas($resource, BASEURL) {
    return $resource(BASEURL + '/citas/:idCita', {
      idCita: '@idCita'
    }, {
      'update': {
        method: 'PUT'
      },
      'delete': {
        method: 'DELETE'
      },

      findBySedeInCitas: {
        url: BASEURL + '/citas/sede/:query',
        method: 'GET',
        isArray: true,
        params: {
          query: '@query'
        }
      },
      findByIdUsuario: {
        url: BASEURL + '/citas/historias/:query',
        method: 'GET',
        isArray: true,
        params: {
          query: '@query'
        }
      },
      findByFechas: {
        url: BASEURL +
          '/citas/fechahorarios/:fechaInicio/:fechaFin/:idSede',
        method: 'GET',
        isArray: true,
        params: {
          fechaInicio: '@fechaInicio',
          fechaFin: '@fechaFin',
          idSede: '@idSede'
        }
      },
      findByFechasUser: {
        url: BASEURL +
          '/citas/fechauser/:fechaInicio/:fechaFin/:idUsuario',
        method: 'GET',
        isArray: true,
        params: {
          fechaInicio: '@fechaInicio',
          fechaFin: '@fechaFin',
          idUsuario: '@idUsuario'
        }
      }
    });
  }


  FuerzasMusculares.$inject = ['$resource', 'BASEURL'];

  function FuerzasMusculares($resource, BASEURL) {
    return $resource(BASEURL + '/fuerzasmusculares/:idFuerza', {
      idFuerza: '@idFuerza'
    }, {
      queryByNombre: {
        url: BASEURL + '/fuerzasmusculares/nombre/:query',
        method: 'GET',
        isArray: true,
        params: {
          query: '@query'
        }
      }
    });
  }

  FinalidadesConsultas.$inject = ['$resource', 'BASEURL'];

  function FinalidadesConsultas($resource, BASEURL) {
    return $resource(BASEURL +
      '/finalidadesconsultas/:idFinalidadProcedimiento', {
        idFinalidadProcedimiento: '@idFinalidadProcedimiento'
      }, {
        queryByNombre: {
          url: BASEURL + '/finalidadesconsultas/nombre/:query',
          method: 'GET',
          isArray: true,
          params: {
            query: {
              query: '@query'
            }
          }
        }
      });
  }

  TiposDeDiagnosticosPrincipales.$inject = ['$resource', 'BASEURL'];

  function TiposDeDiagnosticosPrincipales($resource, BASEURL) {
    return $resource(BASEURL + '/tiposdiagnosticos/:idTipoDiagnostico', {
      idTipoDiagnostico: '@idTipoDiagnostico'
    }, {
      queryByNombre: {
        url: BASEURL + '/tiposdiagnosticos/nombre/:query',
        method: 'GET',
        isArray: true,
        params: {
          query: {
            query: '@query'
          }
        }
      }
    });
  }

  EstadoSalidas.$inject = ['$resource', 'BASEURL'];

  function EstadoSalidas($resource, BASEURL) {
    return $resource(BASEURL + '/estadossalidas/:idEstadoSalida', {
      idEstadoSalida: '@idEstadoSalida'
    }, {
      queryByNombre: {
        url: BASEURL + '/estadossalidas/nombre/:query',
        method: 'GET',
        isArray: true,
        params: {
          query: '@query'
        }
      }
    });
  }

  IngresoInstituciones.$inject = ['$resource', 'BASEURL'];

  function IngresoInstituciones($resource, BASEURL) {
    return $resource(BASEURL + '/ingresoinstituciones/:idIngreso', {
      idIngreso: '@idIngreso'
    }, {
      queryByNombre: {
        url: BASEURL + '/ingresoinstituciones/nombre/:query',
        method: 'GET',
        isArray: true,
        params: {
          query: '@query'
        }
      }
    });
  }

  FinalidadesProcedimientos.$inject = ['$resource', 'BASEURL'];

  function FinalidadesProcedimientos($resource, BASEURL) {
    return $resource(BASEURL +
      '/finalidadesprocedimientos/:idFinalidadProcedimiento', {
        idFinalidadProcedimiento: '@idFinalidadProcedimiento'
      }, {
        queryByNombre: {
          url: BASEURL + '/finalidadesprocedimientos/nombre/:query',
          method: 'GET',
          isArray: true,
          params: {
            query: {
              query: '@query'
            }
          }
        }
      });
  }

  AmbitosProcedimientos.$inject = ['$resource', 'BASEURL'];

  function AmbitosProcedimientos($resource, BASEURL) {
    return $resource(BASEURL +
      '/ambitosprocedimientos/:idAmbitoProcedimiento', {
        idAmbitoProcedimiento: '@idAmbitoProcedimiento'
      }, {
        queryByNombre: {
          url: BASEURL + '/ambitosprocedimientos/nombre/:query',
          method: 'GET',
          isArray: true,
          params: {
            query: '@query'
          }
        }
      });
  }

  Diagnosticos.$inject = ['$resource', 'BASEURL'];

  function Diagnosticos($resource, BASEURL) {
    return $resource(BASEURL + '/diagnosticos/:idDiagnosticos', {
      idDiagnosticos: '@idDiagnosticos'
    }, {
      findByNombre: {
        url: BASEURL + '/diagnosticos/nombre/:query',
        method: 'GET',
        isArray: true,
        params: {
          query: '@query'
        }
      }
    });
  }

  Cups.$inject = ['$resource', 'BASEURL'];

  function Cups($resource, BASEURL) {
    return $resource(BASEURL + '/cups/:idCup', {
      idCup: '@idCup'
    }, {
      queryByNombre: {
        url: BASEURL + '/cups/nombre/:query',
        method: 'GET',
        isArray: true,
        params: {
          query: '@query'
        }
      }
    });
  }


})();
