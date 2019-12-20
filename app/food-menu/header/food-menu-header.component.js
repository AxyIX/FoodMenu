'use strict';

angular.module('foodMenu')
    .component('foodMenuHeader', {
        templateUrl: 'food-menu/header/food-menu-header.template.html'
    })
    .controller('HeaderController', ['$scope', 'foodMenuDataService', ($scope, foodMenuDataService) => {
        $scope.dataService = foodMenuDataService;

        let file;
        $scope.handleFile = (element) => {
            const reader = new FileReader();
            reader.onload = () => {
                file = JSON.parse(reader.result);
            };
            reader.readAsText(element.files[0]);
        };
        $scope.load = () => {
            foodMenuDataService.setMenuList(file);
        };
    }]);
