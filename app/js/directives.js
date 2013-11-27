'use strict';

/* Directives */


angular.module('myApp.directives', [])
.directive('post', ['commentService', function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: {
            postId: "@",
        },
        templateUrl: "partials/components/post-partial.html",
        controller: function($scope, commentService) {
            $scope.comments = [];
            $scope.commentContent = "";
            $scope.commentsVisible = false;

            $scope.newComment = function() {
                commentService.newComment($scope.commentContent, $scope.postId, function(err) {
                     if(err);
                     else {
                        // Reload comments once submitted
                        $scope.getComments();
                        
                        // Clear the comment box
                        $scope.commentContent = "";
                     }
                });
            };

            $scope.getComments = function(toggle) {
                if(toggle) $scope.commentsVisible = !$scope.commentsVisible;
                if($scope.commentsVisible) {
                    commentService.getComments($scope.postId, function(err, comments) {
                        if(err);
                        else {
                            $scope.comments = comments;
                        }
                    });
                }
            };
        }
    };
 }])
.directive('compose', ['postalService', function(postalService) {
    return {
        restrict: 'E',
        transclude: false,
        replace: true,
        scope: {
            onPost: "&"
        },
        templateUrl: "partials/components/compose-partial.html",
        controller: function($scope, postalService) {
            $scope.title = "";
            $scope.content = "";
            $scope.newPost = function() {
                postalService.newPost($scope.title, $scope.content, function(err) {
                    if(err) console.log(err);
                    else {
                        $scope.title = ""; // Reset the title
                        $scope.content = ""; // Clear the compose box
                        $scope.onPost();
                    }
                });
            };
        },
    };
}]);
