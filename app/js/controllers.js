'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('PostCtrl', ['$scope', function($scope) {
    $scope.posts = [{
        source: 'I like cats',
        destination: 'Cats are fun. They really make me feel happy with myself, you know?'
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