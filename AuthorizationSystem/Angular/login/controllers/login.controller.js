
(function () {
    'use strict';

    angular
      .module('loginModule')
      .controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['$scope', 'loginService'];

    function loginCtrl($scope, loginService) {
        /* jshint validthis:true */
        var vm = this;
        vm.credentials = {};
        vm.loginClick = loginClick;
        vm.login = login;
        vm.signupClick = signupClick;
        vm.signup = signup;

        vm.state = 0;
        activate();

        function activate() { }

        function login() {
            loginService.login({ email: vm.credentials.email, password: vm.credentials.password })
            .then(function success(response) {
                console.log(response);
            }, function error(response) {
                console.log(response);
            });;
        }

        function loginClick() {
            vm.state = 0;
        }

        function signupClick() {
            vm.state = 1;
        }

        function signup() {
            loginService.signup({ email: vm.credentials.email, password: vm.credentials.password })
            .then(function success(response) {
                console.log(response);
            }, function error(response) {
                console.log(response);
            });;
        }
    }
})();
