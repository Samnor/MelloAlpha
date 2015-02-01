'use strict';

/**
 * @ngdoc function
 * @name mellowebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mellowebApp
 */
angular.module('mellowebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
