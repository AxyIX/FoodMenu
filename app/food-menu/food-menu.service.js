'use strict';

angular
    .module('foodMenu')
    .factory('foodMenuDataService', function () {
        var serviceInstance = {};

        serviceInstance.menuList = [];
        serviceInstance.setMenuList = function (list) {
            serviceInstance.menuList = list;
        }
        serviceInstance.getMenuList = function () {
            return serviceInstance.menuList
        }

        return serviceInstance;
    })