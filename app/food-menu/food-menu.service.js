'use strict';

angular
    .module('foodMenu')
    .factory('foodMenuDataService', () => {
        var serviceInstance = {};

        serviceInstance.menuList = [];
        serviceInstance.filterValue = '';

        serviceInstance.setMenuList = (list) => {
            serviceInstance.menuList = list;
        };
        serviceInstance.getMenuList = () => {
            return serviceInstance.menuList
        };

        return serviceInstance;
    });
