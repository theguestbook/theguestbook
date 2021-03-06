'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/post-page.html', controller: 'PostCtrl'});
    $routeProvider.when('/compose', {templateUrl: 'partials/compose-page.html'});
    $routeProvider.when('/about', {templateUrl: 'partials/about-page.html'});
    $routeProvider.when('/post/:postId', {templateUrl: 'partials/single-post-page.html', controller: 'PermapostCtrl'});
  	$routeProvider.otherwise({redirectTo: '/'}); 
  }]);