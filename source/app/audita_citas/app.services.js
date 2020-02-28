(function() {
	'use strict';

	angular.module('app.auditacitas.services', [

	])

	.factory('AuditaCitas', AuditaCitas);

	AuditaCitas.$inject = ['BASEURL', '$resource'];

	function AuditaCitas(BASEURL, $resource) {
		return $resource(BASEURL + '/auditacitas/:codigo', {
			codigo: '@codigo'
		}, {
			'update': {
				method: 'PUT'
			}
		});
	}


})();



//factory --> Es si la logica sera compleja || Se puede acceder en cualquier parte de la aplicación
