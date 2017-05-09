//DIRECTIVES
weatherApp.directive("forecastPanel", function() {
   return {
       restrict: 'E',
       templateUrl: 'directives/forecastpanel.html',
       replace: true,
       scope: {
           forecastObject: "=",
           convertToDateFunction: "&",
           convertToFahrenheitFunction: "&",
           dateFormat: "@"
       }
   }
});