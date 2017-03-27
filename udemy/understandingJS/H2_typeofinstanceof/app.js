var a = 3;
console.log('a: '+ typeof a);

var b = "Hello";
console.log('b: '+ typeof b);

var c = {};
console.log('c: '+ typeof c);

var d = [];
console.log('d: '+ typeof d); // weird!
console.log('d: '+ Object.prototype.toString.call(d)); // better!

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log('e: '+ typeof e);
console.log(e instanceof Person);

console.log('undefined: '+ typeof undefined); // makes sense
console.log('null: '+ typeof null); // a bug since, like, forever...

var z = function() { };
console.log('z: '+ typeof z);
