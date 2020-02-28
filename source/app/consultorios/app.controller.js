(function() {
  'use strict';

  angular.module('app.consultorios.controller', [])
    .controller('ConsultoriosCreateCtrl', ConsultoriosCreateCtrl)
    .controller('ConsultoriosListCtrl', ConsultoriosListCtrl)
    .controller('ConsultoriosUpdateCtrl', ConsultoriosUpdateCtrl);


  ConsultoriosCreateCtrl.$inject = ['$location', '$mdToast', 'Consultorios',
    'Sedes'
  ];

  function ConsultoriosCreateCtrl($location, $mdToast, Consultorios, Sedes) {
    var vm = this;

    vm.create = create;
    vm.querySedes = querySedes;

    function create() {
      Consultorios.save(vm.consultorio, function() {
        $location.path('/consultorios/list');
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

    function querySedes(str) {
      return Sedes.queryByNombre({
        query: str
      });
    }


  }



  ConsultoriosListCtrl.$inject = ['$location', 'Consultorios'];

  function ConsultoriosListCtrl($location, Consultorios) {
    var vm = this;

    vm.query = {
      order: 'name',
      limit: 5,
      page: 1
    };
    vm.consultorios = Consultorios.query();
  }



  ConsultoriosUpdateCtrl.$inject = ['$stateParams', '$location', '$mdToast',
    'Consultorios', 'Sedes'
  ];

  function ConsultoriosUpdateCtrl($stateParams, $location, $mdToast,
    Consultorios, Sedes) {
    var vm = this;
    vm.querySedes = querySedes;

    this.id = $stateParams.idConsultorio;
    this.consultorio = Consultorios.get({
      idConsultorio: this.id
    });

    this.update = function() {
      Consultorios.update(this.consultorio, function() {
        $location.path('/consultorios/list');
        $mdToast.show(
          $mdToast.simple()
          .textContent('Se ha actualizado El Consultorio')
          .position('bottom right'));
      });
    };

    function querySedes(str) {
      return Sedes.queryByNombre({
        query: str
      });
    }

  }

  getSedes.$inject = ['Sedes'];

  function getSedes(Sedes) {
    return Sedes.query();
  }


})();
