'use strict';

/**
* @ngdoc function
* @name angularApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the angularApp
*/
angular.module('angularApp')
.controller('MainCtrl', function($scope, $http) {
  $http.get('MOCK_DATA.json').then(function(result){
    $scope.employees = result.data;
  });
});
