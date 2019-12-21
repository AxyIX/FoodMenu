'use strict';

let foodMenu = angular.module('foodMenu');

foodMenu.component('foodMenuHeader', {
    templateUrl: 'food-menu/header/food-menu-header.template.html',
    controller: foodMenuHeaderCtrl
});

function foodMenuHeaderCtrl($scope, foodMenuDataService) {
    $scope.filter = {
        title: '',
        rating: '',
        price: ''
    };
    this.clearFilters = function () {
        $scope.filter.title = '';
        $scope.filter.rating = '';
        $scope.filter.price = '';
    };
    this.handleFile = function (file) {
        foodMenuDataService.setMenuList(file);
    }
}