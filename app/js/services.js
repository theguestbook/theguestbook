'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
    .factory('postalService', ['$http', function($http) {
        var service = {};
        
        service.getPosts = function(callback) {
            $http.get("/getPosts")
                .success(callback)
                .error(function(err, status) {
                    console.log("Error getting posts: " + status + " " + err);
                });
        };
        
        service.newPost = function(title, content) {
            $http.post("/newPost")
                .success(function() {console.log("Success! Post written")})
                .error(function(err, status) {
                    console.log("Error creating post: " + status + " " + err);
                });
        };
        
        return service;
    }]);
