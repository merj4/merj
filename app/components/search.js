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

  // storeValues contains database keywords that populates the autocomplete dropdown
  autoCompleteStorage() {
    let data = props.data;
    let storeValues = [];
    let keys = _.each(data, function(obj) {
       _.each(obj, function(value, key) {
        if (key !== "image") {
          if (key === "time") {
          transform(obj[key])
          }
          storeValues.push(value);
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

  render() {
    console.log('State: ', this.state.store)
    return (
      <div id="search">
        <div >
          <AutoComplete
            searchText={this.state.searchText}
            onUpdateInput={this.handleUpdateInput}
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