(function() {
    'use strict';

    angular
        .module('clinicSystemApp')
        .factory('TestService', TestService);

    AuditsService.$inject = ['$resource'];

    function AuditsService ($resource) {
        var service = $resource('_search/users/:query', {}, {
            'get': {
                method: 'GET',
                isArray: true
            },
            'query': {
                method: 'GET',
                isArray: true,
                params: {fromDate: null, toDate: null}
            }
        });

        return service;
    }
})();
