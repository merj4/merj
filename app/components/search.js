import React, { Component } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

// every class must have a render function
  // it's recommended that you start with a functional based component and
  // only refactor to a class when you need some added functionality



const Search = React.createClass({

  render() {
    return (
      <div>
        <div id="search">
          <input id="searchbar"/>
        </div>
      </div>
    )
  }

});


export default Search;