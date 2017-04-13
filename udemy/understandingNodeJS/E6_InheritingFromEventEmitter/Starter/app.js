var EventEmitter = require('events');
var util = require('util');

function Greetr(){
    this.greeting = 'Hello World!';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function (data){
    console.log(this.greeting+ ': '+ data);
    this.emit('greet', data);
}

var greetr1 = new Greetr();
//listener
greetr1.on('greet', function(data){
    console.log('someone greeted!: '+ data);
});

greetr1.greet('Tony');