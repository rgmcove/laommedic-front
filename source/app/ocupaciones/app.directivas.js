(function() {
  'use strict';

  angular.module('app.ocupaciones.directivas', [

    ]).directive('ocupacionescreate', ocupacionesCreate)
    .directive('ocupacioneslist', ocupacionesList)
    .directive('ocupacionesupdate', ocupacionesUpdate);


  function ocupacionesCreate() {
    return {
      scope: {},
      restrict: 'EA',
      templateUrl: 'app/ocupaciones/create.html',
      controller: 'OcupacionesCreateCtrl',
      controllerAs: 'vm'
    };
  }

  function ocupacionesList() {
    return {
      scope: {},
      templateUrl: 'app/ocupaciones/list.html',
      restrict: 'EA',
      controller: 'OcupacionesListCtrl',
      controllerAs: 'vm'
    };
  }

  function ocupacionesUpdate() {
    return {
      scope: {},
      templateUrl: 'app/ocupaciones/update.html',
      restrict: 'EA',
      controller: 'OcupacionesUpdateCtrl',
      controllerAs: 'vm'
    };
  }



})();
