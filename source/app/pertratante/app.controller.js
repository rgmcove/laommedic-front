(function() {
  'use strict';

  angular.module('app.pertratante.controller', [])
    .controller('PertratanteCreateCtrl', PertratanteCreateCtrl)
    .controller('PertratanteListCtrl', PertratanteListCtrl)
    .controller('PertratanteUpdateCtrl', PertratanteUpdateCtrl);

  PertratanteCreateCtrl.$inject = ['$location', '$mdToast',
    'PersonalTratante', 'PersonalAtiende'
  ];

  function PertratanteCreateCtrl($location, $mdToast, PersonalTratante,
    PersonalAtiende) {
    var vm = this;

    vm.create = create;
    vm.patiende = PersonalAtiende.query();

    function create() {
      PersonalTratante.save(vm.pertratante, function() {
        $location.path('/pertratante/list');
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


  PertratanteListCtrl.$inject = ['$location', 'PersonalTratante'];

  function PertratanteListCtrl($location, PersonalTratante) {
    var vm = this;

    vm.query = {
      order: 'name',
      limit: 5,
      page: 1
    };
    vm.pertratantes = PersonalTratante.query();
  }


  PertratanteUpdateCtrl.$inject = ['$stateParams', '$location', '$mdToast',
    'PersonalTratante', 'PersonalAtiende'
  ];

  function PertratanteUpdateCtrl($stateParams, $location, $mdToast,
    PersonalTratante, PersonalAtiende) {
    var vm = this;

    vm.patiende = PersonalAtiende.query();

    this.id = $stateParams.idPersonal;
    this.pertratante = PersonalTratante.get({
      idPersonal: this.id
    });

    this.update = function() {
      PersonalTratante.update(this.pertratante, function() {
        $location.path('/pertratante/list');
        $mdToast.show(
          $mdToast.simple()
          .textContent('Se ha actualizado El Personal')
          .position('bottom right'));
      });
    };

  }



})();
