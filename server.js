var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var app = express()
var db = require('./server/db')
var morgan = require('morgan');


//PORT
var port = process.env.PORT || 8080
app.listen(port)
console.log('listening to portato', port)

//MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '/app/dist')))
require('./server/routes')(app, express);

module.exports = {
  app: app
}