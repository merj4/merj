var eventsController = require('./controllers/events-controller.js');
var userController = require('./controllers/user-controller.js');
var chatController = require('./controllers/chat-controller.js');


module.exports = function(app, express) {
  
  //get all events
  app.get('/api/events', eventsController.getAllEvents);
  //get the most recent events
  app.get('/api/events', eventsController.getMostRecent);
  //get events by location 
  // app.get('/api/events', eventsController.getByLocation);
  //get single event page 
  app.get('/api/event/:id', eventsController.getEvent);
  //create event
  app.post('/api/event', eventsController.postEvent);
  //get user's public profile
  app.get('/api/user/:id', userController.getUser);
  // //create user profile
  app.post('/api/user', userController.postUser);
  // //get all messages for chatroom
  // app.get('/api/chat', chatController.getMessages);
  // //send a message
  app.post('/api/chat', chatController.postMessage);


}