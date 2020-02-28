(function() {
  'use strict';

  angular.module('app.auditacitas.directivas', [

  ]).directive('auditacitas', auditacitas);

  function auditacitas() {
    return {
      scope: {},
      templateUrl: 'app/audita_citas/lista.html',
      restrict: 'EA',
      controller: 'AuditacitasListCtrl',
      controllerAs: 'vm'

    };
  }
})();
