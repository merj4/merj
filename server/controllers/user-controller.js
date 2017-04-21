var db = require('../db.js');


module.exports = {

  getUser: function(req, res) {
    console.log('GET USER REQ: ', req);
    db.User.findOne({
      where: { email: String(req.params.email) }
    })
    .then(function(user) {
      res.status(200).json(user);
    });
  },

  postUser: function(req, res) {
    db.User.findOrCreate({where: {email: req.body.email},
      defaults: {username: req.body.username, image: req.body.image}
    }).spread(function(user, created) {
      console.log(user.get({
        plain: true
      }));
      console.log(created);
    }).then(function(user) {
      res.status(201).json(user);
    });
    // var params = {
    //   username: req.body.username,
    //   email: req.body.email,
    //   image: req.body.image
    // }

    // db.User.create(params)
    // .then(function(user) {
    //   res.status(201).json(user);
    // })
  }
};
