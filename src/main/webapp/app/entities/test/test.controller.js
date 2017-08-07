(function() {
    'use strict';

    angular
        .module('clinicSystemApp')
        .controller('TestController', TestController);

    TestController.$inject = ['Principal', 'Auth', 'JhiLanguageService', '$translate', 'AlertService'];

    function TestController (Principal, Auth, JhiLanguageService, $translate) {
        var vm = this;

        vm.error = null;
        vm.save = save;
        vm.settingsAccount = null;
        vm.success = null;

 
        function save () {
        	AlertService.success("DEU CERTO");
        }
    }
})();
