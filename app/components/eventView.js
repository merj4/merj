import React, { Component } from 'react';
import { ChatUsers } from './chat-users'
import { ChatInput } from './chat-input'
import { ChatContainer } from './chat-container'
import { EventDetails } from './eventDetails'
import io from 'socket.io-client'

const server = location.origin;
const socket = io(server);
socket.on('message', function() {
  console.log('You\'ve received a message!')
})
class EventView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
    this.receiveMessage = this.receiveMessage.bind(this);
  }
  
  receiveMessage(msg) {
    this.state.messages.push(msg)
    console.log('This is line 21', this.state.messages)
  }

  render() {
    return (
      <div>
        <ChatUsers />
        <ChatContainer messages={this.state.messages}/>
        <EventDetails />
        <ChatInput 
        // socket={socket}
        receiveMessage={this.receiveMessage.bind(this)}
        />
      </div>
    );
  }
}
  


export { EventView }