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
    name: 'This is still the landing page im just testing things.',
    color: 'Working title, I have no fucking idea what to call this still.'
  });
});
app.listen(PORT, function () {
  console.log("Server is listening at port ".concat(PORT, "."));
});

var http = require('http');

var socketIo = require('socket.io');

var ioPort = 4001;
var ioApp = express();

var index = require('./routes/index');

ioApp.use(index);
var server = http.createServer(ioApp);
var io = socketIo(server);
var interval;
io.on('connection', function (socket) {
  console.log('New client connected');

  if (interval) {
    clearInterval(interval);
  }

  interval = setInterval(function () {
    return getApiAndEmit(socket);
  }, 1000);
  socket.on('disconnect', function () {
    console.log('Client disconnected');
    clearInterval(interval);
  });
});

var getApiAndEmit = function getApiAndEmit(socket) {
  var responce = new Date();
  socket.emit("FromAPI", responce);
};

server.listen(ioPort, function () {
  console.log("IO Server is listening at port ".concat(ioPort, "."));
});
