// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Use public folder for static files
app.use(express.static('public'));
app.use(bodyParser.json());

// Read comments file
app.get('/comments.json', function(req, res) {
  fs.readFile('comments.json', 'utf8', function(err, data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

// Write comments file
app.post('/comments.json', function(req, res) {
  fs.writeFile('comments.json', JSON.stringify(req.body, null, 4), function(err) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(req.body, null, 4));
  });
});

// Start server
app.listen(3000, function() {
  console.log('Server started: http://localhost:3000/');
});