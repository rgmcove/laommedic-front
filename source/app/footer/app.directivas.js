(function() {
  'use strict';

  angular.module('app.footer.directivas', [

  ]).directive('piepagina', piepagina);

  function piepagina() {
    return {
      scope: {},
      templateUrl: 'app/footer/footer.html',
      restrict: 'EA'
    };
  }
})();
