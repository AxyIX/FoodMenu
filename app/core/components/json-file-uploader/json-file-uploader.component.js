angular.module('appComponents').component('jsonFileUploader', {
    templateUrl: 'core/components/json-file-uploader/json-file-uploader.template.html',
    bindings: {
        onFileLoad: '&'
    },
    controller: jsonFileUploaderController
});

function jsonFileUploaderController($scope) {
    const ctrl = this;
    $scope.handleFile = function (element) {
        const reader = new FileReader();
        reader.onloadend = function() {
            const file = JSON.parse(reader.result);
            ctrl.onFileLoad({file: file});
            $scope.$apply();
        };
        reader.readAsText(element.files[0]);
    }
}