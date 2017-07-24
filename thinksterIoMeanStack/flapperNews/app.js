var app = angular.module('flapperNews', []);
//Factory ( Service Type )
app.factory('posts', [function () {
    var o = {
        posts: []
    };

    return o;
}]);

//Controller
app.controller('MainCtrl', ['$scope', 'posts', function ($scope) {
    $scope.posts = posts.posts;
    
    $scope.addPost = function () {
        if ($scope.title === '') { return false; }
        $scope.posts.push({
            title: $scope.title,
            link: $scope.link,
            upvotes: 4
        });
        $scope.title = '';
        $scope.link = '';
    }
    $scope.incrementUpvotes = function (post) {
        post.upvotes += 1;
    }
}]);