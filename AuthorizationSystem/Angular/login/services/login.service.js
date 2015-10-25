
(function () {
    'use strict';

    angular
      .module('loginModule')
      .factory('loginService', loginService);

    loginService.$inject = ['$http'];

    function loginService($http) {
        var service = {
            login: login,
            newUser: newUser
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

        function newUser(user) {
            return $http({
                method: 'POST',
                url: '/user/new',
                data: user
            });
        }
    }
})();
