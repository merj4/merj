var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = {
  user: 'teammerj',
  database: 'merjDB',
  password: 'teammerjgirls',
  host: 'teammerj.ccfvuax37sga.us-west-2.rds.amazonaws.com:5432',
  port: 5432
};
var db = pgp(connectionString);

// add query functions

module.exports = {
//something: something
};