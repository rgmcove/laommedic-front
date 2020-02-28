(function() {
  'use strict';

  angular.module('app.antecedentes.directivas', [

    ]).directive('antecedentescreate', antecedentesCreate)
    .directive('antecedenteslist', antecedentesList)
    .directive('antecedentesupdate', antecedentesUpdate);


  function antecedentesCreate() {
    return {
      scope: {},
      templateUrl: 'app/antecedentes/create.html',
      restrict: 'EA',
      controller: 'AntecedentesCreateCtrl',
      controllerAs: 'vm'
    };
  }

  function antecedentesList() {
    return {
      scope: {},
      templateUrl: 'app/antecedentes/list.html',
      restrict: 'EA',
      controller: 'AntecedentesListCtrl',
      controllerAs: 'vm'
    };
  }

  function antecedentesUpdate() {
    return {
      scope: {},
      templateUrl: 'app/antecedentes/update.html',
      restrict: 'EA',
      controller: 'AntecedentesUpdateCtrl',
      controllerAs: 'vm'
    };
  }


})();
