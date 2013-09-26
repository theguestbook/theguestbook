'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).factory('postalService', ['$http', function($http) {
    var service = {};

    service.getPosts = function(callback) {
        $http.get("/getPosts").success(function(res) {
            if (res == undefined) console.log("No posts on database");
            else {
                console.log(res.length + "posts gathered.");
                callback(res);
            }
        }).error(function(err, status) {
            console.log("Error getting posts: " + status + " " + err);
        });
    };

    service.newPost = function(title, content, callback) {
        var newPostJSON = {};
        newPostJSON.title = title;
        newPostJSON.content = content;
        $http.post("/newPost", JSON.stringify(newPostJSON)).success(function(res) {
            console.log("Success! Post written");
            callback(null);
        }).error(function(err, status) {
            console.log(status + ": " + err);
            callback(err);
        });
    };

    return service;
}]);
