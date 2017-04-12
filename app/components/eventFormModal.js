import React, {Component} from 'react';   
import { Button, Modal, Form, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';     


class eventFormModal extends Component {
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

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
    const.target = event.target;
    const [name] = target.name;

    this.setState({
      [name]: value
    });
  }

  FieldGroup({ id, label, help }) {
  return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }
  render() {
    return (
      <Modal  
        show={this.state.show}
        onHide={close}
        container={this}
        aria-labelledby="contained-modal-title"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <form onSubmit={this.handleSubmit}>
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
    ) 
  }
}

export { eventFormModal }
