'use strict';

angular.module('foodMenu').component('foodMenuTable', {
        templateUrl: 'food-menu/table/food-menu-table.template.html',
        controller: foodMenuTableCtrl
    });

function foodMenuTableCtrl($scope, foodMenuDataService) {
    $scope.dataService = foodMenuDataService;
}