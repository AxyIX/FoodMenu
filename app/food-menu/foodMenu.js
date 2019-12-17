'use strict';

angular.module('foodMenu.food-menu', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/food-menu', {
            templateUrl: 'food-menu/foodMenu.html',
            controller: 'FoodMenuCtrl'
        });
    }])

    .controller('FoodMenuCtrl', [function() {

    }]);