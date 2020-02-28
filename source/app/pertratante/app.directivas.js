(function() {
  'use strict';

  angular.module('app.pertratante.directivas', [

    ]).directive('pertratantecreate', pertratanteCreate)
    .directive('pertratantelist', pertratanteList)
    .directive('pertratanteupdate', pertratanteUpdate);


  function pertratanteCreate() {
    return {
      scope: {},
      templateUrl: 'app/pertratante/create.html',
      restrict: 'EA',
      controller: 'PertratanteCreateCtrl',
      controllerAs: 'vm'
    };
  }

  function pertratanteList() {
    return {
      scope: {},
      templateUrl: 'app/pertratante/list.html',
      restrict: 'EA',
      controller: 'PertratanteListCtrl',
      controllerAs: 'vm'
    };
  }

  function pertratanteUpdate() {
    return {
      scope: {},
      templateUrl: 'app/pertratante/update.html',
      restrict: 'EA',
      controller: 'PertratanteUpdateCtrl',
      controllerAs: 'vm'
    };
  }



})();
