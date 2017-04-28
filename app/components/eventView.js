import React, { Component } from 'react';
import { UsersContainer } from './chat-users-container'
import { ChatInput } from './chat-input'
import { ChatContainer } from './chat-container'
import { EventDetails } from './eventDetails'
import SidePanel from './chat-sidepanel'
import io from 'socket.io-client'
import axios from 'axios'

//Socket.io
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
      image: image,
      socketId: socket.id
    });
    //Weather API
    // axios.get("http://api.openweathermap.org/data/2.5/forecast?zip=93012,us&APPID=b9c8ef9079c51c6316735dea6bd96e41")
    // .then(res => {console.log('Weather', res)})
    // .catch(err => {test('Failed to get weather', err)})



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


  receiveMessage(message) {
    this.setState({
      messages: [message, ...this.state.messages],
    })
    socket.emit('message', message)
  }

  saveToDatabase(message) {
    axios.post('/api/chat', {
      message: JSON.stringify(message)
    }).then(res => {
      console.log("Message posted successfully")
    }).catch(err => {
      console.log("Message failed to post")
    })

    console.log('Message', message)
  }


  render() {

    return (
      <div id="chat">
      <ChatContainer 
          messages={this.state.messages}
          socket={socket}/>
          <EventDetails 
          activeEvent={this.props.activeEvent} />
          <div>
          <UsersContainer
          users={this.state.users}/></div>
        <ChatInput socket={socket}
          saveToDatabase={this.saveToDatabase.bind(this)}
          receiveMessage={this.receiveMessage.bind(this)}
          profile={this.props.profile} />
        <SidePanel />
    </div>
    );
  }
}


export { EventView }