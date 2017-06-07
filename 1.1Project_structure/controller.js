angular.module("routerApp")
    .controller('tCtrl', function ($scope, $state, userService) {
        var scaler;
        $scope.$on('$locationChangeStart', function(event, next, current){

            if(!scaler){
                angular.element(document.getElementById('view')).removeClass('scale');
            }
            scaler = false;

        });
        this.changeState = function (tab){
            this.transition = 'scale';
            $state.go(tab);
            scaler = true;
        }

        var user = {};
        this.createUser = function(){
            user.userName = this.userName
            user.email = this.email
            user.password = this.password
            user.youtubePlaylist = this.youtubePlaylist
            user.instagramUser = this.instagramUser

            userService.sendData(user);
            console.log(user)
        }

        this.showUsers = userService.showAllUsers();
    });