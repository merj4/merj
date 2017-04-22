import React, { Component } from 'react';
import { ChatUsers } from './chat-users'
import { ChatInput } from './chat-input'
import { ChatContainer } from './chat-container'
import { EventDetails } from './eventDetails'
import io from 'socket.io-client'

const server = location.origin
const socket = io(server)

class EventView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
    this.receiveMessage = this.receiveMessage.bind(this);
  }
  
  componentDidMount() { 
    socket.on('message', message => {
    this.setState
      ({messages: [message, ...this.state.messages]})
    })
    const user = this.props.profile.given_name
    socket.emit('login', {user})
  }


  receiveMessage(message) {
    this.setState({messages: [message, ...this.state.messages]})
    socket.emit('message', message)
  }



  render() {
    return (
      <div id="chat">
       <div id='chatsidebar'>
          <div><EventDetails activeEvent={this.props.activeEvent}/></div>
          <div><ChatUsers /></div>
        </div>
        <div id='chatroom'>
          <ChatContainer 
          messages={this.state.messages}
          socket={socket}
          profile={this.props.profile}/>
        </div>
        <ChatInput socket={socket}
          receiveMessage={this.receiveMessage.bind(this)} />
      </div>
    );
  }
}


export { EventView }