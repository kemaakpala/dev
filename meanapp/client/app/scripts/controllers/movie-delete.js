'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieDeleteCtrl
 * @description
 * # MovieDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieDeleteCtrl', function ($scope, Movie, $routeParams, $location) {
    console.log($scope, $routeParams);
    $scope.movie = Movie.one($routeParams.id).get().$object;
    $scope.deleteMovie = function () {
      $scope.movie.remove().then(function () {
        $location.path('/movies');
      }, function (response) {
        console.log('there was an error when trying to delete: ', response);
      });
    };
    $scope.back = function () {
      $location.path('/movie/' + $routeParams.id);
    };
  });