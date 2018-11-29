(function () {

    'use strict';

    var app = angular.module('QRScanner');

    app.controller('ScannerCtrl', control);

    control.$inject = ['$state'];

    function control($state) {
        // initiate the scanner and scan the code
        cordova.plugins.barcodeScanner.scan(
            function success(result) {
                // logic for when we get a code
                alert("We got a barcode\n" +
                    "Result: " + result.text + "\n" +
                    "Format: " + result.format + "\n" +
                    "Cancelled: " + result.cancelled);
                $state.go('home');
            },
            function failure(error) {
                // logic for when something goes wrong
                alert("Scanning failed: " + error)
            }
        )
    }

})();