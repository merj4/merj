import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, Navbar, Nav, Form, FormGroup, ControlLabel, FormControl, HelpBlock, Col } from 'react-bootstrap';
import $ from 'jquery';

// every class must have a render function
  // it's recommended that you start with a functional based component and
  // only refactor to a class when you need some added functionality

// this header will contain our app name in the center, which will also be a clickable link to go to the homepage/eventsList

// on the right side of the header, we need a + button to add an event

function FieldGroup({ id, label, help }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
    this.state = {
      show: false,
      eventName: '',
      location: '',
      date: '',
      time: '',
      host: '',
      description: '',
      eventUrl: '',
      category: ''
    }   

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEvent = this.handleEvent.bind(this);

  }

  handleInputChange(event) {
    const target = event.target;
    const [name] = target.name;
    const locVal = $('#form').val();
    
    console.log(locVal)
    
    this.setState({
      [name]: locVal,

    });
  }

  handleEvent() {
    this.setState({ 
      show: true
    }) 
  } 

  render() {
    let close = () => this.setState({ show: false});
    return (
      <Nav inverse className="Container header">
        <Navbar.Brand text-align="center">
          <a href="#" text-align="center">Beep Boop!</a>
        </Navbar.Brand>
        <Nav pullRight>
          <Button onClick={() => this.setState({ show: true})}>+</Button>
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
                  id="form"
                  type="text"
                  label="Event name"
                  placeholder="Event Name"
                  value={this.state.eventName}
                  onChange={this.handleInputChange}
                />
                <FieldGroup
                  name="location"
                  id="form"
                  type="text"
                  label="Location"
                  placeholder="Place/Address"
                />

                <FormGroup controlId="date" >
                  <ControlLabel>Date</ControlLabel>
                  {' '}
                  <FormControl 
                  id="date"
                  name="date" 
                  type="text" 
                  placeholder="Date" />
                </FormGroup>
                  {' '}
                <FormGroup controlId="time">
                  <ControlLabel>Time</ControlLabel>
                  {' '}
                  <FormControl
                  id="time" 
                  name="time" 
                  type="time" 
                  placeholder="time" />
                </FormGroup>


                <FieldGroup
                  name="host"
                  id="host"
                  label="host"
                  type="text"
                />

                <FormGroup controlId="description">
                  <ControlLabel>Description</ControlLabel>
                  <FormControl 
                  id="description"
                  name="description"
                  componentClass="textarea" 
                  placeholder="Description" />
                </FormGroup>

                <FieldGroup
                  name="event-url"
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
              <Button type="submit" text-align="center" onClick={this.handleInputChange}>Create Event</Button>
            </Modal.Footer>
          </Modal>

        </Nav>
      </Nav>
    );
  }
};

export default Header;
