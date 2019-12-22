angular.module('foodMenu').component('foodMenuHeader', {
    templateUrl: 'food-menu/header/food-menu-header.template.html',
    controller: foodMenuHeaderCtrl
});

function foodMenuHeaderCtrl($scope, foodMenuDataService, localStorageService) {
    const storageFilter = localStorageService.getFromStorage('headerFilter');
    if (storageFilter) {
        $scope.filter = storageFilter;
    } else {
        $scope.filter = {
            title: '',
            rating: '',
            price: ''
        };
    }

    this.clearFilters = function() {
        $scope.filter.title = '';
        $scope.filter.rating = '';
        $scope.filter.price = '';
        this.filter();
    };
    this.handleFile = function(file) {
        foodMenuDataService.setMenuList(file);
        this.filter();
    };
    this.filter = function() {
        localStorageService.addToStorage('headerFilter' ,$scope.filter);
        foodMenuDataService.setFilter({...$scope.filter});
    }
}