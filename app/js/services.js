'use strict';

/* Services */

//interface with Posts on the server
angular.module('myApp.services', []).factory('postalService', ['$http', function($http) {
    var service = {};

    service.getPosts = function(amount, start, callback) {
        $http.post("/getPosts", {amount: amount, start: start})
        .success(function(posts) {
            if (posts === undefined) {
                console.log("No such posts exist on database.");
                callback("No such posts exist on database"); //treat this as an error
            }
            else {
                console.log(posts.length + " posts gathered.");
                callback(null, posts); //no error! 
            }
        }).error(function(err, status) {
            console.log("Error getting posts: " + status + " " + err);
            callback(err); //there's an error.
        });
    };
    
    service.getPost = function(postId, callback) {
        $http.post("/getPosts", {amount: 1, start: 0, find: {_id: postId}})
        .success(function(posts) {
            if(posts === undefined) {
                callback("No such post exists on the database");
            } else {
                callback(null, posts[0]);
            }
        })
        .error(function(err, status) {
            console.log("Error getting post: " + status + " " + err);
            callback(err);
        });
    }

    service.newPost = function(title, content, callback) {
        var newPostJSON = {};
        newPostJSON.title = title;
        newPostJSON.content = content;
        $http.post("/newPost", JSON.stringify(newPostJSON))
        .success(function(post) {
            console.log("Success! Post written");
            callback(null, post);
        }).error(function(err, status) {
            console.log("Error creating post: " + status + ": " + err);
            callback(err);
        });
    };

    return service;
}])

//interface with Comments on the server
.factory('commentService', ['$http', function($http) {
    var service = {};

    service.newComment = function(content, parent, callback) {
        $http.post("/newComment", {content: content, parent: parent})
        .success(function(comment) {
            console.log("Success creating comment!");
            callback(null);
        })
        .error(function(status, response) {
            var err = "Error creating comment: " + status + ": " + response;
            console.log(err);
            callback(err);
        });
    }

    service.getComments = function(parent, callback) {
        $http.post("/getComments", {parent: parent})
        .success(function(comments){
            callback(null, comments);
        })
        .error(function(status, response){
            var err = "Error getting comments: " + status + ": " + response;
            console.log(err);
            callback(err);
        });
    };

    return service;
}]);
