"use strict";

var path = require('path');

var express = require('express');

var PORT = process.env.HTTP_PORT || 8080;
var app = express();
app.use(express["static"](path.join(__dirname, 'client', 'build')));
app.get('/', function (req, res) {
  res.send('lets fuckin send it brah');
});
app.get('/flower', function (req, res) {
  res.json({
    name: 'Dandelion',
    color: 'kinda blue'
  });
});
app.listen(PORT, function () {
  console.log('Server is listening at port ${PORT}.');
});
