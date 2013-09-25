'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).factory('postalService', ['$http', function($http) {
    var service = {};

    service.getPosts = function(callback) {
        $http.get("/getPosts").success(function(res) {
            if (res.posts == undefined) console.log("No posts on database");
            else {
                console.log(res.posts.length + "posts gathered.");
                callback(res.posts);
            }
        }).error(function(err, status) {
            console.log("Error getting posts: " + status + " " + err);
        });
    };

    service.newPost = function(title, content) {
        $http.post("/newPost").success(function(res) {
            console.log("Success! Post written")
        }).error(function(err, status) {
            console.log("Error creating post: " + status + " " + err);
        });
    };

    return service;
}]);
