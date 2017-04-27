var db = require('../db.js');


module.exports = {

  getAllUsers: function(req, res) {
    db.User.findAll({})
    .then(function(users) {
      users.map((user) => {
        var userData = user.dataValues;
        return {
          id: userData.id,
          message: userData.message
        };
      });
      res.status(200).json(users);
    });
  },

<<<<<<< HEAD
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
=======
  postUser: function(req, res) {
    var params = {
      username: req.body.username,
      email: req.body.email,
      image: req.body.image
    }
>>>>>>> 34cb01b5fe41c3d900858c5f283aa8ab3a5bec78

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
    console.log('Post Join**: ', req.body);
    db.EventParticipant.findOrCreate({where: {UserId: req.body.UserId, EventId: req.body.EventId}
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
  }
};
