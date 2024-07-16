(function () {
    'use strict';
    var app = angular.module("app", []);
    app.controller("Handle", Handle);
    app.$inject = ['$scope','$location'];

    function Handle($scope,$location) {
        var list = [
            { name: "Angularjs", like: 10, dislike: 2,status:true },
            { name: "Bodejs", like: 9, dislike: 3, status: true},
            { name: "Ceactionjs", like: 8, dislike: 4, status: false },
            { name: "DypeScript", like: 7, dislike: 5, status: true},
        ];
        $scope.listLanguages = list;
        $scope.increaseLike = function (lesson) {
            lesson.like++;
        }
        $scope.increaseDislike = function (lesson) {
            lesson.Dislike++;
        }

        $scope.sortColumn = 'name';
        $scope.reverse = false;

        $scope.sortData = function (column) {
            if ($scope.sortColumn==column)
                $scope.reverse = !$scope.reverse;
            else
                $scope.reverse = false;
                $scope.sortColumn = column;
        }

        $scope.getSortClass = function (column)
        {
            if ($scope.sortColumn == column) {
                return $scope.reverse ? 'arrow-up' : 'arrow-down';
            }
            return '';
        }
       
    }

    app.filter("status", function () {
        return function (input) {
            if (input = true)
                return "kích hoạt";
            else
                return "khóa";
        }
    });

})();
