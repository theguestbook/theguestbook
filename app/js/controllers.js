'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('PostCtrl', ['$scope', 'postalService',
    function($scope, postalService) {
        $scope.posts = [];
        $scope.getPosts = function(amount, start, before) {
            if(amount === undefined) amount = 20; //get the latest 20 posts by default
            if(start === undefined) start = 0; //get the first 20 by default
            if(before === undefined) before = true; //append the posts to the start of the list by default
            postalService.getPosts(amount, start, function(err, posts) {
                if (err); //oh no;
                else {
                    //append the posts from the server 
                    //to the beginning or the end 
                    //of the $scope.posts
                    $scope.posts = (before) ? posts.concat($scope.posts) : $scope.posts.concat(posts);
                }
            });
        };

        var init = function() {
            $scope.getPosts(20, 0);
        };
        init(); //get posts when this directive loads
    }
])
.controller('PermapostCtrl', ['$scope', '$routeParams', 'postalService', 
    function($scope, $routeParams, postalService) {
        $scope.post = {};
        $scope.getPost = function() {
            postalService.getPost($routeParams.postId, function(err, post) {
                if(err) return;
                $scope.post = post;
            });
        };
        
        var init = function() {
            $scope.getPost();
        };
        init();
    }
]);