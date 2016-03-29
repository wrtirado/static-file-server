// Requires \\
var fs = require('fs')
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

//1 - X Add data.txt file to your directory. Insert some arbitrary text to the file. X

//2 - X Include the File System core module by adding var fs = require('fs'); at the very top of the file. This provides file operations like read/write. X

//3 - X Read the documentation for fs.readFileSync. Read the data.txt file with var fileContents = fs.readFileSync('data.txt');. X

//4 - Add res.header('Content-Type', 'text/html'); to add the HTTP response header that specifies the type of content we're sending to the browser.

//5 - Use res.send to send the fileContents back to the user.

//6 - Restart your node server and refresh your browser. You should now see the contents of your text file written out to the page!



// Create Express App Object \\
var app = express();

// read data.txt
var fileContents = fs.readFileSync('./data.txt')
// Application Configuration \\
// appluse gets called on EVERY request \\

app.use(logger('dev')); //<--
app.use(bodyParser.json()); // <-- Looks for stringified JSON data and automatically parses it into an object
app.use(bodyParser.urlencoded({ extended: true })); // <--  Body parser is a module that helps us deal with data, mostly concerned with RECIVING data
app.use(express.static(__dirname + '/public')); // <-- Used to serve CLIENT SIDE files (html, css, js, img)
// Routes \\
// Index/Home route => '/' \\
app.get('/', function(req, res){
  res.header('Content-Type', 'text/html')
  res.send(fileContents)
});

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})
