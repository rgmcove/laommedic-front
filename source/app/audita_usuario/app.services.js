(function(){
	'use strict';

	angular.module('app.auditausuarios.services', [

  ]).factory('AuditaUsuarios', AuditaUsuarios );

		AuditaUsuarios.$inject = ['BASEURL','$resource'];

		function AuditaUsuarios(BASEURL,$resource){
		  return $resource(BASEURL + '/auditausuarios/:codigo',
          {codigo: '@codigo'},
          {'update': {method: 'PUT'}
          });
		}

		})();






	//factory --> Es si la logica sera compleja || Se puede acceder en cualquier parte de la aplicación
