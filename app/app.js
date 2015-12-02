angular.module('app', [])
.controller('gitHubDataController', ['$scope', '$http', function($scope,$http) {
  'use strict';
  
  $scope.username = "tokenandfriends";
  $http.get('https://api.github.com/users/'+$scope.username)
    .success(function(data) {
    $scope.userData = data;
  })
}]);