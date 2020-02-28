(function() {
  'use strict';

  angular.module('app.recepcionista.directivas', [

  ]).directive('recepcionista', recepcionista);

  function recepcionista() {
    return {
      scope: {},
      templateUrl: 'app/recepcionista/recep.html',
      restrict: 'EA'
    };
  }
})();
