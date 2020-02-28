(function() {
  'use strict';

  angular.module('app.usuarios.controller', [])
    .controller('UsuariosCreateCtrl', UsuariosCreateCtrl)
    .controller('UsuariosListCtrl', UsuariosListCtrl)
    .controller('UsuariosUpdateCtrl', UsuariosUpdateCtrl);

  UsuariosCreateCtrl.$inject = ['$location', '$mdToast', '$auth', 'Usuarios',
    'TipoDocumentos', 'Antecedentes', 'Sedes', 'Ciudades', 'TiposUsuarios',
    'Entidades', 'EntidadesAdministradoras', 'Ips', 'TipoAfiliados',
    'Generos', 'Escolaridades', 'TiposSangre', 'EstadosCiviles'
  ];

  function UsuariosCreateCtrl($location, $mdToast, $auth, Usuarios,
    TipoDocumentos,
    Antecedentes, Sedes, Ciudades, TiposUsuarios, Entidades,
    EntidadesAdministradoras, Ips, TipoAfiliados, Generos, Escolaridades,
    TiposSangre,
    EstadosCiviles) {
    var vm = this;

    console.log('PRUEBAS');
    vm.create = create;
    vm.tipoUsuarios = TiposUsuarios.query();
    vm.entidades = Entidades.query();
    vm.generos = Generos.query();
    vm.escolaridades = Escolaridades.query();
    vm.tipoSangre = TiposSangre.query();
    vm.estadocivil = EstadosCiviles.query();
    vm.queryAdministradoras = queryAdministradoras;
    vm.queryIps = queryIps;
    vm.afiliados = TipoAfiliados.query();
    vm.sedes = Sedes.query();
    vm.queryCiudades = queryCiudades;
    vm.antecedentes = Antecedentes.query();
    vm.tiposdocumentos = TipoDocumentos.query();
    vm.dateMax = new Date();
    vm.dateMax.setFullYear(vm.dateMax.getFullYear() - 1);

    function edad() {
      var fec = new Date(vm.usuario.fechaNacimiento);
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
      vm.usuario.rolesList = [{
        idRoles: 'USR'
      }];
      vm.usuario.fechaIngreso = new Date();
      vm.usuario.edad = edad();

      console.log('Información Usuarios');
      console.log(vm.usuario);
      Usuarios.save(vm.usuario, function() {
        if ($auth.getPayload().roles.indexOf('REC') !== -1) {
          $location.path('/recepcionista');
        } else {
          $location.path('/');
        }
        $mdToast.show(
          $mdToast.simple()
          .textContent('Registro exitoso')
          .position('bottom right'));
      }, function(error) {
        $mdToast.show(
          $mdToast.simple()
          .textContent(error.status + ' ' + error.data)
          .position('bottom right'));
        console.log(vm.usuario);
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

    function queryCiudades(str) {
      return Ciudades.queryByNombre({
        query: str
      });
    }


  }



  UsuariosListCtrl.$inject = ['$location', 'Usuarios', '$auth'];

  function UsuariosListCtrl($location, Usuarios, $auth) {
    var vm = this;
    if (($auth.getPayload().roles.indexOf('ADMIN') !== -1) || ($auth.getPayload()
        .roles.indexOf('REC') !== -1) || ($auth.getPayload().roles.indexOf(
        'FISIO') !== -1)) {
      vm.usuariosList = [];

      var usuario = Usuarios.get({
        idUsuario: $auth.getPayload().sub
      }).$promise.then(function(data) {
        vm.usuariosList = Usuarios.findBySede({
          query: data.sedesList[0].idSedes
        });
      });
      console.log($auth.getPayload().sedes);
      console.log($auth.getPayload().sub);

      vm.query = {
        order: 'name',
        limit: 5,
        page: 1
      };

      vm.rol = function(usuario) {
        if (usuario.rolesList[0].idRoles === 'USR') {
          return true;
        } else {
          return false;
        }
      };

    } else {

      vm.query = {
        order: 'name',
        limit: 5,
        page: 1
      };

      vm.usuariosList = Usuarios.query();
    }
  }


  UsuariosUpdateCtrl.$inject = ['$stateParams', '$location', '$mdToast',
    'Usuarios', 'Ciudades', 'Generos', 'Escolaridades', 'TipoDocumentos',
    'Entidades', 'Antecedentes', 'TiposSangre', 'TiposUsuarios',
    'EstadosCiviles', 'Sedes', 'EntidadesAdministradoras', 'Ips',
    'TipoAfiliados'
  ];

  function UsuariosUpdateCtrl($stateParams, $location, $mdToast, Usuarios,
    Ciudades, Generos, Escolaridades, TipoDocumentos, Entidades,
    Antecedentes,
    TiposSangre, TiposUsuarios, EstadosCiviles, Sedes,
    EntidadesAdministradoras, Ips, TipoAfiliados
  ) {

    var vm = this;

    vm.tiposdocumentos = TipoDocumentos.query();
    vm.sedes = Sedes.query();
    vm.tipoSangre = TiposSangre.query();
    vm.estadocivil = EstadosCiviles.query();
    vm.tipoUsuarios = TiposUsuarios.query();
    vm.antecedentes = Antecedentes.query();
    vm.generos = Generos.query();
    vm.queryAdministradoras = queryAdministradoras;
    vm.queryIps = queryIps;
    vm.afiliados = TipoAfiliados.query();
    vm.escolaridades = Escolaridades.query();
    vm.queryCiudades = queryCiudades;
    vm.entidades = Entidades.query();
    vm.dateMax = new Date();
    vm.dateMax.setFullYear(vm.dateMax.getFullYear());

    this.id = $stateParams.idUsuario;
    this.usuario = Usuarios.get({
      idUsuario: this.id
    });

    this.update = function() {
      Usuarios.update(this.usuario, function() {
        $location.path('/usuarios/list');
        $mdToast.show(
          $mdToast.simple()
          .textContent('Se ha actualizado el Usuario')
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
