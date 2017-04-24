import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import io from 'socket.io-client';
import {orange500, blue500} from 'material-ui/styles/colors';
import moment from 'moment';
import PhotoIcon from 'material-ui/svg-icons/image/add-a-photo'

const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    fontWeight: "bold",
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
  iconStyle: {
    marginLeft: 24,
  }
};


class ChatInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sent: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTyping = this.handleTyping.bind(this)
  }
  

  handleSubmit(e) {
    const body = e.target.value;
    if (e.keyCode === 13 && body){
      const message = {
        body,
        username: this.props.profile.given_name,
        timestamp: moment((new Date).getTime()).format("MMMM Do YYYY, h:mm:ss a"),
        image: this.props.profile.picture
      }
      this.props.receiveMessage(message);
      e.target.value = ''      
    }
  }

  handleTyping() {
    this.props.socket.emit('typing')
  }

  render() {
    console.log('PhotoIcon =>', PhotoIcon)
    return (
    <div>
    <span>
    <PhotoIcon className="photo-icon" iconStyle={styles.iconStyle} color={orange500} hoverColor={blue500} >
    </PhotoIcon>
    </span>
    <span>
      <TextField
      className="input-chat"
      floatingLabelText="Start Chatting Here"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      fullWidth={true}
      underlineStyle={styles.underlineStyle}
      onKeyUp={this.handleSubmit}
      />
    </span>
    </div>
    )
  }
}

export { ChatInput }

7