'use strict';

angular
    .module('foodMenu')
    .component('foodMenu', {
    templateUrl: 'food-menu/food-menu.template.html'
}).controller('FoodMenuController', ['$scope', 'foodMenuDataService', function ($scope, foodMenuDataService) {
    $scope.data = foodMenuDataService;
}]);