(function() {
  'use strict';

  angular.module('app.sedes.controller', [])
    .controller('SedesCreateCtrl', SedesCreateCtrl)
    .controller('SedesListCtrl', SedesListCtrl)
    .controller('SedesUpdateCtrl', SedesUpdateCtrl);


  SedesCreateCtrl.$inject = ['$location', '$mdToast', 'Ciudades', 'Clinicas',
    'Sedes'
  ];

  function SedesCreateCtrl($location, $mdToast, Ciudades, Clinicas, Sedes) {
    var vm = this;

    vm.create = create;
    vm.queryClinicas = queryClinicas;
    vm.queryCiudades = queryCiudades;

    function create() {
      Sedes.save(vm.sede, function() {
        $location.path('/sedes/list');
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

    function queryClinicas(str) {
      return Clinicas.queryByNombre({
        query: str
      });
    }

    function queryCiudades(str) {
      return Ciudades.queryByNombre({
        query: str
      });
    }

  }



  SedesListCtrl.$inject = ['$location', 'Sedes'];

  function SedesListCtrl($location, Sedes) {
    var vm = this;

    vm.query = {
      order: 'name',
      limit: 5,
      page: 1
    };
    vm.sedes = Sedes.query();
  }



  SedesUpdateCtrl.$inject = ['$stateParams', '$location', '$mdToast',
    'Clinicas', 'Sedes', 'Ciudades'
  ];

  function SedesUpdateCtrl($stateParams, $location, $mdToast, Clinicas, Sedes,
    Ciudades) {
    var vm = this;

    vm.queryClinicas = queryClinicas;
    vm.queryCiudades = queryCiudades;

    this.id = $stateParams.idSedes;
    this.sede = Sedes.get({
      idSedes: this.id
    });

    this.update = function() {
      Sedes.update(this.sede, function() {
        $location.path('/sedes/list');
        $mdToast.show(
          $mdToast.simple()
          .textContent('Se ha actualizado La Sede')
          .position('bottom right'));
      });
    };

    function queryClinicas(str) {
      return Clinicas.queryByNombre({
        query: str
      });
    }

    function queryCiudades(str) {
      return Ciudades.queryByNombre({
        query: str
      });
    }

  }


  getClinicas.$inject = ['Clinicas'];

  function getClinicas(Clinicas) {
    return Clinicas.query();
  }

  getCiudades.$inject = ['Ciudades'];

  function getCiudades(Ciudades) {
    return Ciudades.query();
  }



})();
