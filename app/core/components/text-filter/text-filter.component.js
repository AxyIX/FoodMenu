'use strict';

angular.module('appComponents').component('textFilter', {
    templateUrl: 'core/components/text-filter/text-filter.template.html',
    bindings: {
        value: '=',
        label: '<'
    },
    controller: textFilterCtrl
});

function textFilterCtrl($scope) {

}