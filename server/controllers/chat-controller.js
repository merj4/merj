var db = require('../db.js');


module.exports = {

  getMessages: function(req, res) {

  },

  postMessage: function(req, res) {
    var params = {
      message: req.body.message
    }
    db.Message.create(params)
    .then(function(message) {
      res.status(201).json(message);
    })
    .catch(function(err) {
      res.status(400).send(err);
    })
  }

}