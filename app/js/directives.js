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
        templateUrl: "partials/post-partial.html",
    };
 }]);
