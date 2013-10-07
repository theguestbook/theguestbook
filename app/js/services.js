'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).factory('postalService', ['$http', function($http) {
    var service = {};

    service.getPosts = function(amount, start, callback) {
        $http.post("/getPosts", {amount: amount, start: start}).success(function(res) {
            if (res === undefined) {
                console.log("No such posts exist on database.");
                callback("No such posts exist on database"); //treat this as an error
            }
            else {
                console.log(res.length + " posts gathered.");
                callback(null, res); //no error! 
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
        $http.post("/newPost", JSON.stringify(newPostJSON)).success(function(res) {
            console.log("Success! Post written");
            callback(null, res);
        }).error(function(err, status) {
            console.log(status + ": " + err);
            callback(err);
        });
    };

    return service;
}]);
