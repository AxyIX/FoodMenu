'use strict';

angular.module('foodMenu').component('foodMenuTable', {
        templateUrl: 'food-menu/table/food-menu-table.template.html',
        controller: foodMenuTableCtrl
    });

function foodMenuTableCtrl($scope, foodMenuDataService) {
    $scope.dataService = foodMenuDataService;
    $scope.order = '';

    $scope.setOrderBy = function (order) {
        switch ($scope.order) {
            case '-' + order:
                $scope.order = '+' + order;
                break;
            case '+' + order:
                $scope.order = '';
                break;
            default:
                $scope.order = '-' + order;
        }
    }
}