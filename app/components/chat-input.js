import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import io from 'socket.io-client';
import {orange500, blue500} from 'material-ui/styles/colors';

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

};


class ChatInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sent: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  

  handleSubmit(e) {
    const body = e.target.value;
    if (e.keyCode === 13 && body){
      const message = {
        body,
        from: 'Me'
      }
      this.props.receiveMessage(message);
      e.target.value = ''      
    }
  }


  render() {
    return (
    <div>

      <TextField
      className="input-chat"
      floatingLabelText="Start Chatting Here"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      fullWidth={true}
      onChange={this.handleInputChange}
      underlineStyle={styles.underlineStyle}
      onKeyUp={this.handleSubmit}
      />

    </div>
    )
  }
}

export { ChatInput }

