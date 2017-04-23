var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var db = require('./server/db')
var morgan = require('morgan');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//chatroom
server.listen(8080, function() {
  console.log('listening on portato 8080')
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/app/dist');
});

io.on('connection', socket => {
  console.log('User', socket.id, 'just connected')
  
  socket.on('room enter', room => {
    console.log('Client just connected to room ' + room)
    socket.join(room)
 
    socket.on('message', msg => {
      socket.in(room).broadcast.emit('message', msg);
    })
  })

  socket.on('login', username => {
    socket.username = username;
  })
});

//MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '/app/dist')))
require('./server/routes')(app, express);


module.exports = {
  app: app,
}