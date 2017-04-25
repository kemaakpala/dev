var myApp = angular.module('myApp', ['ngMessages','ngResource']);

myApp.controller('mainController', function($scope, $log, $filter, $resource) {
//   $log.log('Hello!');
//   $log.info('this is some info!');
//   $log.warn('warning!');
//   $log.debug('debug!');
//   $log.error('this was an error!');
    
//    $scope.name = 'John';
//    $scope.formattedname = $filter('uppercase')($scope.name);
//    $log.info($scope.name);
//    $log.info($scope.formattedname);
    
    console.log($resource);
});