import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

// every class must have a render function
  // it's recommended that you start with a functional based component and
  // only refactor to a class when you need some added functionality

// this header will contain our app name in the center, which will also be a clickable link to go to the homepage/eventsList

// on the right side of the header, we need a + button to add an event

const Filter = () => {
  return (
    <div>
      <Row>
        <Col xs={2} className="text-center">Distance</Col>
        <Col xs={2} className="text-center">Category</Col>
        <Col xs={2} className="text-center">Date</Col>
        <Col xs={2} className="text-center">Now</Col>
        <Col xs={2} className="text-center">Hot</Col>
        <Col xs={2} className="text-center"><Button className="map-view">Map</Button></Col>
      </Row>
    </div>
  );
}

export default Filter;