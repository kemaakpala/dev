//Module
var mywebsiteApp = angular.module('mywebsiteApp', ['ngRoute', 'ngResource', 'ngMessages', 'ngAnimate', 'ui.bootstrap', 'uiGmapgoogle-maps']);

//Routes
mywebsiteApp.config(function ($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.htm',
      controller: 'homeController'
    })

});
//googlemaps
mywebsiteApp.config(function (uiGmapGoogleMapApiProvider){
  uiGmapGoogleMapApiProvider.configure({
    //    key: 'your api key',
    v: '3.20', //defaults to latest 3.X anyhow
    libraries: 'weather,geometry,visualization'
  });
});
//services
mywebsiteApp.service('contactService', function(){
   this.firstname = '';
   this.lastname = '';
   this.email = '';
   this.subject = '';
   this.message = '';
   this.success = false;
});

//controllers
mywebsiteApp.controller('homeController',
  [
    '$scope','$log', '$resource', '$window', 'contactService', 'uiGmapGoogleMapApi',
    function($scope, $log, $resource, $window, contactService, uiGmapGoogleMapApi){
      $scope.submitted = false;
      $scope.success = contactService.success;
      $scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
      $scope.successMsg = null;
      $scope.errorMsg = null;

      $scope.map = { center: { latitude: 1.3154016, longitude: 103.5668156 }, zoom: 8 };
      
      console.log(contactService.firstname);
      $scope.firstname = contactService.firstname;
      $scope.lastname = contactService.lastname;
      $scope.email = contactService.email;
      $scope.subject = contactService.subject;
      $scope.message = contactService.message;

      $scope.$watch('firstname', function(){
        //console.log('in firstname');
         contactService.firstname = $scope.firstname;
         //console.log(contactService);
      });

      $scope.$watch('lastname', function(){
        //console.log('in lastname');
         contactService.lastname = $scope.lastname;
         //console.log(contactService);
      });
      $scope.$watch('email', function(){
        //console.log('in email');
         contactService.email = $scope.email;
         //console.log(contactService);
      });
      $scope.$watch('subject', function(){
        //console.log('in subject');
         contactService.subject = $scope.subject;
         //console.log(contactService);
      });
      $scope.$watch('message', function(){
        //console.log('in subject');
         contactService.message = $scope.message;
         //console.log(contactService);
      });

      $scope.submit = function(isValid){
          console.log(isValid);
          if(!isValid){
            $scope.errorMsg = "Oops! There's been an error. Please review and try again."; 
            $scope.successMsg = null
            return false
          }else{
            $scope.errorMsg = null;
            
            var Contacts = $resource(
              'http://localhost:3000/api/mywebsitemessage/:id',
              { id: '@id' },
              {
                contact: {
                  method: 'POST',
                  params:{ firstname: '', lastname: '', email: '', subject: '', message: '' }
                }
              }
            );

            //create newContact
            var newContact = new Contacts();
            newContact.firstname = contactService.name;
            newContact.lastname = contactService.lastname;
            newContact.email = contactService.email;
            newContact.subject = contactService.subject;
            newContact.message = contactService.message;
            
            //save newContact
            newContact.$save(function(contact){
              $scope.success = true;
              $scope.successMsg = "Thanks you very much for getting in touch. I strive to get back to you in a space of 24 hrs.";
            });
          }

         };

    }
  ]
);


//directives
mywebsiteApp.directive('contactForm', function(){
  return {
    restrict: 'EA',//EACM
    templateUrl: 'directives/contact.htm',
    replace: true, //, //false does not remove custom tag from html
    //scope: {
      //isolated scope directive cannot directly affect what's going on in its parent page

    //}
  }
});

mywebsiteApp.directive('googleMap', function(){
  return {
    restrict: 'EA',//EACM
    templateUrl: 'directives/map.htm',
    replace: true, //, //false does not remove custom tag from html
    //scope: {
      //isolated scope directive cannot directly affect what's going on in its parent page

    //}
  }
});
