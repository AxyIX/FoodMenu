'use strict';

angular.module('foodMenu').component('food-menu-table', {
    templateUrl: 'table.html',
    bindings: {
        data: '='
    }
})