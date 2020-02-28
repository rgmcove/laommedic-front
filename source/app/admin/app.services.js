(function() {
  'use strict';
  angular.module('app.admin.services', [

    ])
    .factory('EjemploPlantilla', EjemploPlantilla);

  EjemploPlantilla.$inject = ['$resource'];


  //Este servicio nos provee de los métodos GET POST PUT DELETE
  function EjemploPlantilla($resource) {
    return $resource('/mangeltech'
      //Se debe digitar el id del modelo
      //{ inmuebleId: '@_id' },
    );
  }

  //De igual manera los factory nos sirven para almacenar información
  //y que nos pueda servir en cualquier controlador o lugar de la aplicación
  //evitando de esta manera hacer variables globales.
})();
