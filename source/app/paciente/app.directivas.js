(function() {
  'use strict';

  angular.module('app.paciente.directivas', [

  ]).directive('paciente', paciente);

  function paciente() {
    return {
      scope: {},
      templateUrl: 'app/paciente/paciente.html',
      restrict: 'EA'
    };
  }
})();
