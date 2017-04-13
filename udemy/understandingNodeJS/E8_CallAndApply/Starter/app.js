var obj = {
    name: 'John Doe',
    greet: function(title){
        title = title || '';
        console.log(`Hello ${title} ${ this.name }`);
    }
}

obj.greet();
obj.greet.call({name: 'Jane Doe'}, 'Ms');
obj.greet.apply({name: 'Jane Doe'},['Ms']);