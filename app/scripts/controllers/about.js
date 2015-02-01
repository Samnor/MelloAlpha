'use strict';

/**
 * @ngdoc function
 * @name mellowebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mellowebApp
 */
angular.module('mellowebApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
