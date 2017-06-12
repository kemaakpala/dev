var module = angular.module('demoApp', ['ngMockE2E']).config(function($provide) {
  $provide.decorator('$httpBackend', function($delegate) {
    var proxy = function(method, url, data, callback, headers) {
      var interceptor = function() {
        var _this = this,
          _arguments = arguments;
        setTimeout(function() {
          callback.apply(_this, _arguments);
        }, 700);
      };
      return $delegate.call(this, method, url, data, interceptor, headers);
    };
    for(var key in $delegate) {
      proxy[key] = $delegate[key];
    }
    return proxy;
  });
}).run(function($httpBackend){
  $httpBackend.whenPOST('/login').respond(function(method, url, data) {
    var details = angular.fromJson(data);
    if(details.email && details.email === 'test@test.com' && details.password && details.password === "test")
       return [200, {loggedIn: true, userid: 'testid'}, {}];
    else return [200, {loggedIn: false}, {}];
  });
});

module.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
  $scope.data = {};
  
  $scope.submit = function(){
    alert('Form Submitted!!\nEmail: ' + $scope.data.email + '\nPassword: ' + $scope.data.password);
  };
}]);