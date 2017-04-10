// var Sequelize = require('sequelize')

// //intialize sequelize with postgres remote url
// var sequelize = new Sequelize('postgres://teammerj:teammerjgirls@teammerj.ccfvuax37sga.us-west-2.rds.amazonaws.com:5432/merjDB');

// sequelize
//   .authenticate()
//   .then(function(err) {
//     console.log('Connection has been established successfully');
//   })
//   .catch(function (err) {
//     console.log('Unable to connect to the database', err);
//   })

// var User = sequelize.define('user', {
//   firstName: {
//     type: Sequelize.STRING
//   },
//   lastName: {
//     type: Sequelize.STRING
//   }
// });

// // force: true will drop the table if it already exists
// User.sync({force: true}).then(function () {
//   // Table created
//   return User.create({
//     firstName: 'John',
//     lastName: 'Hancock'
//   });
// });

// User.findAll().then(function(users) {
//   console.log(users)
// })

// module.exports = {
//   User: User,
// }

// //create User table
// // var User = db.define('User', {
// //   username: Sequelize.STRING,
// //   email: Sequelize.STRING
// // })

// // var Event = db.define('Event', {

// // })
