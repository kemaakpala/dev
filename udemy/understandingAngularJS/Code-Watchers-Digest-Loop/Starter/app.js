var tb = document.getElementById("name");

var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    
    $scope.handle = '';
    $scope.lowercasehandle = function(){
      return $filter('lowercase')($scope.handle);  
    };
    
    $scope.$watch('handle', function(newValue, oldValue){
        
        console.info('Changed!');
        console.log('Old:' + oldValue);
        console.log('New:' + newValue);
        
    });
    
    /*
        setTimeout will run asynchronously along side the code that is on the page. hence we would have to tell angular to add this to its watchcycle dynamically using $scope.$apply()
    */
    
    setTimeout(function(){
        $scope.$apply(function(){
          
            $scope.handle = 'newtwitterhandle';
            console.log('Scope changed!');  
        
        })        
    }, 3000);
    
    
    //if you do not want to do this you should look at using angular services.
    
}]);
