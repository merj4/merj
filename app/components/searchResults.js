
import React, { Component } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import axios from 'axios';
var PropTypes = require('prop-types');


//stateless component: received data as props and presents that data, sometimes as a list

// every class must have a render function
  // it's recommended that you start with a functional based component and
  // only refactor to a class when you need some added functionality

function SearchResults (props) {
  return axios.get('api/events', {
    params: {
      title: props.value//TODO: grab event's whose titles have the word passed in as any of the words in the title
    }
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
}

SearchResults.propTypes = {
  //value: PropType.string.isRequired,
}


const Search = React.createClass({
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    axios.get('/event', {
      params: {
      title: //TODO: grab event's whose titles have the word passed in as any of the words in the title
    }
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

//a render method needs to be a pure function, no ajax calls, etc
  //it should just receive state and props and render a UI
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }

});


export default Search;