var db = require('../db.js');


module.exports = {

  getMessages: function(req, res) {
    db.Message.findAll({
    limit: 50,
    order: '"createdAt" DESC'
    })
    .then(function(messages) {
      messages = messages.map(function(message) {
        var messageData = message.dataValues;
        return {
          message: messageData.message
        }
      });
      res.status(200).json(messages);
    })
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