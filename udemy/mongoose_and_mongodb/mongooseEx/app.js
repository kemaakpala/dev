var express = require('express');//require node modules bordy-parser
var app = express();//require node modules bordy-parser
var bodyParser = require('body-parser');//require node modules bordy-parser
var mongoose = require('mongoose');//require mongoose
var Book = require('./Book.model');//require file module
var port=8080;

var db = 'mongodb://localhost:27017/example';
mongoose.connect(db);

app.get('/', function(req, res){
  res.send('happy to be here!');
})

app.get('/books', function(req, res){
  console.log('getting all books');
  Book.find({})
  .exec(function(err, books){
    if(err){
      res.send('error has occured!!');
    }else{
      console.log(books);
      res.json(books);
    }
  });
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get('/books/:id', function (req, res){
  console.log('getting one book');
  Book.findOne({
    _id: req.params.id
  }).exec(function(err, book){
    if(err){
      res.send('error has occured');
    }else{
      console.log(book);
      res.json(book);
    }
  });
});

app.listen(port, function(){
  console.log('app listening on port: '+ port);
});
