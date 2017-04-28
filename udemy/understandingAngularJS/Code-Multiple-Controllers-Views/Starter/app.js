var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope) {
    
    $scope.name = 'Main';
    
}]);

//everytime you request a $scope object you get a new instance unique to the controller its called from.
myApp.controller('secondController', ['$scope', function($scope) {
    
    $scope.name = 'Second';
    
}]);

