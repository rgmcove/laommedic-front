(function() {
  'use strict';

  angular.module('app.peratiende.controller', [])
    .controller('PeratiendeCreateCtrl', PeratiendeCreateCtrl)
    .controller('PeratiendeListCtrl', PeratiendeListCtrl)
    .controller('PeratiendeUpdateCtrl', PeratiendeUpdateCtrl);

  PeratiendeCreateCtrl.$inject = ['$location', '$mdToast', 'PersonalAtiende'];

  function PeratiendeCreateCtrl($location, $mdToast, PersonalAtiende) {
    var vm = this;

    vm.create = create;


    function create() {
      PersonalAtiende.save(vm.peratiende, function() {
        $location.path('/peratiende/list');
        $mdToast.show(
          $mdToast.simple()
          .textContent('Registro exitoso')
          .position('bottom right'));
      }, function(error) {
        $mdToast.show(
          $mdToast.simple()
          .textContent(error.status + ' ' + error.data)
          .position('bottom right'));
      });
    }


  }


  PeratiendeListCtrl.$inject = ['$location', 'PersonalAtiende'];

  function PeratiendeListCtrl($location, PersonalAtiende) {
    var vm = this;

    vm.query = {
      order: 'name',
      limit: 5,
      page: 1
    };
    vm.peratiendes = PersonalAtiende.query();
  }


  PeratiendeUpdateCtrl.$inject = ['$stateParams', '$location', '$mdToast',
    'PersonalAtiende'
  ];

  function PeratiendeUpdateCtrl($stateParams, $location, $mdToast,
    PersonalAtiende) {


    this.id = $stateParams.idAtiende;
    this.peratiende = PersonalAtiende.get({
      idAtiende: this.id
    });

    this.update = function() {
      PersonalAtiende.update(this.peratiende, function() {
        $location.path('/peratiende/list');
        $mdToast.show(
          $mdToast.simple()
          .textContent('Se ha actualizado El Personal')
          .position('bottom right'));
      });
    };


  }



})();
