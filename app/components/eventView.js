import React from 'react';
import { ChatUsers } from './chat-users'
<<<<<<< HEAD
import { ChatInput } from './chat-input'
import { ChatContainer } from './chat-container'
import { EventDetails } from './chat-eventDetails'

const EventView = (props) => {
  return (
    <div>
      <ChatUsers />
      <EventDetails events={props.events}/>
      <ChatContainer />
      <ChatInput />
    </div>
  )
};
=======
import { ChatContainer } from './chat-container'
import { EventDetails } from './eventDetails'


const EventView = () => (
  <div>
    <ChatUsers />
    <ChatContainer />
    <EventDetails />
  </div>
);
>>>>>>> 058eb3a


export { EventView }