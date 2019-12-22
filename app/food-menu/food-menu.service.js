angular.module('foodMenu').factory('foodMenuDataService', function() {
        const serviceInstance = {};

        serviceInstance.menuList = [];
        serviceInstance.filter = {};

        serviceInstance.setMenuList = function(list) {
            serviceInstance.menuList = list;
        };
        serviceInstance.getMenuList = function() {
            return serviceInstance.menuList
        };
        serviceInstance.setFilter = function(filter) {
            serviceInstance.filter = filter;
        };

        return serviceInstance;
    });
