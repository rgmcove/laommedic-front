(function() {
  'use strict';
  angular.module('app.auditausuarios.controller', [

  ]).controller('AuditausuariosListCtrl', AuditausuariosListCtrl);

  AuditausuariosListCtrl.$inject = ['AuditaUsuarios'];

  function AuditausuariosListCtrl(AuditaUsuarios) {

    var vm = this;

    vm.query = {
      order: 'name',
      limit: 5,
      page: 1
    };

    vm.auditausuariosList = AuditaUsuarios.query();

  }
})();
