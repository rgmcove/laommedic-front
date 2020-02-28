(function() {
  'use strict';

  angular.module('app.tiantecedentes.directivas', [

    ]).directive('tiantecedentescreate', tiantecedentesCreate)
    .directive('tiantecedenteslist', tiantecedentesList)
    .directive('tiantecedentesupdate', tiantecedentesUpdate);


  function tiantecedentesCreate() {
    return {
      scope: {},
      templateUrl: 'app/tiantecedentes/create.html',
      restrict: 'EA',
      controller: 'TiantecedentesCreateCtrl',
      controllerAs: 'vm'
    };
  }

  function tiantecedentesList() {
    return {
      scope: {},
      templateUrl: 'app/tiantecedentes/list.html',
      restrict: 'EA',
      controller: 'TiantecedentesListCtrl',
      controllerAs: 'vm'
    };
  }

  function tiantecedentesUpdate() {
    return {
      scope: {},
      templateUrl: 'app/tiantecedentes/update.html',
      restrict: 'EA',
      controller: 'TiantecedentesUpdateCtrl',
      controllerAs: 'vm'
    };
  }


})();
