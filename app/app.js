'use strict';

// Declare app level module which depends on views, and core components
angular.module('foodMenu', [
  'ngRoute',
  'foodMenu.food-menu',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/food-menu'});
}]);
