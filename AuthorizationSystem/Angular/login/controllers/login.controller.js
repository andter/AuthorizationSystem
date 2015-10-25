
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
        vm.submit = submit;

        activate();

        function activate() { }

        function submit() {
            var credentials = {};
            credentials.username = vm.credentials.username;
            credentials.password = vm.credentials.password;
            loginService.login(credentials)
            .then(function success(response) {

            }, function error(response) {
            });;
        }
    }
})();
