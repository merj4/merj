var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var app = express()
var db = require('./server/db')
var morgan = require('morgan');
//SOCKET requires
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io')(server);

//PORT
var port = process.env.PORT || 8080
app.listen(port)
console.log('listening to portato', port)
// SOCKET
io.on('connection', (socket) => {
  socket.on('message', (message) => {
    io.emit('message', message);
  })
})

io.on('disconnect', () => {
  console.log('A user disconnected');
})

//MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '/app/dist')))
require('./server/routes')(app, express);


module.exports = {
  app: app
}