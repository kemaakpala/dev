var greetings = require('./greetings.json');

var greet = function(){
    console.log(greetings.yo);
}

module.exports = greet;