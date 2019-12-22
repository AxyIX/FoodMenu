angular.module('foodMenu').component('ingredientsDialog', {
    templateUrl: 'food-menu/ingredients-dialog/ingredients-dialog.template.html',
    bindings: {
        resolve: '<',
        close: '&'
    },
    controller: ingredientsDialogCtrl
});

function ingredientsDialogCtrl() {
    const ctrl = this;
    ctrl.$onInit = function() {
        ctrl.title = ctrl.resolve.title;
        ctrl.ingredients = ctrl.resolve.ingredients;
    };
    ctrl.ok = function () {
        ctrl.close();
    };
}