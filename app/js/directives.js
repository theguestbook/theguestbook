'use strict';

/* Directives */


angular.module('myApp.directives', [])
.directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
        elm.text(version);
    };
 }])
.directive('post', [function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: {},
        templateUrl: "partials/components/post-partial.html",
    };
 }])
.directive('compose', ['postalService', function(postalService) {
    return {
        restrict: 'E',
        transclude: false,
        replace: true,
        scope: {
            onPost: "&" //why will it not
        },
        templateUrl: "partials/components/compose-partial.html",
        controller: function($scope, postalService) {
            $scope.title = "";
            $scope.content = "";
            $scope.newPost = function() {
                postalService.newPost($scope.title, $scope.content, function(err) {
                    if(err) console.log(err + ":(");
                    else {
                        //why can I not invoke onPost()??
                        $scope.onPost();
                    }
                });
            };
        },
    };
}]);
