(function () {
    
    'use strict';

    var app = angular.module('QRScanner', []);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('scanner', {
            cache: false,
            url: '/scanner',
            templateUrl: 'js/modules/QRScanner/QRScanner.template.html',
            controller: 'ScannerCtrl as vm'
        });

        $urlRouterProvider.otherwise('home');
    });

})();