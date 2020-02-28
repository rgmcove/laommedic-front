(function() {
  'use strict';

  angular.module('app.peratiende.directivas', [

    ]).directive('peratiendecreate', peratiendeCreate)
    .directive('peratiendelist', peratiendeList)
    .directive('peratiendeupdate', peratiendeUpdate);


  function peratiendeCreate() {
    return {
      scope: {},
      templateUrl: 'app/peratiende/create.html',
      restrict: 'EA',
      controller: 'PeratiendeCreateCtrl',
      controllerAs: 'vm'
    };
  }

  function peratiendeList() {
    return {
      scope: {},
      templateUrl: 'app/peratiende/list.html',
      restrict: 'EA',
      controller: 'PeratiendeListCtrl',
      controllerAs: 'vm'
    };
  }

  function peratiendeUpdate() {
    return {
      scope: {},
      templateUrl: 'app/peratiende/update.html',
      restrict: 'EA',
      controller: 'PeratiendeUpdateCtrl',
      controllerAs: 'vm'
    };
  }



})();
