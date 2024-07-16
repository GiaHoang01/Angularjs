(function () {
    'use strict';

    var app = angular.module("app", []);
    app.controller('repeatController', repeatController);

    app.$inject = ['$scope','$location'];

    function repeatController($scope,$location) {
        var emp = [
            { lastName: "Ben", firstName: "Nguyen", gender: "male" },
            { lastName: "Bo", firstName: "Tran", gender: "female" },
            { lastName: "Buong", firstName: "Nguyen", gender: "male" },
        ];
        $scope.emp = emp;
    }
})();
