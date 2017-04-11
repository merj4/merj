import React from 'react';
import { Button, Col } from 'react-bootstrap';

// every class must have a render function
  // it's recommended that you start with a functional based component and
  // only refactor to a class when you need some added functionality

// this header will contain our app name in the center, which will also be a clickable link to go to the homepage/eventsList

// on the right side of the header, we need a + button to add an event

const Header = () => {
  return (
    <div>
      <Col xs={4} className=""></Col>
      <Col xs={4} className=""><h1 className="text-center">BeepBoop</h1></Col>
      <Col xs={4}><div className="text-right"><Button className="">+</Button></div></Col>
    </div>

  );
}

export default Header;