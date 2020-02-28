(function() {
  'use strict';

  angular.module('app.clinicas.controller', [])
    .controller('ClinicasCreateCtrl', ClinicasCreateCtrl)
    .controller('ClinicasListCtrl', ClinicasListCtrl)
    .controller('ClinicasUpdateCtrl', ClinicasUpdateCtrl);


  ClinicasCreateCtrl.$inject = ['$location', '$mdToast', 'Clinicas',
    'Regimenes'
  ];

  function ClinicasCreateCtrl($location, $mdToast, Clinicas, Regimenes) {
    var vm = this;

    vm.create = create;
    vm.regimenes = Regimenes.query();

    function create() {
      Clinicas.save(vm.clinica, function() {
        $location.path('/clinicas/list');
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


  ClinicasListCtrl.$inject = ['$location', 'Clinicas'];

  function ClinicasListCtrl($location, Clinicas) {
    var vm = this;

    vm.query = {
      order: 'name',
      limit: 5,
      page: 1
    };
    vm.clinicas = Clinicas.query();
  }


  ClinicasUpdateCtrl.$inject = ['$stateParams', '$location', '$mdToast',
    'Clinicas', 'Regimenes'
  ];

  function ClinicasUpdateCtrl($stateParams, $location, $mdToast, Clinicas,
    Regimenes) {
    var vm = this;

    vm.regimenes = Regimenes.query();

    this.id = $stateParams.idClinica;
    this.clinica = Clinicas.get({
      idClinica: this.id
    });

    this.update = function() {
      Clinicas.update(this.clinica, function() {
        $location.path('/clinicas/list');
        $mdToast.show(
          $mdToast.simple()
          .textContent('Se ha actualizado La Clinica')
          .position('bottom right'));
      });
    };

  }

})();
