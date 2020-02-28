(function() {
  'use strict';

  angular.module('app.usuarios.directivas', [


    ]).directive('usuarioscreate', usuariosCreate)
    .directive('usuariosupdate', usuariosUpdate)
    .directive('usuariosrecep', usuariosRecep)
    .directive('usuarioslist', usuariosList);

  function usuariosCreate() {
    return {
      scope: {},
      restrict: 'EA',
      templateUrl: 'app/usuarios/create.html',
      controller: 'UsuariosCreateCtrl',
      controllerAs: 'vm'

    };
  }

  function usuariosList() {
    return {
      scope: {},
      templateUrl: 'app/usuarios/list.html',
      restrict: 'EA',
      controller: 'UsuariosListCtrl',
      controllerAs: 'vm'

    };
  }

  function usuariosRecep() {
    return {
      scope: {},
      templateUrl: 'app/usuarios/createRecep.html',
      restrict: 'EA',
      controller: 'UsuariosCreateCtrl',
      controllerAs: 'vm'

    };
  }

  function usuariosUpdate() {
    return {
      scope: {},
      templateUrl: 'app/usuarios/update.html',
      restrict: 'EA',
      controller: 'UsuariosUpdateCtrl',
      controllerAs: 'vm'
    };
  }


})();
