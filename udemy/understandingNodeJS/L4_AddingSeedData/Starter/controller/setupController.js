var Todos = require('../models/todoModel');

module.exports = function(app){
    //create api endpoint
    app.get('/api/setupTodos', function(req, res){
        //seed database, initial dummy data to be used to populate brand newdatabase
        var starterTodos = [
            {
                username: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Feed dog',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Learn Node',
                isDone: false,
                hasAttachment: false
            }
        ];
        //create data using .create
        Todos.create(starterTodos, function(err, results){
            //output result after data has been entered into the database
            res.send(results);
        });
    });
}