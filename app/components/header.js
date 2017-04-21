import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, Navbar, Nav, Form, FormGroup, ControlLabel, FormControl, HelpBlock, Col, DropdownButton, MenuItem } from 'react-bootstrap';
import $ from 'jquery';
import axios from 'axios';

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
    if (this.state.category !== '') {
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
        alert("You didn't finish the form! Please return and submit upon completion", err)
      })
      window.setTimeout(() => {
        location.reload()
      }, 50)
    }
    this.setState({
      show: false
    })
  }

  render() {
    let close = () => this.setState({ show: false});
    const { auth } = this.props

    return (
      <Nav inverse className="Container header">
        <span id="topsocial">Social.<span id="toply">ly</span></span>
        <Nav pullRight>
          <div>{this.props.profile.name}</div>
          {/* <img src= {this.props.profile.picture} id="userpic"></img>*/}
          <Button id="formbutton" onClick={() => this.setState({ show: true})}>+</Button>
          <DropdownButton id='profilelogout'>
            <MenuItem id="showProfile" onClick={ this.props.showProfile }><i className="fa fa-user fa-fw"></i>Profile</MenuItem>
            <MenuItem id="logout" onClick={auth.logout.bind(this)}><i className="fa fa-sign-out fa-fw"></i>Logout</MenuItem>
          </DropdownButton>

          <Modal
            show={this.state.show}
            onHide={close}
            container={this}
            aria-labelledby="contained-modal-title">
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
                  placeholder="222 Rainbow St, San Jose CA"
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