var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var db = require('./server/db')
var morgan = require('morgan');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);


server.listen(8080, function() {
  console.log('listening on portato 8080')
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/app/dist');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
//MIDDLEWARE
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '/app/dist')))
require('./server/routes')(app, express);

//PORT
// var port = process.env.PORT || 8080
// app.listen(port)
// console.log('listening to portato', port)


module.exports = {
  app: app,
}

// var express = require('express')
// var bodyParser = require('body-parser')
// var path = require('path')
// var app = express()
// var db = require('./server/db')
// var morgan = require('morgan');


// //PORT
// var port = process.env.PORT || 8080
// app.listen(port)
// console.log('listening to portato', port)

// //MIDDLEWARE
// app.use(morgan('dev'));
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(express.static(path.join(__dirname, '/app/dist')))
// require('./server/routes')(app, express);

// module.exports = {
//   app: app
// }