var express = require('express');
var cors = require('cors');
var fs = require('fs');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var MongoClient = mongodb.MongoClient;
var mongoUrl = "mongodb://localhost:27017/thesequence"

/*welcome page*/
app.get('/', function(request,response) {
  response.json({'description':'sequence API'});
});

/* list all movies*/
app.get('/movies', function(request,response) {
  MongoClient.connect(mongoUrl, function (err,db){
    var moviesCollection = db.collection('movies');
    if (err) {
      console.log('Unable to connect to mongodb', err);
    } else {
      moviesCollection.find().toArray(function(err,result) {
        if (err) {
          console.log('Error', err);
          response.json('error');
          response.json('error');
        } else if (result.length) {
          console.log('no docs found with "find" ');
          response.json(result)
        } db.close(function() {

        });
      });
    }
  });
});

/*add user(movie)*/
app.post('movies/add', function (request, response){
  console.log('request.body', request.body);

  MongoClient.connect(mongoUrl, function(err,db) {
    var moviesCollection = db.collection('movies');
    if (err) {
      console.log('Unable to connect to mongodb', err);
    } else {
      console.log('Connection', mongoUrl);
      console.log('Adding new user...');

      var newUser = request.body;
      moviesCollection.insert([newUser], function(err,result) {
        if (err) {
          console.log(err);
          response.json('error');
        } else {
          console.log('Inserted');
          console.log('Result', result);
          console.log('final result');
        }
        db.close(function(){
          console.log('database Closed');
        });
      });
    }
  });
});


app.listen(3000, function () {
  console.log('listening on "port" 3000');
});
