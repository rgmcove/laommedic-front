(function() {
    'use strict';

    angular.module('app.fisioterapeuta.router', [

    ])
        .config(configure);

    //Se inyecta los parametros
    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    //Se configura las rutas de la aplicación para modelo
    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('fisioterapeuta', {
                url: '/fisioterapeuta',

                template: '<fisioterapeuta/>'
            });
    }

})();
