(function () {
    'use strict';

    Config.$inject = ['$stateProvider', '$urlRouterProvider'];

    angular
        .module('app')
        .config(Config);

    function Config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/login')
        $stateProvider
            .state('login', {
                url: '/login',
                controller: 'loginCtrl as login',
                templateUrl: 'Angular/login/views/login.html'
            });
    };
})();
