'use strict';

angular.module('app').directive('appFileReader', function () {
    return {
        require: 'ngModel',
        link: function postLink(scope, element, attrs, ngModel) {
            element.on('change', function (e) {
                var files = element[0].files;
                ngModel.$setViewValue(files);
            });
        }
    };
})
