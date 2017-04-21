var db = require('../db.js');


module.exports = {

  getUser: function(req, res) {
    db.User.findOne({
      where: { email: String(req.params.email) }
    })
    .then(function(user) {
      res.status(200).json(user);
    })
  },

  postUser: function(req, res) {
    var params = {
      username: req.body.username,
      email: req.body.email,
      image: req.body.image
    }

    db.User.create(params)
    .then(function(user) {
      res.status(201).json(user);
    })
  }

}