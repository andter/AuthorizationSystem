
(function () {
    'use strict';

    angular
      .module('loginModule')
      .controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['$scope'];

    function loginCtrl($scope) {
        /* jshint validthis:true */
        var vm = this;
        vm.credentials = {};

        vm.title = '';

        activate();

        function activate() { }
    }
})();
