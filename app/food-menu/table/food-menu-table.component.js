angular.module('foodMenu').component('foodMenuTable', {
    templateUrl: 'food-menu/table/food-menu-table.template.html',
    controller: foodMenuTableCtrl
});

function foodMenuTableCtrl($scope, $uibModal, foodMenuDataService, localStorageService) {
    $scope.dataService = foodMenuDataService;

    const storageSort = localStorageService.getFromStorage('tableSort');
    if (storageSort) {
        $scope.order = storageSort;
    } else {
        $scope.order = '';
    }

    $scope.setOrderBy = function (order) {
        switch ($scope.order) {
            case '+' + order:
                $scope.order = '-' + order;
                break;
            case '-' + order:
                $scope.order = '';
                break;
            default:
                $scope.order = '+' + order;
        }
        document.querySelector('.app-main-wrapper').scrollTo(0, 0);
        localStorageService.addToStorage('tableSort', $scope.order);
    };

    this.openIngredientsDialog = function (title, ingredients) {
        $uibModal.open({
            animation: true,
            component: 'ingredientsDialog',
            resolve: {
                title: function () {
                    return title;
                },
                ingredients: function () {
                    return ingredients;
                }
            },
            close: function () {
                $uibModal.close();
            }
        }).result.then(function () {}, function () {});
    }
}