var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var app = express()

var db = require('./server/db')

var port = process.env.PORT || 8080
app.listen(port)
console.log('listening to portato', port)


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '/public')))

app.get('/', function(req, res) {
  console.log(db.User)
    db.User.findAll({})
      .then(function(data) {
        console.log('inside findAll', data);
        res.status(200).json(data);
      });
})