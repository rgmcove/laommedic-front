(function() {
  'use strict';
  angular
    .module('app.login.controller', [])
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$auth', '$location', '$mdToast'];

  function LoginCtrl($auth, $location, $mdToast) {
    var vm = this;

    vm.signIn = signIn;
    vm.getCurrentUser = getCurrentUser;
    vm.getCurrentIdUser = getCurrentIdUser;
    vm.isAuthenticated = isAuthenticated;
    vm.logout = logout;
    vm.isAdmin = isAdmin;
    vm.isUser = isUser;
    vm.isFisio = isFisio;
    vm.isRecep = isRecep;
    vm.isRoot = isRoot;

    function signIn() {
      console.log('llego');
      $auth.login(vm.user)
        .then(function() {
          vm.user = {};
          console.log($auth.getPayload());
          if ($auth.getPayload().roles.indexOf('ROOT') !== -1) {
            $location.path('/admin');
          } else if ($auth.getPayload().roles.indexOf('ADMIN') !== -1) {
            $location.path('/admin');
          } else if ($auth.getPayload().roles.indexOf('FISIO') !== -1) {
            $location.path('/fisioterapeuta');
          } else if ($auth.getPayload().roles.indexOf('REC') !== -1) {
            $location.path('/recepcionista');
          } else {
            $location.path('/paciente');
          }
          $mdToast.show(
            $mdToast.simple()
            .textContent('Sesión iniciada...')
            .position('bottom left'));
        })
        .catch(function(error) {
          $mdToast.show(
            $mdToast.simple()
            .textContent(error.status + ' ' + error.data)
            .position('bottom left'));
        });
    }



    function isAuthenticated() {
      return $auth.isAuthenticated();
    }

    function getCurrentUser() {
      if (isAuthenticated()) {
        return $auth.getPayload().user;
      } else {
        return '';
      }
    }

    function getCurrentIdUser() {
      if (isAuthenticated()) {
        return $auth.getPayload().id;
      } else {
        return '';
      }
    }


    function logout() {
      if (!$auth.isAuthenticated()) {
        return;
      }
      $auth.logout()
        .then(function() {
          $location.path('/');
          $mdToast.show(
            $mdToast.simple()
            .textContent('Sesión finalizada...')
            .position('bottom left'));
        });
    }

    function isRoot() {
      if (isAuthenticated()) {
        return $auth.getPayload().roles.indexOf('ROOT') !== -1;
      } else {
        return false;
      }
    }

    function isAdmin() {
      if (isAuthenticated()) {
        return $auth.getPayload().roles.indexOf('ADMIN') !== -1;
      } else {
        return false;
      }
    }

    function isUser() {
      if (isAuthenticated()) {
        return $auth.getPayload().roles.indexOf('USR') !== -1;
      } else {
        return false;
      }
    }

    function isFisio() {
      if (isAuthenticated()) {
        return $auth.getPayload().roles.indexOf('FISIO') !== -1;
      } else {
        return false;
      }
    }

    function isRecep() {
      if (isAuthenticated()) {
        return $auth.getPayload().roles.indexOf('REC') !== -1;
      } else {
        return false;
      }
    }


  }



})();
