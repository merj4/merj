import React from 'react';
import { ChatUsers } from './chat-users'
import { ChatInput } from './chat-input'
import { ChatContainer } from './chat-container'
import { EventDetails } from './chat-eventDetails'

const EventView = (props) => (
  <div>
    <ChatUsers />
    <EventDetails events={props.events}/>
    <ChatContainer />
    <ChatInput />
  </div>
);


export { EventView }