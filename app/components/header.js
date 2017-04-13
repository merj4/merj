import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, Navbar, Nav, Form, FormGroup, ControlLabel, FormControl, HelpBlock, Col } from 'react-bootstrap';
import axios from 'axios';


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
    this.state = {
      show: false,
      eventName: '',
      location: '',
      date: '',
      time: '',
      description: '',
      eventUrl: '',
      category: ''
    }   
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    const d = this.state;
    axios.post('/api/event', {
      title: d.eventName,
      location: d.location,
      date: d.date,
      time: d.time,
      description: d.description,
      image: d.eventUrl,
      category: d.category
    }).then(res => {
      console.log("Post request successful!")
    }).catch(err => {
      console.log("Could not save to db", err)
    })
  }

  render() {
    let close = () => this.setState({ show: false});
    return (
      <Nav inverse className="Container header">
        <a href="#" id="beepboop">Beep Boop</a>
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

                <FormGroup>
                  <ControlLabel>Event Name</ControlLabel>
                  <FormControl
                    name="eventName"
                    id="event-name"
                    type="text"
                    label="Event name"
                    placeholder="Event Name"
                    value={this.state.eventName}
                    onChange={this.handleInputChange}
                  />
                </FormGroup>

                <FormGroup>
                  <ControlLabel>Location</ControlLabel>
                  <FormControl
                  name="location"
                  id="location"
                  type="text"
                  label="Location"
                  placeholder="Place/Address"
                  value={this.state.location}
                  onChange={this.handleInputChange}
                  />
                </FormGroup>

                <FormGroup controlId="date" >
                  <ControlLabel>Date</ControlLabel>
                  {' '}
                  <FormControl 
                  id="date"
                  name="date" 
                  type="text" 
                  placeholder="Date" 
                  onChange={this.handleInputChange}
                  />

                </FormGroup>
                  {' '}
                <FormGroup controlId="time">
                  <ControlLabel>Time</ControlLabel>
                  {' '}
                  <FormControl
                  id="time" 
                  name="time" 
                  type="time" 
                  placeholder="time" 
                  onChange={this.handleInputChange}
                  />
                </FormGroup>

                <FormGroup controlId="description">
                  <ControlLabel>Description</ControlLabel>
                  <FormControl 
                  id="description"
                  name="description"
                  componentClass="textarea" 
                  placeholder="Description" 
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  />
                </FormGroup>

                <FormGroup>
                  <ControlLabel>Image Url</ControlLabel>
                  <FormControl 
                  name="eventUrl"
                  id="event-url"
                  type="text"
                  label="Event picture"
                  placeholder="Upload event picture here"
                  value={this.state.eventUrl}
                  onChange={this.handleInputChange}
                  />
                </FormGroup>
                
                <FormGroup>
                  <ControlLabel>Category</ControlLabel>
                  <FormControl 
                  name="category"
                  id="category"
                  type="text"
                  label="Category"
                  placeholder="Category"
                  value={this.state.category}
                  onChange={this.handleInputChange}
                  />
                </FormGroup>

              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" text-align="center" onClick={this.handleSubmit}>Create Event</Button>
            </Modal.Footer>
          </Modal>

        </Nav>
      </Nav>
    );
  }
};

export default Header;
