import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import io from 'socket.io-client';
import {orange500, blue500} from 'material-ui/styles/colors';
import {FormGroup, InputGroup, DropdownButton, FormControl, MenuItem} from 'react-bootstrap'


class ChatInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentMsg: null
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  } 
  
  handleInputChange(e) {
    this.setState({
    currentMsg: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    // this.props.socket.emit('chat message')
    // this.props.socket.on('chat message', function(msg){
    //   console.log(msg)
    // });
    this.props.receiveMessage(msg)

  }


  render() {
    return (
    <form id="form" onSubmit={this.onSubmit}>
      <FormGroup onSubmit={this.onSubmit}>
        <InputGroup onSubmit={this.onSubmit}>
          <FormControl 
          type="text" 
          onChange={this.handleInputChange}
          onSubmit={this.onSubmit}
          />
          <DropdownButton
            componentClass={InputGroup.Button}
            id="input-dropdown-addon"
            title="Action"
            
          >
            <MenuItem key="1">Item</MenuItem>
          </DropdownButton>
        </InputGroup>
      </FormGroup>

    </form>
    )
  }
}

export { ChatInput }

