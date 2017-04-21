var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config =  require('./config');
var setupController = require('./controllers/setupController');

//definging default port
var port = process.env.Port || 3000;

app.use('/assets', express.static(__dirname + '/public'));

//serverside templating
app.set('view engine', 'ejs');
//connecting to mongoose via config string
mongoose.connect(config.getDbConnectionString());
setupController(app);

//listening to port 3000
app.listen(port);