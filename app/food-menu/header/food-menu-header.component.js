'use strict';

let foodMenu = angular.module('foodMenu');

foodMenu.component('foodMenuHeader', {
    templateUrl: 'food-menu/header/food-menu-header.template.html',
    controller: foodMenuHeaderCtrl
});

function foodMenuHeaderCtrl($scope, foodMenuDataService, localStorageService) {
    const storageFilter = localStorageService.getFromStorage('headerFilter');
    if (storageFilter) {
        $scope.filter = storageFilter;
    } else {
        $scope.filter = {
            title: '',
            rating: '',
            price: ''
        };
    }

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
        localStorageService.addToStorage('headerFilter' ,$scope.filter);
        foodMenuDataService.setFilter({...$scope.filter});
    }
}