import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import _ from 'underscore';

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
  }

  // we are also going to need a method to handle onSubmit

  // if object has a keyword, only include that object in the array and replace the events state in app to be that filtered array

  // if any object doesn't contain a value that matches our keywords, splice it out
    // what remains will only be the objects that contain values that matches our keywords

  // invoke the helper method from our App class to update the state


  autoCompleteStorage() {
    let data = props.data;
    let databaseKeywords = []; // contains keywords captured from the search bar
    let keys = _.each(data, function(obj) {
       _.each(obj, function(value, key) {
        if (key !== "image") {
          if (key === "time") {
          transform(obj[key])
          }
          databaseKeywords.push(value);
        }
      })
    })
  }

  handleUpdateInput(searchText) {
    this.setState({
      searchText: searchText,
    });
    console.log(searchText)
  };

  handleNewRequest() {
    this.setState({
      searchText: '',
    });
    this.updateEventList(filteredEvents)
  };

  render() {
    console.log('Search props: ', this.props.updateEventList)
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