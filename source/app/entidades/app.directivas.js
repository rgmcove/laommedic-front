(function() {
  'use strict';

  angular.module('app.entidades.directivas', [

    ]).directive('entidadescreate', entidadesCreate)
    .directive('entidadeslist', entidadesList)
    .directive('entidadesupdate', entidadesUpdate);


  function entidadesCreate() {
    return {
      scope: {},
      templateUrl: 'app/entidades/create.html',
      restrict: 'EA',
      controller: 'EntidadesCreateCtrl',
      controllerAs: 'vm'
    };
  }

  function entidadesList() {
    return {
      scope: {},
      templateUrl: 'app/entidades/list.html',
      restrict: 'EA',
      controller: 'EntidadesListCtrl',
      controllerAs: 'vm'
    };
  }

  function entidadesUpdate() {
    return {
      scope: {},
      templateUrl: 'app/entidades/update.html',
      restrict: 'EA',
      controller: 'EntidadesUpdateCtrl',
      controllerAs: 'vm'
    };
  }

})();
