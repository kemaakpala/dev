//pass  by value
function change(b){
    b = 2;
}

var a = 1;
change(a);
console.log(a);//result: 1, this is because when the change function is called b makes a copy of the value of a and is set in a different location in memory.

//pass by reference

function changeObj(d){
    d.prop1 = function(){};
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);//result { prop1: [Function], prop2: {} }. this is because d points to the same spot in memory as c. so what ever changes are made to d will affect c.