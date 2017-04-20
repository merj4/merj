import React, { Component } from 'react';
import { ChatUsers } from './chat-users'
import { ChatInput } from './chat-input'
import { ChatContainer } from './chat-container'
import { EventDetails } from './eventDetails'

// const server = location.origin;
// const socket = io(server);

class EventView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [];
    }
    this.receiveMessage = this.receiveMessage.bind(this);
  }
  
  receiveMessage(msgArr) {
    this.setState({
      messages: msgArr
    })
  }

  render() {
    return (
      <div>
        <ChatUsers />
        <ChatContainer message={this.state.messages}/>
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