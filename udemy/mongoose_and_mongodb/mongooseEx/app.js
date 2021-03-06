var express = require('express');//require node modules bordy-parser
var app = express();//call express
var bodyParser = require('body-parser');//require node modules bordy-parser
var mongoose = require('mongoose');//require mongoose
var Book = require('./Book.model');//require file module
var port=8080;

//datasource
var db = 'mongodb://localhost:27017/example';
mongoose.connect(db);
//allows us to parse json elements
app.use(bodyParser.json());
//allows us to parse params
app.use(bodyParser.urlencoded({
  extended: true
}));

//route works
app.get('/', function(req, res){
  res.send('happy to be here!');
})

//get all books
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

//get one book
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

app.post('/book', function(req, res){
  var newBook = new Book();

  newBook.title = req.body.title;
  newBook.author = req.body.author;
  newBook.category = req.body.category;

  newBook.save(function(err, book){
    if(err){
      res.send('error saving book');
    }else{
      console.log(book);
      res.send(book);
    }
  });
});

app.post('/book2', function(req, res){
  Book.create(req.body, function(err, book){
    if(err){
      res.send('error saving book');
    }else{
      console.log(book);
      res.send(book);
    }
  });
});


app.put('/book/:id', function(req, res){
  Book.findOneAndUpdate({
    _id:req.params.id //query
  },
  {$set: {title: req.body.title}},
  {upsert: true}, function(err, newBook){
    if(err){
      console.log('error occured');
    }else{
      console.log(newBook);
      res.send(newBook);
    }
  });
});

app.delete('/book/:id', function(req, res){
  Book.findOneAndRemove({
    _id:req.params.id //query
  },function(err, book){
    if(err){
      res.send('error delete');
    }else{
      console.log(book);
      res.status(204);
    }
  });
});
app.listen(port, function(){
  console.log('app listening on port: '+ port);
});
