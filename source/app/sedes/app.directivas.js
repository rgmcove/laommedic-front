(function() {
  'use strict';

  angular.module('app.sedes.directivas', [

    ]).directive('sedescreate', sedesCreate)
    .directive('sedeslist', sedesList)
    .directive('sedesupdate', sedesUpdate);



  function sedesCreate() {
    return {
      scope: {},
      restrict: 'EA',
      templateUrl: 'app/sedes/create.html',
      controller: 'SedesCreateCtrl',
      controllerAs: 'vm'
    };
  }

  function sedesList() {
    return {
      scope: {},
      templateUrl: 'app/sedes/list.html',
      restrict: 'EA',
      controller: 'SedesListCtrl',
      controllerAs: 'vm'
    };
  }

  function sedesUpdate() {
    return {
      scope: {},
      templateUrl: 'app/sedes/update.html',
      restrict: 'EA',
      controller: 'SedesUpdateCtrl',
      controllerAs: 'vm'
    };
  }



})();
