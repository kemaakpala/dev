var myApp = angular.module('myApp', []);

myApp.controller ('AppCtrl', ['$scope', '$http', function($scope, $http){
    console.log("Hello world from controller!")
    var refresh = function () {
        $http.get('/contactlist')
            .then(function (response) {
                console.log('I got the data I requested', response);
                $scope.contactlist = response.data;
                $scope.contact = null;
            }, function (response) {
                console.log("Error getting response:" + response);
            });
    }

    refresh();

    $scope.addContact = function (){
        console.log('add contact: ', $scope.contact);
        $http.post('/contactlist', $scope.contact)
            .then(function (response) {
                console.log('post: ', response.data);
                refresh();
            });
    }

    $scope.remove = function (id) {
        console.log(id);
        $http.delete('/contactlist/' + id)
        .then(function (response) {
            refresh();
        });
    }

    $scope.edit = function (id) {
        console.log(id);
        $http.get('/contactlist/' + id)
            .then(function (response) {
                console.log('I got the data I requested', response.data);
                $scope.contact = response.data;
            }, function (response) {
                console.log("Error getting response:", response.data);
            });
    }

    $scope.update = function () {
        console.log($scope.contact._id);
        $http.put('/contactlist/' + $scope.contact._id, $scope.contact)
        .then(function (response) {
            refresh();
        }) ;
    }

    $scope.deselect = function () {
        $scope.contact = "";
    }
}]);