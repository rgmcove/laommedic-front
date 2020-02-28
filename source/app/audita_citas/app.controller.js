(function() {
  'use strict';
  angular.module('app.auditacitas.controller', [

  ]).controller('AuditacitasListCtrl', AuditacitasListCtrl);

  AuditacitasListCtrl.$inject = ['AuditaCitas'];

  function AuditacitasListCtrl(AuditaCitas) {

    var vm = this;

    vm.query = {
      order: 'name',
      limit: 5,
      page: 1
    };
    vm.auditacitasList = AuditaCitas.query();
  }
})();
