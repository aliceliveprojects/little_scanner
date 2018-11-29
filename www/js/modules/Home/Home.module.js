(function () {

    'use strict';

    var app = angular.module('Home', []);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'js/modules/Home/Home.template.html',
            controller: 'HomeCtrl as vm'
        });

        $urlRouterProvider.otherwise('home');
    });

})();