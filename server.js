var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var app = express()
<<<<<<< 8741c1f29e50c288537c842b41363442e0a80998
<<<<<<< 2f13757a4649ca61de837fb540befaa21ca6f63c
<<<<<<< 4236a1bbc4fa801ff018445b09fac4ba9b3c5140
=======
<<<<<<< 9fb36c029913474019c88ce274a2eb13c795d4ab
>>>>>>> changes
=======
>>>>>>> added env variables and db connection url
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
<<<<<<< 8741c1f29e50c288537c842b41363442e0a80998
<<<<<<< 2f13757a4649ca61de837fb540befaa21ca6f63c
<<<<<<< 4236a1bbc4fa801ff018445b09fac4ba9b3c5140
=======
<<<<<<< 9fb36c029913474019c88ce274a2eb13c795d4ab
>>>>>>> changes
=======
>>>>>>> added env variables and db connection url
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