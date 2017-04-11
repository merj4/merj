import React, {Component} from 'react';   
import { Button, Modal, Form, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';     


class eventCreationModal extends Component {
  constructor(props) {
    this.state = {
      eventName: '',
      location: '',
      date: '',
      time: '',
      description: '',
      eventUrl: '',
      category: ''
    }
  }
}
        <Modal  
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <form>
              <FieldGroup
                name="eventName"
                id="eventname"
                type="text"
                label="Event name"
                placeholder="Event Name"
              />
              <FieldGroup
                name="location"
                id="location"
                type="text"
                label="Location"
                placeholder="Place/Address"
              />

              <FormGroup controlId="date" >
                <ControlLabel>Date</ControlLabel>
                {' '}
                <FormControl 
                name="date" 
                type="text" 
                placeholder="Date" />
              </FormGroup>
                {' '}
              <FormGroup controlId="time">
                <ControlLabel>Time</ControlLabel>
                {' '}
                <FormControl 
                name="time" 
                type="time" 
                placeholder="time" />
              </FormGroup>


              <FieldGroup
                id="host"
                label="host"
                type="text"
              />

              <FormGroup controlId="description">
                <ControlLabel>Description</ControlLabel>
                <FormControl 
                name="description"
                componentClass="textarea" 
                placeholder="Description" />
              </FormGroup>

              <FieldGroup
                name="eventUrl"
                id="eventpicture"
                type="file"
                label="Event picture"
                help="Upload event picture here"
              />

              <FieldGroup
                name="category"
                id="category"
                type="text"
                label="Category"
              />

            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button 
            type="submit" 
            text-align="center"
            >Create Event
            </Button>
          </Modal.Footer>
          </Modal>