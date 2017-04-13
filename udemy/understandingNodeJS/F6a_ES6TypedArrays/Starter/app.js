var buffer = new ArrayBuffer(8);
var view = new Int32Array(buffer); //this will only store 2 characters
view[0] = 5;//stored
view[1] = 15;//stored
view[2] = 30;//not stored but does not error
console.log(view);
