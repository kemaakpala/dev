//Module
var mywebsiteApp = angular.module('mywebsiteApp', ['ngRoute', 'ngResource', 'ui.bootstrap']);

//Routes
mywebsiteApp.config(function ($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.htm',
      controller: 'homeController'
    })

});

//services
// mywebsiteApp.service('contactService', function(){
//   this.contact = 'patrick';
// });


//controllers
mywebsiteApp.controller('homeController',
  [
    '$scope', 'contactService',
    function($scope, contactService){
      // $scope.contact = contactService.contact;
      // $scope.$watch('contact', function(){
      //   contactService.contact = $scope.contact;
      // });
    }
  ]
);


//directives
mywebsiteApp.directive('contactForm', function(){
  return {
    restrict: 'EA',//EACM
    templateUrl: 'directives/contact.htm',
    replace: true, //, //false does not remove custom tag from html
    scope: {
      //isolated scope directive cannot directly affect what's going on in its parent page

    }
  }
});
