(function() {
  'use strict';

  angular.module('app.antecedentes.controller', [])
    .controller('AntecedentesCreateCtrl', AntecedentesCreateCtrl)
    .controller('AntecedentesListCtrl', AntecedentesListCtrl)
    .controller('AntecedentesUpdateCtrl', AntecedentesUpdateCtrl);

  AntecedentesCreateCtrl.$inject = ['$location', '$mdToast', 'Antecedentes',
    'TiposAntecedentes'
  ];

  function AntecedentesCreateCtrl($location, $mdToast, Antecedentes,
    TiposAntecedentes) {
    var vm = this;

    vm.create = create;
    vm.tipoAntecedentes = TiposAntecedentes.query();

    function create() {
      Antecedentes.save(vm.antecedente, function() {
        $location.path('/antecedentes/list');
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

  AntecedentesListCtrl.$inject = ['$location', 'Antecedentes'];

  function AntecedentesListCtrl($location, Antecedentes) {
    var vm = this;

    vm.query = {
      order: 'name',
      limit: 5,
      page: 1
    };
    vm.antecedentes = Antecedentes.query();
  }


  AntecedentesUpdateCtrl.$inject = ['$stateParams', '$location', '$mdToast',
    'Antecedentes', 'TiposAntecedentes'
  ];

  function AntecedentesUpdateCtrl($stateParams, $location, $mdToast,
    Antecedentes, TiposAntecedentes) {
    var vm = this;

    vm.tipoAntecedentes = TiposAntecedentes.query();

    this.id = $stateParams.idAntecedente;
    this.antecedente = Antecedentes.get({
      idAntecedente: this.id
    });

    this.update = function() {
      Antecedentes.update(this.antecedente, function() {
        $location.path('/antecedentes/list');
        $mdToast.show(
          $mdToast.simple()
          .textContent('Se ha actualizado el Antecedente')
          .position('bottom right'));
      });
    };



  }


})();
