angular.module('appComponents').component('sortIcon', {
    templateUrl: 'core/components/sort-icon/sort-icon.template.html',
    bindings: {
        order: '<'
    },
    controller: sortIconCtrl
});

function sortIconCtrl() {
}