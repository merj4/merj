import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from './eventFormModal'

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

const Header = React.createClass({

  getInitialState() {
    return { show: false };
  },

  render() {
    let close = () => this.setState({ show: false});
    return (
      <Nav inverse className="Container header">
        <Navbar.Brand text-align="center">
          <a href="#" text-align="center">Beep Boop!</a>
        </Navbar.Brand>
        <Nav pullRight>
          <Button onClick={() => this.setState({ show: true})}>+</Button>
          <Modal />
        </Nav>
      </Nav>
    );
  }
});

export default Header;
