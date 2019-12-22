'use strict';

angular.module('foodMenu').component('foodMenuTable', {
    templateUrl: 'food-menu/table/food-menu-table.template.html',
    controller: foodMenuTableCtrl
});

function foodMenuTableCtrl($scope, $uibModal, foodMenuDataService) {
    $scope.dataService = foodMenuDataService;
    $scope.order = '';

    $scope.setOrderBy = function (order) {
        switch ($scope.order) {
            case '+' + order:
                $scope.order = '-' + order;
                break;
            case '-' + order:
                $scope.order = '';
                break;
            default:
                $scope.order = '+' + order;
        }
    }

    this.openComponentModal = function (title, ingredients) {
        $uibModal.open({
            animation: true,
            component: 'ingredientsDialog',
            resolve: {
                title: function () {
                    return title;
                },
                ingredients: function () {
                    return ingredients;
                }
            },
            close: function () {
                $uibModal.close();
            }
        }).result.then(function () {}, function () {});
    }
}