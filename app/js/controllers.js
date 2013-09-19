'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('PostCtrl', ['$scope', function($scope) {
    $scope.posts = [{
        source: '192.168.1.1',
        destination: '192.168.1.1'
    }, {
        source: '192.168.1.1',
        destination: '192.168.1.1'
    }, {
        source: '192.168.1.1',
        destination: '192.168.1.1'
    }, {
        source: '192.168.1.1',
        destination: '192.168.1.1'
    }, {
        source: '192.168.1.1',
        destination: '192.168.1.1'
    }, {
        source: '192.168.1.1',
        destination: '192.168.1.1'
    }];
  }]);