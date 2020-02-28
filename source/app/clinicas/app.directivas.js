(function() {
  'use strict';

  angular.module('app.clinicas.directivas', [

    ]).directive('clinicascreate', clinicasCreate)
    .directive('clinicaslist', clinicasList)
    .directive('clinicasupdate', clinicasUpdate);

  function clinicasCreate() {
    return {
      scope: {},
      templateUrl: 'app/clinicas/create.html',
      restrict: 'EA',
      controller: 'ClinicasCreateCtrl',
      controllerAs: 'vm'
    };
  }

  function clinicasList() {
    return {
      scope: {},
      templateUrl: 'app/clinicas/list.html',
      restrict: 'EA',
      controller: 'ClinicasListCtrl',
      controllerAs: 'vm'
    };
  }

  function clinicasUpdate() {
    return {
      scope: {},
      templateUrl: 'app/clinicas/update.html',
      restrict: 'EA',
      controller: 'ClinicasUpdateCtrl',
      controllerAs: 'vm'
    };
  }


})();
