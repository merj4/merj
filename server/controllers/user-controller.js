var db = require('../db.js');


module.exports = {

  getAllUsers: function(req, res) {
    db.User.findAll({})
    .then(function(users) {
      users.map((user) => {
      var userData = user.dataValues;
        return {
          id: userData.id,
          message:userData.message
        }
      })
      res.status(200).json(users);
    });
  },

  // getUser: function(req, res) {
  //   db.User.findOne({
  //     include: [
  //       {model: db.User},
  //       {model: db.Events},
  //     ],
  //     where: { id: Number(req.params.id) }
  //   })
  //   .then(function(user) {
  //     var userData = user.dataValues;
  //     return {
  //       id: userData.id,
  //       message:userData.message
  //     }
  //     res.status(200).json(user);
  //   });
  // },

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
