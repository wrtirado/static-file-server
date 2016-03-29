// Requires \\
var fs = require('fs')
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

//1 - We're going to redo PART II using fs.readFile and callbacks. This blocking code: var fileContents = fs.readFileSync('data.txt'); changes to this asynchronous code: fs.readFile('data.txt', function(err, data){ // do something with data here });

//2 - Move res.header(...) and res.send(...) into the fs.readFile callback so that they are executed after the file is read.

//3 - Restart your node server and request the localhost url again. You should see the same result as in PART II!


// Create Express App Object \\
var app = express();

// read data.txt
// Application Configuration \\
// appluse gets called on EVERY request \\

app.use(logger('dev')); //<--
app.use(bodyParser.json()); // <-- Looks for stringified JSON data and automatically parses it into an object
app.use(bodyParser.urlencoded({ extended: true })); // <--  Body parser is a module that helps us deal with data, mostly concerned with RECIVING data
app.use(express.static(__dirname + '/public')); // <-- Used to serve CLIENT SIDE files (html, css, js, img)
// Routes \\
// Index/Home route => '/' \\
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
