var Sequelize = require('sequelize')

//intialize sequelize with postgres remote url
if (process.env.DATABASE_URL) {
  var db = new Sequelize(process.env.DATABASE_URL, {dialect:'postgres', logging: false});
} else {
  var db = new Sequelize('merj', process.env.POSTGRES_USER, '', {dialect:'postgres', logging: false});
}

//create User table
// var User = db.define('User', {
//   username: Sequelize.STRING,
//   email: Sequelize.STRING
// })

// var Event = db.define('Event', {
  
// })
