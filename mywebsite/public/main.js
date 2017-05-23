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
mywebsiteApp.service('contactService', function(){
   this.firstname = '';
   this.lastname = '';
   this.email = '';
   this.subject = '';
   this.message = '';
});

//controllers
mywebsiteApp.controller('homeController',
  [
    '$scope','$log', '$resource', '$window', 'contactService',
    function($scope, $log, $resource, $window, contactService){
      console.log(contactService.firstname);
      $scope.firstname = contactService.firstname;
      $scope.lastname = contactService.lastname;
      $scope.email = contactService.email;
      $scope.subject = contactService.subject;
      $scope.message = contactService.message;

      $scope.$watch('firstname', function(){
        console.log('in firstname');
         contactService.firstname = $scope.firstname;
         console.log(contactService);
      });

      $scope.$watch('lastname', function(){
        console.log('in lastname');
         contactService.lastname = $scope.lastname;
         console.log(contactService);
      });
      $scope.$watch('email', function(){
        console.log('in email');
         contactService.email = $scope.email;
         console.log(contactService);
      });
      $scope.$watch('subject', function(){
        console.log('in subject');
         contactService.subject = $scope.subject;
         console.log(contactService);
      });
      $scope.$watch('message', function(){
        console.log('in subject');
         contactService.message = $scope.message;
         console.log(contactService);
      });

      $scope.submit = function(){
          console.log($scope.contactForm.$valid);
          if($scope.contactForm.$valid){
            alert('our form is amazing');
            return false;
          }

           var Contacts = $resource(
             'http://localhost:3000/api/mywebsitemessage/:id',
             { id: '@id' },
             {
               contact: {
                 method: 'POST',
                 params:{
                   name: '',
                   email: '',
                   subject: '',
                   message: ''
                 }
               }
             }
           );


           var newContact = new Contacts();
           newContact.name = contactService.name;
           newContact.email = contactService.email;
           newContact.subject = contactService.subject;
           newContact.$save();

           //redirect
           $window.location.href = '/index.htm';

         };
         console.log(contactService);
         console.log($scope);
      // $scope.weatherApi = $resource('http://localhost:3000/api/mywebsitemessage/');
      // //save
      // $scope.weatherApi.save(contactService, function(req, res){
      //   console.log(res);
      //   $resource.location('');
      //   console.log(req);
      //   console.log(contactService);
      // });
      console.log($scope);

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
