(function() {
  'use strict';

  angular.module('app.admin.directivas', [

  ]).directive('administrador', administrador);

  function administrador() {
    return {
      scope: {},
      templateUrl: 'app/admin/admin.html',
      controller: 'adminCtrl',
      controllerAs: 'vm'
    };
  }
})();
