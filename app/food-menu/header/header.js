'use strict';

angular.module('app').component('foodMenuHeader', {
    templateUrl: 'food-menu/header/header.html'
}).controller('HeaderController', ['$scope', function ($scope) {
    $scope.log = function () {
        console.log($scope.file);
    }
}])
