import React, { Component } from 'react';
import { UsersContainer } from './chat-users-container'
import { ChatInput } from './chat-input'
import { ChatContainer } from './chat-container'
import { EventDetails } from './eventDetails'
import io from 'socket.io-client'
import axios from 'axios'

const server = location.origin
const socket = io(server)

class EventView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      room: this.props.activeEvent.title,
      users: []
    }
    this.receiveMessage = this.receiveMessage.bind(this);
  }
  
  componentDidMount() { 
    const room = this.state.room;
    const user = this.props.profile.given_name
    const image = this.props.profile.picture
    socket.emit('room enter', {
      roomname: room,
      username: user,
      image: image
    });

    socket.on('room enter', data => {
      const chatUsers = this.state.users;
      chatUsers.push(data)
      this.setState({
        users: chatUsers
      })
    })

    socket.on('message', message => {
    this.setState
      ({messages: [message, ...this.state.messages]})
    })
  }

  onRoomEnter() {
    
  }

  receiveMessage(message) {
    this.setState({
      messages: [message, ...this.state.messages],
    })
    
    socket.emit('message', message)
    

    //save each message to database
    axios.post('/api/chat', {
      message: JSON.stringify(message)
    }).then(res => {
      console.log("Message posted successfully")
    }).catch(err => {
      console.log("Message failed to post")
    })

    console.log(
  'These are your chat users: ', this.state.users,
  'This is your user: ', message.username

    )
  }


  render() {

    return (
      <div id="chat">
       <div id='chatsidebar'>
          <div><EventDetails 
          activeEvent={this.props.activeEvent}/></div>
          <div><UsersContainer
          users={this.state.users}/></div>
        </div>
        <div id='chatroom'>
          <ChatContainer 
          messages={this.state.messages}
          socket={socket}/>
        </div>
        <ChatInput socket={socket}
          receiveMessage={this.receiveMessage.bind(this)}
          profile={this.props.profile} />
      </div>
    );
  }
}


export { EventView }