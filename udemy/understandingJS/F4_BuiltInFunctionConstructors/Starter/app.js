String.prototype.isLengthGreaterThan = function(limit){
  return this.length > limit;
}

console.log("patrick".isLengthGreaterThan(3));

Number.prototype.isPositive = function (){
  return this > 0;
}
var a = new Number(3);
console.log(a.isPositive());// this will not error as variable a is an object and looks only like a number.
//console.log(3.isPositive());// this will error as javascript will not convert a number to an object auomatically


Array.prototype.myCustomFeature = 'cool';

var arr = ['John', 'Patrick', 'Demee'];

/*
  it's better to not use for in loop for arrays expecially when you are using
  additional libraries as a custom feture could have been added and that'll
  affect your array. the best option is to use a standard for loop.
*/
//forIn loop
for (var prop in arr){
  console.log(prop + ': '+ arr[prop]);
}

//standard for loop
var length = arr.length;// setting the length before the loop saves memory and is more efficient.
for (var i = 0; i < length; i++){
  console.log(i+': '+arr[i])
}
