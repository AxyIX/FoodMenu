'use strict';

angular.module('foodMenu').factory('foodMenuDataService', () => {
        const serviceInstance = {};

        serviceInstance.menuList = [];
        serviceInstance.filter = {};

        serviceInstance.setMenuList = (list) => {
            serviceInstance.menuList = list;
        };
        serviceInstance.getMenuList = () => {
            return serviceInstance.menuList
        };
        serviceInstance.setFilter = (filter) => {
            serviceInstance.filter = filter;
        };

        return serviceInstance;
    });
