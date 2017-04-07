var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var app = express()

var port = process.env.PORT || 8080
app.listen(port)
console.log('listening to port', port)


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '/client')))