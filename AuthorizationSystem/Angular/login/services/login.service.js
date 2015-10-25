
(function () {
    'use strict';

    angular
      .module('loginModule')
      .factory('loginService', loginService);

    loginService.$inject = ['$http'];

    function loginService($http) {
        var service = {
            login: login
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
    }
})();
