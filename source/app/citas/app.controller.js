(function() {
  'use strict';
  angular.module('tabsDemoDynamicHeight', ['ngMaterial']);
  angular.module('app.citas.controller', ['ngMaterial', 'ngMessages',
      'ui.calendar', 'ngMaterialDatePicker'
    ])
    .controller('CitasCreateCtrl', CitasCreateCtrl)
    .controller('CalendarCtrl', CalendarCtrl)
    .controller('CitasUpdateCtrl', CitasUpdateCtrl)
    .controller('CitasDeleteCtrl', CitasDeleteCtrl)
    .controller('CitasListCtrl', CitasListCtrl);

  CalendarCtrl.$inject = ['$location', '$auth', '$compile', '$filter',
    'Citas', 'Usuarios', 'Sedes'
  ];
  //CODIGO EVENTOS AGENDA
  function CalendarCtrl($location, $auth, $compile, $filter, Citas,
    Usuarios, Sedes) {

    var vm = this;
    vm.eventSource = [];
    vm.renderView = renderView;
    vm.sedes = [];
    vm.changeSede = changeSede;


    var fisio = Usuarios.get({
      idUsuario: $auth.getPayload().sub
    }).$promise.then(function(data) {
      vm.sedes = data.sedesList;
    });

    //vm.eventsSources = [];

    // vm.horarios = Horarios.query()
    //   .$promise.then(function(data) {
    //     for (var i = 0; i < data.length; i++) {
    //       vm.eventSource.push({
    //         id: data[i].idHorario,
    //         title: data[i].descCita,
    //         start: new Date(data[i].fechaHorario),
    //         allDay: false
    //       });
    //     }
    //   });
    function changeSede() {
      eventScroll();
      console.log(vm.sede);
    }


    function eventScroll() {

      console.log($auth.getPayload().sedes);
      //var datosCalendario;
      if ($auth.getPayload().roles.indexOf('REC') !== -1 || $auth.getPayload()
        .roles.indexOf('FISIO') !== -1) {
        if (vm.sede !== null) {
          if (vm.fechaInicio !== null && vm.fechaFin !== null) {
            Citas.findByFechas({
              fechaInicio: $filter('date')(vm.startDate, 'yyyy-MM-dd',
                '-0500'),
              fechaFin: $filter('date')(vm.endDate, 'yyyy-MM-dd', '-0500'),
              idSede: vm.sede.idSedes
            }).$promise.then(
              function(data) {
                // console.log(data);
                // datosCalendario = $filter('filter')(data);
                // if (datosCalendario !== null && datosCalendario !== undefined) {
                vm.eventSource.length = 0;
                for (var i = 0; i < data.length; i++) {
                  vm.eventSource.push({
                    id: data[i].idCita,
                    title: 'Paciente: ' + data[i].idUsuario.primerNombre +
                      ' ' + data[i].idUsuario.primerApellido,
                    start: new Date(data[i].fechaCita),
                    allDay: false
                  });
                }
                // }
              }).catch(function(error) {
              console.log(error);
            });
          }
        }
      } else {
        if (vm.fechaInicio !== null && vm.fechaFin !== null) {
          Citas.findByFechasUser({
            fechaInicio: $filter('date')(vm.startDate, 'yyyy-MM-dd',
              '-0500'),
            fechaFin: $filter('date')(vm.endDate, 'yyyy-MM-dd', '-0500'),
            idUsuario: $auth.getPayload().id
          }).$promise.then(
            function(data) {
              // console.log(data);
              // datosCalendario = $filter('filter')(data);
              // if (datosCalendario !== null && datosCalendario !== undefined) {
              vm.eventSource.length = 0;
              for (var i = 0; i < data.length; i++) {
                vm.eventSource.push({
                  id: data[i].idCita,
                  title: 'Paciente: ' + data[i].idUsuario.primerNombre +
                    ' ' + data[i].idUsuario.primerApellido,
                  start: new Date(data[i].fechaCita),
                  allDay: false
                });
              }
              // }
            }).catch(function(error) {
            console.log(error);
          });

        }
      }
    }

    function renderView(view) {
      vm.startDate = new Date(view.start);
      vm.endDate = new Date(view.end);
      console.log('render');
      eventScroll();
    }

    function findByFechas(str) {
      return Citas.findByFechas({
        query: str
      });
    }



    //Array de eventos
    vm.calendarConfig = {
      calendar: {
        defaultView: 'month',
        editable: false,
        lang: 'es',
        contentHeight: 560,
        aspectRatio: 1,
        handleWindowResize: true,
        allDayText: 'Todo el dia',
        timeFormat: 'h:mm',
        weekNumbers: true,
        weekNumberTitle: 'Semana',
        buttonText: {
          today: 'Hoy',
          month: 'Mes',
          week: 'Semana',
          day: 'Dia',
        },
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
          'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre',
          'Diciembre'
        ],
        monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul',
          'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
        ],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves',
          'Viernes', 'Sabado'
        ],
        dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
        },
        viewRender: vm.renderView
      }
    };
    vm.eventSources = [vm.eventSource];


  }

  CitasCreateCtrl.$inject = ['$location', '$mdToast', 'Citas', 'Usuarios',
    '$auth'
  ];

  function CitasCreateCtrl($location, $mdToast, Citas, Usuarios, $auth) {
    var vm = this;


    vm.create = create;
    vm.queryUsuariosUsr = queryUsuariosUsr;
    vm.queryFisio = queryFisio;
    vm.minDate = new Date();
    vm.minDate.setDate(vm.minDate.getDate() - 0);
    vm.dateMax = new Date();
    vm.dateMax.setFullYear(vm.dateMax.getFullYear());
    console.log($auth.getPayload().id);

    function create() {
      console.log(vm.cita);
      Citas.save(vm.cita, function() {
        if ($auth.getPayload().roles.indexOf('USR') !== -1) {
          $location.path('/agenda');
        } else if ($auth.getPayload().roles.indexOf('REC') !== -1) {
          $location.path('/agenda/list');
        }
        $mdToast.show(
          $mdToast.simple()
          .textContent('Cita registrada correctamente')
          .position('bottom right'));
      }, function(error) {
        $mdToast.show(
          $mdToast.simple()
          .textContent(error.status + ' ' + error.data)
          .position('bottom right'));
        console.log(vm.cita);
      });
    }


    function queryUsuariosUsr(str) {
      return Usuarios.queryByIdenti({
        query: str
      });
    }

    function queryFisio(str) {
      return Usuarios.findByFisio({
        query: str
      });
    }



  }

  CitasListCtrl.$inject = ['$stateParams', '$auth', 'Citas', 'Usuarios'];

  function CitasListCtrl($stateParams, $auth, Citas, Usuarios) {
    var vm = this;
    vm.citasList = [];
    vm.queryHistorias = queryHistorias;

    var cita = Usuarios.get({
      idUsuario: $auth.getPayload().sub
    }).$promise.then(function(data) {
      vm.citasList = Citas.findBySedeInCitas({
        query: data.sedesList[0].idSedes
      });
    });
    console.log($auth.getPayload().sedes);
    console.log($auth.getPayload().sub);
    vm.query = {
      order: 'name',
      limit: 5,
      page: 1
    };
    //vm.citasList = Citas.query();
    function queryHistorias(str) {
      return Citas.findByIdUsuario({
        query: str
      });
    }

    function selectPaciente(item) {
      queryHistorias();
      vm.citasList = [item];
    }

  }


  CitasUpdateCtrl.$inject = ['$stateParams', '$location', '$mdToast',
    'Citas', 'Usuarios', 'CausasExternas', 'PersonalTratante', 'Cups',
    'FuerzasMusculares', 'FinalidadesConsultas',
    'TiposDeDiagnosticosPrincipales', 'FinalidadesProcedimientos',
    'AmbitosProcedimientos', 'Diagnosticos', '$auth'
  ];

  function CitasUpdateCtrl($stateParams, $location, $mdToast,
    Citas, Usuarios, CausasExternas, PersonalTratante, Cups,
    FuerzasMusculares, FinalidadesConsultas, TiposDeDiagnosticosPrincipales,
    FinalidadesProcedimientos, AmbitosProcedimientos, Diagnosticos, $auth) {

    var vm = this;

    vm.queryDiagnosticos = queryDiagnosticos;
    vm.queryUsuariosUsr = queryUsuariosUsr;
    vm.queryFisio = queryFisio;
    vm.causas = CausasExternas.query();
    vm.personal = PersonalTratante.query();
    vm.fuerzas = FuerzasMusculares.query();
    vm.finalidadconsulta = FinalidadesConsultas.query();
    vm.diagnosticoPrincipal = TiposDeDiagnosticosPrincipales.query();
    vm.finalidadesProcedimientos = FinalidadesProcedimientos.query();
    vm.ambitosProcedimientos = AmbitosProcedimientos.query();
    vm.queryCups = queryCups;
    vm.dateMax = new Date();
    vm.dateMax.setFullYear(vm.dateMax.getFullYear());
    vm.minDate = new Date();
    vm.minDate.setDate(vm.minDate.getDate() - 0);

    this.id = $stateParams.idCita;
    this.cita = Citas.get({
      idCita: this.id
    });

    this.update = function() {
      vm.cita.idPersonal = [{
        idPersonal: '1'
      }];
      vm.cita.idAmbitoProcedimiento = [{
        idAmbitoProcedimiento: '01'
      }];
      vm.cita.idTipoDiagnostico = [{
        idTipoDiagnostico: '1'
      }];
      Citas.update(this.cita, function() {
        if ($auth.getPayload().roles.indexOf('REC') !== -1) {
          $location.path('/agenda/list');
        } else {
          $location.path('/citas/list');
        }
        $mdToast.show(
          $mdToast.simple()
          .textContent('Se han ingresado los datos')
          .position('bottom right'));
      });
    };

    function queryUsuariosUsr(str) {
      return Usuarios.queryByIdenti({
        query: str
      });
    }

    function queryFisio(str) {
      return Usuarios.findByFisio({
        query: str
      });
    }

    function queryCups(str) {
      return Cups.queryByNombre({
        query: str
      });
    }

    function queryDiagnosticos(str) {
      return Diagnosticos.findByNombre({
        query: str
      });
    }

  }

  CitasDeleteCtrl.$inject = ['$stateParams', '$auth', 'Citas', '$location',
    '$mdToast'
  ];

  function CitasDeleteCtrl($stateParams, $auth, Citas, $location, $mdToast) {
    var vm = this;

    this.id = $stateParams.idCita;
    this.cita = Citas.get({
      idCita: this.id
    });

    this.delete = function() {
      Citas.delete(this.cita, function() {
        $location.path('/agenda/list');
        $mdToast.show(
          $mdToast.simple()
          .textContent('Se ha cancelado la cita')
          .position('bottom right'));
      });
    };

  }



  getUsuarios.$inject = ['Usuarios'];

  function getUsuarios(Usuarios) {
    return Usuarios.query();
  }

  getCups.$inject = ['Cups'];

  function getCups(Cups) {
    return Cups.query();
  }

  getDiagnosticos.$inject = ['Diagnosticos'];

  function getDiagnosticos(Diagnosticos) {
    return Diagnosticos.query();
  }

})();
