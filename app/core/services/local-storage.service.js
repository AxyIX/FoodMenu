angular.module('appServices').factory('localStorageService', function () {
   const ls = {};
   const prefix = 'foodMenu.';

   ls.addToStorage = function(name, obj) {
       localStorage.setItem(prefix + name, JSON.stringify(obj));
   };
   ls.getFromStorage = function(name) {
       const obj = localStorage.getItem(prefix + name);
       return JSON.parse(obj);
   };

   return ls;
});