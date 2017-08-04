var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
//$scope is a service and is the main connection between the view and model  
console.log($scope);
    
});


var searchPeople = function($scope,firstName, lastName, height, age, occupation){
    return 'Jane Doe';
};

console.log(searchPeople());

console.log(angular.injector().annotate(searchPeople));