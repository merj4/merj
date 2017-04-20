import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import io from 'socket.io-client';
import {orange500, blue500} from 'material-ui/styles/colors';
import {FormGroup, InputGroup, DropdownButton, FormControl, MenuItem} from 'react-bootstrap'


class ChatInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msgArr: []
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  } 
  
  handleInputChange(e) {
  }

  onSubmit(e) {
    e.preventDefault();
    let msgObj = {}
    msgObj.message = e.target.value;
    this.state.msgArr.push(msgObj)
    this.props.receiveMessage(this.state.msgArr)
  }


  render() {
    return (
    <form id="form" onSubmit={this.onSubmit}>
      <FormGroup >
        <InputGroup >
          <FormControl 
          type="text" 
          onChange={this.handleInputChange}
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

