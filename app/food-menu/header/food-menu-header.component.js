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
    }
    this.handleFile = function (file) {
        foodMenuDataService.setMenuList(file);
    }
}