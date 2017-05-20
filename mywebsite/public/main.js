//Module
var mywebsiteApp = angular.module('mywebsiteApp', ['ngRoute', 'ngResource']);

//Routes
mywebsiteApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.htm',
      controller: 'homeController'
    })
    // .when('/', {
    //   templateUrl: 'pages/contact.htm',
    //   conroller: 'contactController'
    // });
});
//controllers
mywebsiteApp.controller('homeController', [$scope, function(){

}]);
//controllers
// mywebsiteApp.controller('contactController', [$scope, function(){
//
// }]);
