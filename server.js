var express = require('express');
var morgan = require('morgan');
var path = require('path');
var counter=0;

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  counter=counter+1;
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/counter', function (req, res) {
  res.send(counter.toString());
});

app.get('/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
