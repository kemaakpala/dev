//adding dependences here will not survive minification and is not recommended for production code. only development code or unminified production code
var myApp = angular.module('myApp', []);

/* in this example angular looks at the function parameters
myApp.controller('mainController', function($scope, $log) {
    $log.info($scope);
});*/

/*  the example below will survive minification and is recommended for production code.
    angular looks at the leading array parameters to determine what the params in the function means.
    myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
        $log.info($scope);
    }]);
*/

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $log.info($scope);
    
}]);