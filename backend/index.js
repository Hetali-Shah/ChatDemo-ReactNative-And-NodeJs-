const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const port = 3000;

let users = [];

const allRooms = [
  {id:'R1', name:'Room 1'},
  {id:'R2', name:'Room 2'},
  {id:'R3', name:'Room 3'},
  {id:'R4', name:'Room 4'},
  {id:'R5', name:'Room 5'}
]

app.get('/', function (req,res) {
  res.sendFile(__dirname + '/index.html')
});

server.listen(port, () => console.log("Server running on port" + port))

io.sockets.on('connection', function (socket) {

  console.log('Connected sockets', socket.id);

  users.push(socket.id)

  // dis connect
  socket.on('disconnect', function () {
    console.log('Disconnected socket', socket.id);
    users.splice(users.indexOf(socket.id), 1)
  });

  //Join current socket to all rooms
  allRooms.map(({id}) => {
    socket.join(id)
  })

  socket.on('send-message', data => {
    io.to(data.roomId).emit(`message-${data.roomId}`, data);
  })

})
