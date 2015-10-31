
(function () {
    'use strict';

    angular
      .module('loginModule')
      .factory('loginService', loginService);

    loginService.$inject = ['$http'];

    function loginService($http) {
        var service = {
            login: login,
            signup: signup
        };

        return service;
        ////////////////

        function login(credentials) {
            return $http({
                method: 'POST',
                url: '/user/login',
                data: credentials
            });
        }

        function signup(credentials) {
            return $http({
                method: 'POST',
                url: '/user/new',
                data: credentials
            });
        }
    }
})();
