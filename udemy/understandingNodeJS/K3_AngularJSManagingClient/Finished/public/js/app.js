//sets up the new module similar to module.exports in nodejs
angular.module('TestApp', []) //[] is usually a list of other modules required
    .controller('MainController', ctrlFunc);

function ctrlFunc(){
    this.message = 'Hello';
    this.people = [
        {
            name: 'John Doe'
        },
        {
            name: 'Jane Doe'
        },
        {
            name: 'Jim Doe'
        }
        
    ];
}