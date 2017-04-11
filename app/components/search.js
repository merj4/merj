import React, { Component } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

// every class must have a render function
  // it's recommended that you start with a functional based component and
  // only refactor to a class when you need some added functionality

const Search =() => {
    return (
      <div className="search-bar">
        <Row>
          <Col xs={12}>
            <input className="centered" />
          </Col>
        </Row>
      </div>
    );
}

export default Search;