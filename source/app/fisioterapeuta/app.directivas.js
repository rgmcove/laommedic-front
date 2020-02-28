(function() {
  'use strict';

  angular.module('app.fisioterapeuta.directivas', [

  ]).directive('fisioterapeuta', fisioterapeuta);


  function fisioterapeuta() {
    return {
      scope: {},
      templateUrl: 'app/fisioterapeuta/fisioterapeuta.html',
      restrict: 'EA'

    };
  }


})();
