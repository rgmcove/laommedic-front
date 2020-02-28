(function() {
  'use strict';

  angular.module('app.citas.directivas', [


    ]).directive('citascreate', citasCreate)
    .directive('citaslist', citasList)
    .directive('citasupdate', citasUpdate)
    .directive('citasdelete', citasDelete)
    .directive('agenda', agenda)
    .directive('agendalist', agendaList)
    .directive('citas', citas)
    .directive('historias', historias);

  function citasCreate() {
    return {
      scope: {},
      restrict: 'EA',
      templateUrl: 'app/citas/createAgenda.html',
      controller: 'CitasCreateCtrl',
      controllerAs: 'vm'

    };
  }

  function citas() {
    return {
      scope: {},
      restrict: 'EA',
      templateUrl: 'app/citas/create.html',
      controller: 'CitasUpdateCtrl',
      controllerAs: 'vm'

    };
  }

  function citasList() {
    return {
      scope: {},
      templateUrl: 'app/citas/list.html',
      restrict: 'EA',
      controller: 'CitasListCtrl',
      controllerAs: 'vm'

    };
  }

  function agendaList() {
    return {
      scope: {},
      templateUrl: 'app/citas/listAgenda.html',
      restrict: 'EA',
      controller: 'CitasListCtrl',
      controllerAs: 'vm'

    };
  }

  function agenda() {
    return {
      scope: {},
      templateUrl: 'app/citas/agenda.html',
      restrict: 'EA',
      controller: 'CalendarCtrl',
      controllerAs: 'vm'
    };
  }

  function historias() {
    return {
      scope: {},
      templateUrl: 'app/citas/historias.html',
      restrict: 'EA',
      controller: 'CitasListCtrl',
      controllerAs: 'vm'

    };
  }

  function citasUpdate() {
    return {
      scope: {},
      templateUrl: 'app/citas/update.html',
      restrict: 'EA',
      controller: 'CitasUpdateCtrl',
      controllerAs: 'vm'
    };
  }

  function citasDelete() {
    return {
      scope: {},
      templateUrl: 'app/citas/delete.html',
      restrict: 'EA',
      controller: 'CitasDeleteCtrl',
      controllerAs: 'vm'
    };
  }

})();
