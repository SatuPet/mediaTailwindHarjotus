const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/chat.html');
});

// io.on('connection', (socket) => {
//     console.log('a user connected');
//     socket.on('disconnect', () => {
//       console.log('user disconnected');
//     });
//   });

  io.on('connection', (socket) => {

    socket.on('join room', (room) => {
        socket.join(room);
    });

    socket.on('leave room', (room) => {
        socket.leave(room);
    });

    socket.on('chat message', (msg) => {
        let parsedMessage = JSON.parse(msg);
        io.to(parsedMessage.room).emit('chat message', msg);
    });
  });

server.listen(3000, () => {
  console.log('listening on *:3000');
});

io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets


