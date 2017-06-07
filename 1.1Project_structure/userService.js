var userSet = function (){
    var user = {};
    var stored_users = localStorage.getItem('usersSet') ? localStorage.getItem('usersSet'): '';
    this.sendData = function(passUser){
        user = passUser;
        if(!localStorage.getItem('usersSet')){
            localStorage.setItem('usersSet', JSON.stringify(user));
            stored_users = localStorage.getItem('usersSet');
        }else{
             stored_users = localStorage.getItem('usersSet');
             stored_users += ','+JSON.stringify(user);
             localStorage.setItem('usersSet', stored_users);
        }
    };

    this.showAllUsers = function(){
        var usersArray = '['+stored_users+']';
        var allUsers = JSON.parse(usersArray);

        return allUsers;
    }
};
angular.module("routerApp")
    .service('userService', userSet);