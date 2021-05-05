const cors = require('cors');
const { Server } = require('mongodb');

var io = require('socket.io')(4200);
var name;

const sIo = io(server, {
    cors:{
        origin: 'https://localhost:4200',
        methods: ['GET', 'POST'],
        allowHeaders: ['Authorization'],
        credentials: true
    }
});

sIo.on('connection', socket => {
  console.log('new user connected');
  
  socket.on('joining msg', (username) => {
  	name = username;
  	io.emit('chat message', `---${name} joined the chat---`);
  });
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
    io.emit('chat message', `---${name} left the chat---`);
    
  });
  socket.on('chat message', (msg) => {
    socket.broadcast.emit('chat message', msg);         //sending message to all except the sender
  });
});
