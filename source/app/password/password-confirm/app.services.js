(function() {
  'use strict';
  angular.module('app.password.confirm.services', [

    ])
    .factory('ConfirmPass', ConfirmPass);


  function ConfirmPass($resource, BASEURL) {
    return $resource(BASEURL + '/email/confirmpass');
  }


})();
