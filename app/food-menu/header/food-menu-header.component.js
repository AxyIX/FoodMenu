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
    this.clearFilters = () => {
        $scope.filter.title = '';
        $scope.filter.rating = '';
        $scope.filter.price = '';
        this.filter();
    };
    this.handleFile = (file) => {
        foodMenuDataService.setMenuList(file);
        this.filter();
    };
    this.filter = () => {
        foodMenuDataService.setFilter({...$scope.filter});
    }
}