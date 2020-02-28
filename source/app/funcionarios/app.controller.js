(function() {
  'use strict';

  angular.module('app.funcionarios.controller', [])
    .controller('FuncionariosCreateCtrl', FuncionariosCreateCtrl)
    .controller('FuncionariosListCtrl', FuncionariosListCtrl)
    .controller('FuncionariosUpdateCtrl', FuncionariosUpdateCtrl);

  FuncionariosCreateCtrl.$inject = ['$location', '$mdToast', 'Usuarios',
    'Ciudades', 'Generos', 'Escolaridades', 'TipoDocumentos', 'Roles',
    'TiposSangre', 'EstadosCiviles', 'Sedes'
  ];

  function FuncionariosCreateCtrl($location, $mdToast, Usuarios, Ciudades,
    Generos, Escolaridades, TipoDocumentos, Roles, TiposSangre,
    EstadosCiviles, Sedes) {
    var vm = this;

    console.log('PRUEBAS');
    vm.create = create;
    vm.sedes = Sedes.query();
    vm.tiposdocumentos = [{
      idTipoDocumento: 'CC',
      nombre: 'Cedula Ciudadania'
    }, {
      idTipoDocumento: 'CE',
      nombre: 'Cedula Extranjeria'
    }, {
      idTipoDocumento: 'NIT',
      nombre: 'Numero Identificacion Tributaria'
    }, {
      idTipoDocumento: 'P',
      nombre: 'Pasaporte'
    }];
    vm.tipoSangre = TiposSangre.query();
    vm.estadocivil = EstadosCiviles.query();
    vm.generos = Generos.query();
    vm.roles = [{
      idRoles: 'ADMIN',
      nombreRol: 'Administrador'
    }, {
      idRoles: 'FISIO',
      nombreRol: 'Fisioterapeuta'
    }, {
      idRoles: 'REC',
      nombreRol: 'Recepcionista'
    }];
    vm.escolaridades = Escolaridades.query();
    vm.queryCiudades = queryCiudades;
    vm.dateMax1 = new Date();
    vm.dateMax1.setFullYear(vm.dateMax1.getFullYear());
    vm.dateMax = new Date();
    vm.dateMax.setFullYear(vm.dateMax.getFullYear() - 18);

    function edad() {
      var fec = new Date(vm.funcionario.fechaNacimiento);
      var dia = fec.getDate();
      var mes = fec.getMonth();
      var anio = fec.getYear();
      var fecha_hoy = new Date();
      var ahora_dia = fecha_hoy.getDate();
      var ahora_mes = fecha_hoy.getMonth();
      var ahora_anio = fecha_hoy.getYear();
      var edad = (ahora_anio + 1900) - anio;

      if (ahora_mes < (mes - 1)) {
        edad--;
      }
      if (((mes - 1) == ahora_mes) && (ahora_dia < dia)) {
        edad--;
      }
      if (edad > 1900) {
        edad -= 1900;
      }
      return edad;
    }

    function create() {
      if (vm.funcionario.rolesList.idRoles == 'FISIO') {
        vm.funcionario.idEscolaridad = [{
          idEscolaridad: '06'
        }];
      }
      vm.funcionario.fechaIngreso = new Date();
      vm.funcionario.edad = edad();
      console.log('Información Usuarios');
      console.log(vm.funcionario);
      Usuarios.save(vm.funcionario, function() {
        $location.path('/funcionarios/list');
        $mdToast.show(
          $mdToast.simple()
          .textContent('Registro exitoso')
          .position('bottom right'));
      }, function(error) {
        $mdToast.show(
          $mdToast.simple()
          .textContent(error.status + ' ' + error.data)
          .position('bottom right'));
        console.log(vm.funcionario);
      });
    }

    function queryCiudades(str) {
      return Ciudades.queryByNombre({
        query: str
      });
    }


  }

  FuncionariosListCtrl.$inject = ['$location', 'Usuarios', '$auth'];

  function FuncionariosListCtrl($location, Usuarios, $auth) {
    var vm = this;
    if ($auth.getPayload().roles.indexOf('ADMIN') !== -1) {
      vm.funcionariosList = [];

      var usuario = Usuarios.get({
        idUsuario: $auth.getPayload().sub
      }).$promise.then(function(data) {
        vm.funcionariosList = Usuarios.findBySede({
          query: data.sedesList[0].idSedes
        });
      });
      console.log($auth.getPayload().sedes);

      vm.query = {
        order: 'name',
        limit: 5,
        page: 1
      };

      vm.rol = function(usuario) {
        if ((usuario.rolesList[0].idRoles === 'REC') || (usuario.rolesList[
              0]
            .idRoles ===
            'FISIO') || (usuario.rolesList[0].idRoles === 'ADMIN')) {
          return true;
        } else {
          return false;
        }
      };

    } else {

      vm.funcionariosList = Usuarios.query();

      vm.query = {
        order: 'name',
        limit: 5,
        page: 1
      };

    }
  }

  FuncionariosUpdateCtrl.$inject = ['$stateParams', '$location',
    '$mdToast', 'Usuarios', 'Ciudades', 'Generos', 'Escolaridades',
    'TipoDocumentos',
    'Roles', 'TiposSangre', 'EstadosCiviles', 'Sedes', 'Entidades',
    'Antecedentes', 'TiposUsuarios', 'EntidadesAdministradoras', 'Ips',
    'TipoAfiliados'
  ];

  function FuncionariosUpdateCtrl($stateParams, $location, $mdToast,
    Usuarios, Ciudades, Generos, Escolaridades, TipoDocumentos, Roles,
    TiposSangre,
    EstadosCiviles, Sedes, Entidades, Antecedentes, TiposUsuarios,
    EntidadesAdministradoras, Ips, TipoAfiliados) {
    var vm = this;

    vm.tiposdocumentos = [{
      idTipoDocumento: 'CC',
      nombre: 'Cedula Ciudadania'
    }, {
      idTipoDocumento: 'CE',
      nombre: 'Cedula Extranjeria'
    }, {
      idTipoDocumento: 'NIT',
      nombre: 'Numero Identificacion Tributaria'
    }, {
      idTipoDocumento: 'P',
      nombre: 'Pasaporte'
    }];
    vm.tipoSangre = TiposSangre.query();
    vm.estadocivil = EstadosCiviles.query();
    vm.generos = Generos.query();
    vm.roles = [{
      idRoles: 'ADMIN',
      nombreRol: 'Administrador'
    }, {
      idRoles: 'FISIO',
      nombreRol: 'Fisioterapeuta'
    }, {
      idRoles: 'REC',
      nombreRol: 'Recepcionista'
    }];
    vm.tipoUsuarios = TiposUsuarios.query();
    vm.antecedentes = Antecedentes.query();
    vm.escolaridades = Escolaridades.query();
    vm.queryAdministradoras = queryAdministradoras;
    vm.queryIps = queryIps;
    vm.afiliados = TipoAfiliados.query();
    vm.entidades = Entidades.query();
    vm.queryCiudades = queryCiudades;
    vm.sedes = Sedes.query();
    vm.dateMax = new Date();
    vm.dateMax.setFullYear(vm.dateMax.getFullYear() - 18);
    vm.dateMax1 = new Date();
    vm.dateMax1.setFullYear(vm.dateMax1.getFullYear());

    this.id = $stateParams.idUsuario;
    this.funcionario = Usuarios.get({
      idUsuario: this.id
    });

    this.update = function() {
      Usuarios.update(this.funcionario, function() {
        $location.path('/funcionarios/list');
        $mdToast.show(
          $mdToast.simple()
          .textContent('Se ha actualizado el Funcionario')
          .position('bottom right'));
      });
    };

    function queryCiudades(str) {
      return Ciudades.queryByNombre({
        query: str
      });
    }

    function queryAdministradoras(str) {
      return EntidadesAdministradoras.findByNombre({
        query: str
      });
    }

    function queryIps(str) {
      return Ips.findByNombre({
        query: str
      });
    }

  }

  getCiudades.$inject = ['Ciudades'];

  function getCiudades(Ciudades) {
    return Ciudades.query();
  }


})();
