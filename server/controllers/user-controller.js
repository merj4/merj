var db = require('../db.js');


module.exports = {

  getUser: function(req, res) {
    console.log('GET USER REQ**: ', req.body);
    db.User.findAll({
      where: { email: req.body.email }
    })
    .then(function(user) {
      console.log('User Get req:', user);
      // return {
      //   id: user
      // };
      res.status(200).json(user);
    });
  },

  postUser: function(req, res) {
    db.User.findOrCreate({where: {email: req.body.email},
      defaults: {username: req.body.username, image: req.body.image}
    })
    .spread(function(user, created) {
      console.log(user.get({
        plain: true
      }));
      console.log(created);
    })
    .then(function(user) {
      res.status(201).json(user);
    });
  },

  postJoinEvent: function(req, res) {
    db.EventParticipant.findOrCreate({where:
      {EventId: req.body.EventId},
      include: [{UserId: req.body.UserId}]
    })
    .spread(function(user, created) {
      console.log(user.get({
        plain: true
      }));
      console.log(created);
    }).then(function(user) {
      res.status(201).json(user);
    });
  }
};
