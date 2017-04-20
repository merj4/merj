import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import _ from 'underscore';
import { Button, Col, Row } from 'react-bootstrap';
import moment from 'moment';
import Filter from './filter';

let transform = (date) => {
  let readDate = new Date(date);
  return readDate.toString().slice(0, -24)
}

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      store: []
    }
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.handleNewRequest = this.handleNewRequest.bind(this);
    this.autoCompleteStorage = this.autoCompleteStorage.bind(this);
  }

  // we are also going to need a method to handle onSubmit

  // if object has a keyword, only include that object in the array and replace the events state in app to be that filtered array

  // if any object doesn't contain a value that matches our keywords, splice it out
    // what remains will only be the objects that contain values that matches our keywords
  handleNewRequest() {
    console.log('Got a new search request!')
    let data = this.props.data.slice();
    let searchResults = [];
    let remainingResults = [];
    //Helper function for search
    //then pass in filteredEvents as newArray in updateEvents function
    data.forEach((event) => {
      for(let key in event) {
       if(event[key].toString().toLowerCase().includes(this.state.searchText)) {
        searchResults.push(event);
       } else {
          remainingResults.push(event);
        }
      }
    })
    this.props.updateEventList(searchResults);
    this.setState({
      searchText: '',
    });
  };

  performSearch(date) {
    console.log('Got a new search request: ', date.slice(0, 9))
    let data = this.props.data.slice();
    let searchResults = [];
    let remainingResults = [];
    //Helper function for search
    //then pass in filteredEvents as newArray in updateEvents function
    data.forEach((event) => {
      for(let key in event) {
       if(event[key].toString().toLowerCase().includes(date.slice(0, 9))) {
        searchResults.push(event);
       } else {
          remainingResults.push(event);
        }
      }
    })
    this.props.updateEventList(searchResults);
    this.setState({
      searchText: '',
    });
  };

  // this provides the autocomplete strings the appear when a user begins typing
  autoCompleteStorage() {
    // console.log("search:", this.props.data);
    let data = this.props.data;
    let databaseKeywords = []; // contains keywords captured from the search bar
    let keys = _.each(data, function(obj) {
       _.each(obj, function(value, key) {
        if (key !== "image") {
          if (key === "date") { // was time previously
            value = moment(obj[key]).format('MMMM DD, YYYY')
          }
          databaseKeywords.push(value);
        } else if (key !== "image") { // this may not be right
          if (key === "time") {
            databaseKeywords.push(transform(value));
          }
        }
      })
    })
    this.setState({ store: databaseKeywords })
  }

  // this keeps track of what the user types into the search, also part of Material-UI
  handleUpdateInput(searchText) {
    // console.log('Updating input...')
    this.autoCompleteStorage();
    this.setState({
      searchText: searchText.toLowerCase(),
    });
  };

  render() {
    // invoke the helper method from our App class to update the state
    // console.log('Search props: ', this.props.updateEventList)
    // {this.checkDateState()}
    return (
      <div id="search">
        <div >
          <AutoComplete
            searchText={this.state.searchText}
            onUpdateInput={this.handleUpdateInput}
            onNewRequest={this.handleNewRequest}
            dataSource={this.state.store}
            filter={AutoComplete.fuzzyFilter}
            maxSearchResults={5}
            id="searchbar"
          />
        </div>
      </div>
    )
  }
}

export {Search};