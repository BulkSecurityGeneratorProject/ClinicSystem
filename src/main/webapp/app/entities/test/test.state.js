(function() {
    'use strict';

    angular
        .module('clinicSystemApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('test', {
            parent: 'entity',
            url: '/test',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'global.menu.entities.test'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/test/test.html',
                    controller: 'TestController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('user-management');
                    return $translate.refresh();
                }]
            }
        });
    }
})();
