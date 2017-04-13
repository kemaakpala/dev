function greet(callback){
    console.log('Hello');
    var data = {
        name: 'John Doe'
    }
    callback(data);
}

greet(function(data){
    console.log('The call back was invoked!');
    console.log(data);
});

greet(function(data){
    console.log('A different call back was invoked!');
    console.log(data.name);
});
