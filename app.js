(function functionName() {
        'use strict'; //wymusza koniecznośc deklarowania (typowania) zmiennych

        var url ="http://10.56.123.135/asix/v1/variable/archive/raw?name=JO976KGW_OPC_PALACZ_MocK3&periodStart=NOW-1h&periodLength=1h&maxNumberOfSamples=100"

        app = angular.module('myApp', [])

                .controller('customersCtrl', function($scope, $http, $interval) {
                        var refreshData = function() {
                                $http.get(url).then(function (response) {
                                        $scope.myData = response.data.samples;
                                });
                        };
                        refreshData();
                        $interval(refreshData,5000);
        });
})();
