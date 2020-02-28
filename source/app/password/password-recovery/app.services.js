(function() {
  'use strict';
  angular.module('app.password.recovery.services', [

    ])
    .factory('RecoveryPass', RecoveryPass);


  function RecoveryPass($resource, BASEURL) {
    return $resource(BASEURL + '/email/recoverypass');
  }


})();
