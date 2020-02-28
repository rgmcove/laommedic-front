(function() {
  'use strict';

  angular.module('app.ocupaciones.controller', [])
    .controller('OcupacionesCreateCtrl', OcupacionesCreateCtrl)
    .controller('OcupacionesListCtrl', OcupacionesListCtrl)
    .controller('OcupacionesUpdateCtrl', OcupacionesUpdateCtrl);

  OcupacionesCreateCtrl.$inject = ['$location', '$mdToast', 'Ocupaciones'];

  function OcupacionesCreateCtrl($location, $mdToast, Ocupaciones) {
    var vm = this;

    vm.create = create;

    function create() {
      Ocupaciones.save(vm.ocupacion, function() {
        $location.path('/ocupaciones/list');
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


  OcupacionesListCtrl.$inject = ['$location', 'Ocupaciones'];

  function OcupacionesListCtrl($location, Ocupaciones) {
    var vm = this;

    vm.query = {
      order: 'name',
      limit: 5,
      page: 1
    };
    vm.ocupaciones = Ocupaciones.query();
  }


  OcupacionesUpdateCtrl.$inject = ['$stateParams', '$location', '$mdToast',
    'Ocupaciones'
  ];

  function OcupacionesUpdateCtrl($stateParams, $location, $mdToast,
    Ocupaciones) {


    this.id = $stateParams.idOcupacion;
    this.ocupacion = Ocupaciones.get({
      id: this.id
    });

    this.update = function() {
      Ocupaciones.update({
        id: this.ocupacion.idOcupacion
      }, this.ocupacion, function() {
        $location.path('/ocupaciones/list');
        $mdToast.show(
          $mdToast.simple()
          .textContent('Se ha actualizado La Ocupacion')
          .position('bottom right'));
      });
    };


  }



})();
