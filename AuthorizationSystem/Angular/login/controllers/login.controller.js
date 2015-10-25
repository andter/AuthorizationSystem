
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
            loginService.login({ email: vm.credentials.email, password: vm.credentials.password })
            .then(function success(response) {

            }, function error(response) {

            });;
        }
    }
})();
