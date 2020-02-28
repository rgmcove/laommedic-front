(function() {
  'use strict';

  angular.module('app.funcionarios.directivas', [


    ]).directive('funcionarioscreate', funcionariosCreate)
    .directive('funcionariosupdate', funcionariosUpdate)
    .directive('funcionarioslist', funcionariosList);

  function funcionariosCreate() {
    return {
      scope: {},
      restrict: 'EA',
      templateUrl: 'app/funcionarios/create.html',
      controller: 'FuncionariosCreateCtrl',
      controllerAs: 'vm'

    };
  }

  function funcionariosList() {
    return {
      scope: {},
      templateUrl: 'app/funcionarios/list.html',
      restrict: 'EA',
      controller: 'FuncionariosListCtrl',
      controllerAs: 'vm'

    };
  }

  function funcionariosUpdate() {
    return {
      scope: {},
      templateUrl: 'app/funcionarios/update.html',
      restrict: 'EA',
      controller: 'FuncionariosUpdateCtrl',
      controllerAs: 'vm'
    };
  }


})();
