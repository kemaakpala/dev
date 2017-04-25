var myApp = angular.module('myApp', []);
//[param1,param2, function(){...}]
myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $log.info($scope);
    
}]);