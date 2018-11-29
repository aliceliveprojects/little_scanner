(function () {

    'use strict';

    var app = angular.module('Home');

    app.controller('HomeCtrl', control);

    control.$inject = [];

    function control() {
        var vm = angular.extend(this, {
            text: 'Hello, World!'
        });
    }

})();