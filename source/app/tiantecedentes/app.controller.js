(function() {
  'use strict';

  angular.module('app.tiantecedentes.controller', [])
    .controller('TiantecedentesCreateCtrl', TiantecedentesCreateCtrl)
    .controller('TiantecedentesListCtrl', TiantecedentesListCtrl)
    .controller('TiantecedentesUpdateCtrl', TiantecedentesUpdateCtrl);

  TiantecedentesCreateCtrl.$inject = ['$location', '$mdToast',
    'TiposAntecedentes'
  ];

  function TiantecedentesCreateCtrl($location, $mdToast, TiposAntecedentes) {
    var vm = this;

    vm.create = create;


    function create() {
      TiposAntecedentes.save(vm.tiantecedente, function() {
        $location.path('/tiantecedentes/list');
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


  TiantecedentesListCtrl.$inject = ['$location', 'TiposAntecedentes'];

  function TiantecedentesListCtrl($location, TiposAntecedentes) {
    var vm = this;

    vm.query = {
      order: 'name',
      limit: 5,
      page: 1
    };
    vm.tiantecedentes = TiposAntecedentes.query();
  }


  TiantecedentesUpdateCtrl.$inject = ['$stateParams', '$location', '$mdToast',
    'TiposAntecedentes'
  ];

  function TiantecedentesUpdateCtrl($stateParams, $location, $mdToast,
    TiposAntecedentes) {


    this.id = $stateParams.idTipoAntecedente;
    this.tiantecedente = TiposAntecedentes.get({
      idTipoAntecedente: this.id
    });

    this.update = function() {
      TiposAntecedentes.update(this.tiantecedente, function() {
        $location.path('/tiantecedentes/list');
        $mdToast.show(
          $mdToast.simple()
          .textContent('Se ha actualizado el Tipo Antecedente')
          .position('bottom right'));
      });
    };



  }



})();
