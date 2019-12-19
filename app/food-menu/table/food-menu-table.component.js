'use strict';

angular
    .module('foodMenu')
    .component('foodMenuTable', {
        templateUrl: 'food-menu/table/food-menu-table.template.html'
    })
    .controller('TableController', ['$scope', 'foodMenuDataService', ($scope, foodMenuDataService) => {
        $scope.dataService = foodMenuDataService;
    }]);