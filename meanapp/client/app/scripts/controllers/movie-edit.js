'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieEditCtrl
 * @description
 * # MovieEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieEditCtrl', function ($scope, $routeParams,
  Movie, $location) {
    $scope.editMovie = true;
    $scope.movie = {};
    console.log($routeParams.id);
    Movie.one($routeParams.id).get()
    .then(function(movie) {
      console.log(movie, movie.data.title, movie.data.url);
      $scope.movie = movie.data;
      $scope.saveMovie = function() {
        $scope.movie.save().then(function() {
          $location.path('/movie/' + $routeParams.id);
        });
      };
    }, function(response) {
      console.log('Update Failed: ', response);
    });
  });
