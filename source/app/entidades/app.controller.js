(function() {
  'use strict';

  angular.module('app.entidades.controller', [])
    .controller('EntidadesCreateCtrl', EntidadesCreateCtrl)
    .controller('EntidadesListCtrl', EntidadesListCtrl)
    .controller('EntidadesUpdateCtrl', EntidadesUpdateCtrl);


  EntidadesCreateCtrl.$inject = ['$location', '$mdToast', 'Entidades'];

  function EntidadesCreateCtrl($location, $mdToast, Entidades) {
    var vm = this;

    vm.create = create;

    function create() {
      Entidades.save(vm.entidad, function() {
        $location.path('/entidades/list');
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



  EntidadesListCtrl.$inject = ['$location', 'Entidades'];

  function EntidadesListCtrl($location, Entidades) {
    var vm = this;

    vm.query = {
      order: 'name',
      limit: 5,
      page: 1
    };
    vm.entidades = Entidades.query();
  }



  EntidadesUpdateCtrl.$inject = ['$stateParams', '$location', '$mdToast',
    'Entidades'
  ];

  function EntidadesUpdateCtrl($stateParams, $location, $mdToast, Entidades) {

    this.id = $stateParams.idEntidad;
    this.entidad = Entidades.get({
      id: this.id
    });

    this.update = function() {
      Entidades.update({
        id: this.entidad.idEntidad
      }, this.entidad, function() { //ESTA ES LA FORMA CUANDO LA LLAVE PRIMARIA NO ES AI.
        $location.path('/entidades/list');
        $mdToast.show(
          $mdToast.simple()
          .textContent('Se ha actualizado La Entidad')
          .position('bottom right'));
      });
    };
  }



})();
