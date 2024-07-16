(function () {
    'use strict';
    var app = angular.module("app", []);
    app.controller("Handle", Handle);
    app.$inject = ['$scope','$location'];

    function Handle($scope,$location) {
        var list = [
            { Name: "Angularjs", Like: 10, Dislike: 0,status:true },
            { Name: "Nodejs", Like: 10, Dislike: 0, status: true},
            { Name: "Reactionjs", Like: 10, Dislike: 0, status: false },
            { Name: "TypeScript", Like: 10, Dislike: 0, status: true},
        ];
        $scope.listLanguages = list;
        $scope.increaseLike = function (lesson) {
            lesson.Like++;
        }
        $scope.increaseDisLike = function (lesson) {
            lesson.Dislike++;
        }
        app.filter("status", function () {
            return function (input) {
                if (input = true)
                    return "kích hoạt";
                else
                    return "khóa";
            }
        });
    }
})();
