'use strict';

angular.module('appServices').factory('localStorageService', function () {
   const ls = {};
   const prefix = 'foodMenu.';

   ls.addToStorage = (name, obj) => {
       localStorage.setItem(prefix + name, JSON.stringify(obj));
   };
   ls.getFromStorage = (name) => {
       const obj = localStorage.getItem(prefix + name);
       return JSON.parse(obj);
   };

   return ls;
});