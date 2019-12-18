'use strict';

angular.module('foodMenu')
    .component('foodMenuHeader', {
    templateUrl: 'food-menu/header/header.html'
}).controller('HeaderController', ['$scope', 'foodMenuDataService', function ($scope, foodMenuDataService) {
    $scope.log = function () {
        var f = document.getElementById('file').files[0],
            r = new FileReader();

        r.onloadend = function(e) {
            var data = e.target.result;
            var obj = JSON.parse(data);
            foodMenuDataService.setMenuList(obj);
        }

        r.readAsBinaryString(f);
    }
}])
