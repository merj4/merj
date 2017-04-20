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
      message: null
    }
    this.receiveMessage = this.receiveMessage.bind(this);
  }
  

  receiveMessage(message) {
    this.setState({
      message: message
    })
  }

  render() {
    return (
      <div id="chat">
       <div id='chatsidebar'>
          <div><EventDetails activeEvent={this.props.activeEvent}/></div>
          <div><ChatUsers /></div>
        </div>
        <div id='chatroom'>
          <ChatContainer message={this.state.message}/>
        </div>
        <ChatInput socket={socket}
          receiveMessage={this.receiveMessage.bind(this)} />
      </div>
    );
  }
}
  


export { EventView }