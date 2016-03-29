// Requires \\
var fs = require('fs')
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');


// Create Express App Object \\
var app = express();

// read data.txt
// Application Configuration \\
// app.use gets called on EVERY request \\

app.use(logger('dev')); //<--
app.use(bodyParser.json()); // <-- Looks for stringified JSON data and automatically parses it into an object
app.use(bodyParser.urlencoded({ extended: true })); // <--  Body parser is a module that helps us deal with data, mostly concerned with RECIVING data
app.use(express.static(__dirname + '/public')); // <-- Used to serve CLIENT SIDE files (html, css, js, img)
// Routes \\
// Index/Home route => '/' \\

// app.get that runs asyncronously from the rest of file, so that the rest of the file doesn't have to wait on it to finish running.
app.get('/', function(req, res){
  fs.readFile('./data.txt', function(err, data){
    res.header('Content-Type', 'text/html')
    if(err) throw err
    res.send(data)
  })
});

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})
