(function() {
  'use strict';

  angular.module('app.cexternas.directivas', [

    ]).directive('cexternascreate', cexternasCreate)
    .directive('cexternaslist', cexternasList)
    .directive('cexternasupdate', cexternasUpdate);


  function cexternasCreate() {
    return {
      scope: {},
      restrict: 'EA',
      templateUrl: 'app/cexternas/create.html',
      controller: 'CexternasCreateCtrl',
      controllerAs: 'vm'
    };
  }

  function cexternasList() {
    return {
      scope: {},
      templateUrl: 'app/cexternas/list.html',
      restrict: 'EA',
      controller: 'CexternasListCtrl',
      controllerAs: 'vm'
    };
  }


  function cexternasUpdate() {
    return {
      scope: {},
      templateUrl: 'app/cexternas/update.html',
      restrict: 'EA',
      controller: 'CexternasUpdateCtrl',
      controllerAs: 'vm'
    };
  }



})();
