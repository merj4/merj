import React from 'react';
import { ChatUsers } from './chat-users'
import { ChatContainer } from './chat-container'
import { EventDetails } from './eventDetails'


const EventView = (props) => (
  <div>
    <ChatUsers />
    <ChatContainer event={props.event}/>
    <EventDetails />
  </div>
);


export { EventView }