const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const port = 3000;

users=[];
connections= [];

// io.on("connection", socket => {
//   console.log("User Connected");
//   socket.on("chat message", msg => {
//     console.log(msg)
//     io.emit("chat message", msg);
//   })
// })
//
server.listen(port, () => console.log("Server running on port" + port))

io.sockets.on('connection', function (socket) {
  connections.push(socket)
  console.log("Connected: %s sockets connected", connections.length)

  // dis connect
  socket.on('disconnect', function (data) {
    users.splice(users.indexOf(socket.username), 1);
    updateUserNames();
    connections.splice(connections.indexOf(socket), 1);
    console.log("Disconnected: %s sockets connected", connections.length);
  });

  socket.on('new user', function (data) {
    socket.username = data;
    users.push(socket.username);
    updateUserNames();
  });

  function updateUserNames() {
    console.log("users--------", users)
    io.sockets.emit('get users', users);
  }

  socket.on("chat message", msg => {
   console.log(msg)
    io.emit("chat message", msg);
  })
})
