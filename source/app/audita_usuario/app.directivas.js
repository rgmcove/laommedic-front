(function() {
  'use strict';

  angular.module('app.auditausuarios.directivas', [

  ]).directive('auditausuarios', auditausuarios);

  function auditausuarios() {
    return {
      scope: {},
      templateUrl: 'app/audita_usuario/lista.html',
      restrict: 'EA',
      controller: 'AuditausuariosListCtrl',
      controllerAs: 'vm'

    };
  }
})();
