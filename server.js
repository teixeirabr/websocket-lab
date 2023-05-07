const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  

io.on('connection', function (socket) {
  socket.on('message', function (message) {
    io.emit('message', message);
  });
});

server.listen(5000, function () {
  console.log('Server is running on port 5000');
});


