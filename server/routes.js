var eventsController = require('./controllers/events-controller.js');
var userController = require('./controllers/user-controller.js');
var chatController = require('./controllers/chat-controller.js');


module.exports = function(app, express) {

  //serve up most recent on home page
  app.get('/', eventsController.getAllEvents);
  //get all events
  app.get('/api/events', eventsController.getAllEvents);
  //get the most recent events
  app.get('/api/events/recent', eventsController.getMostRecent);
  //get events by location
  // app.get('/api/events', eventsController.getByLocation);
  //get single event page
  app.get('/api/event/:id', eventsController.getEvent);
  //get single event page
  app.get('/api/userevents/:UserId', eventsController.getUserEvents);
  //create event
  app.post('/api/event', eventsController.postEvent);
  //get all users' public profile
  app.get('/api/users', userController.getAllUsers);
  // //create user profile
  app.post('/api/user/', userController.postUser);
  // //get all messages for chatroom
  // app.get('/api/chat', chatController.getMessages);
  // //send a message
  app.post('/api/chat', chatController.postMessage);
  //post to EventParticipant when user joins event
  app.post('/api/joinevent', userController.postJoinEvent);
}