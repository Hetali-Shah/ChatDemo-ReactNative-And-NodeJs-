const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const port = 3000;

users=[];
connections= [];
chatResult= [
  {
    id:1,
    img:'https://avatars3.githubusercontent.com/u/533360?v=3&s=466',
    name:'Hetali Shah',
  },
  {
    id:2,
    img:'https://avatars3.githubusercontent.com/u/533360?v=3&s=466',
    name:'Vixita',
  },
  {
    id:3,
    img:'https://avatars3.githubusercontent.com/u/533360?v=3&s=466',
    name:'Sonika',
  },
  {
    id:4,
    img:'https://avatars3.githubusercontent.com/u/533360?v=3&s=466',
    name:'Hinal',
  },
  {
    id:5,
    img:'https://avatars3.githubusercontent.com/u/533360?v=3&s=466',
    name:'Monika',
  },
  {
    id:6,
    img:'https://avatars3.githubusercontent.com/u/533360?v=3&s=466',
    name:'nirav',
  },
  {
    id:7,
    img:'https://avatars3.githubusercontent.com/u/533360?v=3&s=466',
    name:'Hiren Bhai',
  },
]

server.listen(port, () => console.log("Server running on port" + port))

io.sockets.on('connection', function (socket) {
  connections.push(socket)
  console.log("Connected: %s sockets connected", connections.length)

  //Tell all clients that Someone connected
  io.emit('user joined', socket.id)

  // dis connect
  socket.on('disconnect', function (data) {
    users.splice(users.indexOf(socket.username), 1);
    // updateUserNames();
    connections.splice(connections.indexOf(socket), 1);
    console.log("Disconnected: %s sockets connected", connections.length);
  });

  // socket.on('new user', function (data) {
  //   socket.username = data;
  //   users.push(socket.username);
  //   updateUserNames();
  // });
  //
  // function updateUserNames() {
  //   io.sockets.emit('get users', users);
  // }

  socket.on("send-message", msg => {
    console.log("msg", msg)
    io.emit("send-message", msg);
  })

  io.sockets.in(chatResult[0].id).emit('message', 'what is going on, party people?');


})
