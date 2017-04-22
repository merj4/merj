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
      messages: [],
      isTyping: '',
      messageTime: null
    }
    this.receiveMessage = this.receiveMessage.bind(this);
    this.handleTyping = this.handleTyping.bind(this)
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
    console.log('message contents =>', message)
    this.setState({
      messages: [message, ...this.state.messages],
    })
    socket.emit('message', message)
  }

  handleTyping() {
   socket.on('typing', data => {
      this.setState({isTyping: data.message})
    })

    const lastTyped = (new Date()).getTime()

    setTimeout(() => {
      const typingTimer = (new Date()).getTime()
      const timeDiff = typingTimer - lastTyped
      if (timeDiff >= 100000 && this.state.isTyping) {
        socket.emit('stop typing')
        this.setState({isTyping: ''})
      }
    }, 100000)

    socket.on('stop typing', () => {
       this.setState({isTyping: ''})
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
          <ChatContainer 
          messages={this.state.messages}
          socket={socket}
          typing={this.state.isTyping}/>
        </div>
        <ChatInput socket={socket}
          receiveMessage={this.receiveMessage.bind(this)}
          profile={this.props.profile} />
      </div>
    );
  }
}


export { EventView }