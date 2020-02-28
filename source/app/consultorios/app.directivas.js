(function() {
  'use strict';

  angular.module('app.consultorios.directivas', [

    ]).directive('consultorioscreate', consultoriosCreate)
    .directive('consultorioslist', consultoriosList)
    .directive('consultoriosupdate', consultoriosUpdate);


  function consultoriosCreate() {
    return {
      scope: {},
      templateUrl: 'app/consultorios/create.html',
      restrict: 'EA',
      controller: 'ConsultoriosCreateCtrl',
      controllerAs: 'vm'
    };
  }

  function consultoriosList() {
    return {
      scope: {},
      templateUrl: 'app/consultorios/list.html',
      restrict: 'EA',
      controller: 'ConsultoriosListCtrl',
      controllerAs: 'vm'
    };
  }

  function consultoriosUpdate() {
    return {
      scope: {},
      templateUrl: 'app/consultorios/update.html',
      restrict: 'EA',
      controller: 'ConsultoriosUpdateCtrl',
      controllerAs: 'vm'
    };
  }

})();
