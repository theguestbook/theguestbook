'use strict';

/* Controllers */

angular.module('myApp.controllers', []).controller('PostCtrl', ['$scope', 'postalService', function($scope, postalService) {
    $scope.posts = [{
        title: "Hello, World",
        content: "rememeber folks, always use git."
    }];

    $scope.getPosts = function() {
        postalService.getPosts(function(posts) {
            $scope.posts = posts;
        });
    };
}]).controller('NewPostCtrl', ['$scope', 'postalService', function($scope, postalService) {
    $scope.title = "";
    $scope.content = "";

    $scope.newPost = function() {
        postalService.newPost($scope.title, $scope.content)
    };
}]);