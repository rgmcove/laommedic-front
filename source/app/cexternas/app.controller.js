(function() {
  'use strict';

  angular.module('app.cexternas.controller', [])
    .controller('CexternasCreateCtrl', CexternasCreateCtrl)
    .controller('CexternasListCtrl', CexternasListCtrl)
    .controller('CexternasUpdateCtrl', CexternasUpdateCtrl);

  CexternasCreateCtrl.$inject = ['$location', '$mdToast', 'CausasExternas'];

  function CexternasCreateCtrl($location, $mdToast, CausasExternas) {
    var vm = this;

    vm.create = create;

    function create() {
      CausasExternas.save(vm.cexterna, function() {
        $location.path('/cexternas/list');
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


  CexternasListCtrl.$inject = ['$location', 'CausasExternas'];

  function CexternasListCtrl($location, CausasExternas) {
    var vm = this;

    vm.query = {
      order: 'name',
      limit: 5,
      page: 1
    };
    vm.cexternas = CausasExternas.query();
  }


  CexternasUpdateCtrl.$inject = ['$stateParams', '$location', '$mdToast',
    'CausasExternas'
  ];

  function CexternasUpdateCtrl($stateParams, $location, $mdToast,
    CausasExternas) {


    this.id = $stateParams.idCausa;
    this.cexterna = CausasExternas.get({
      idCausa: this.id
    });

    this.update = function() {
      CausasExternas.update(this.cexterna, function() {
        $location.path('/cexternas/list');
        $mdToast.show(
          $mdToast.simple()
          .textContent('Se ha actualizado La Consulta Externa')
          .position('bottom right'));
      });
    };


  }



})();
