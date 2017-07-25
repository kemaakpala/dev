var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

//create the application
var app = express();


//Add Middleware necessary for REST API's
//visit link for overview on CORS: https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

//CORS: Cross Origin Resource Sharing Support
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');// allows access of rest api to any server
    res.header('Allow-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Allow-Control-Allow-Headers', 'Content-Type');
    next();
})


//connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/meanapp');
mongoose.connection.once('open', function () {
    //Load the models.
    app.models = require('./models/index');

    //Load the routes.
    var routes = require('./routes');
    _.each(routes, function(controller, route) {
        app.use(route, controller(app, route));
    });

    console.log('Listening on port 3000 ...');
    app.listen(3000);
});
