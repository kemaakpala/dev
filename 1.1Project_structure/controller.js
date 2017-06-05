angular.module("routerApp")
    .controller('tCtrl', function ($scope, $state) {
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
    });