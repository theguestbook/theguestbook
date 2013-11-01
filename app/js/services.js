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

    service.newPost = function(title, content, callback) {
        var newPostJSON = {};
        newPostJSON.title = title;
        newPostJSON.content = content;
        $http.post("/newPost", JSON.stringify(newPostJSON))
        .success(function(post) {
            console.log("Success! Post written");
            callback(null, post);
        }).error(function(err, status) {
            console.log(status + ": " + err);
            callback(err);
        });
    };

    return service;
}])

//interface with Comments on the server
.factory('commentService', ['$http', function($http) {
    var service = {};

    service.getComments = function(parent, callback) {
        $http.post("/getComments", {parent: parent})
        .success(function(status, comments){
            console.log("Success getting commments!");
            callback(null, comments);
        })
        .error(function(status, response){
            console.log("Error getting comments: " + status + " " + response);
        });
    };

    return service;
}]);
