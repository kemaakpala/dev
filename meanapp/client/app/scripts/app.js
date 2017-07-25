'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, $locationProvider, RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl',
        //controllerAs: 'about' these are only needed for nested views
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.hashPrefix('');

    // .when('/about', {
    //   templateUrl: 'views/about.html',
    //   controller: 'AboutCtrl',
    //   controllerAs: 'about'
    // })
  }).factory('MovieRestangular', function (Restangular) {
    return Restangular.withConfig(function (RestangularConfigurer) {
      RestangularConfigurer.setFullResponse(true);
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  }).factory('Movie', function(MovieRestangular) {
    return MovieRestangular.service('movie');
  });
