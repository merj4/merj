var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var app = express()
var db = require('./server/db')

//PORT
var db = require('./server/db')

var port = process.env.PORT || 8080
app.listen(port)
console.log('listening to portato', port)

//MIDDLEWARE
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '/public')))
require('./server/routes')(app, express)

//For testing purposes only
var user = {
  username: 'alfalfa',
  email: 'email@email.com'
}
app.post('/', function(req, res) {
  var params = {
    username: req.body.username,
    email: req.body.email
  }
  db.User.create(params)
  .then(function(data) {
    res.status(201).send('Server post is working!')
  })
})

app.get('/api/user', function(req, res) {
  db.User.findAll({})
  .then(function(data) {
    console.log(data)
  })
})

// app.get('/', function(req, res) {
//   console.log(db.User)
//     db.User.findAll({})
//       .then(function(data) {
//         console.log('inside findAll', data);
//         res.status(200).json(data);
//       });
// })
module.exports = {
  app: app
}

