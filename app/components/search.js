import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import _ from 'underscore';

let transform = (date) => {
  let readDate = new Date(date + 'UTC');
  return readDate.toString().slice(0, -24)
}

const Search = (props) => {
  let data = props.data;
  let store = [];
  let keys = _.each(data, function(obj) {
     _.each(obj, function(value, key) {
      if (key !== "image") {
        if (key === "date") {
        value = transform(value)
        }
        store.push(value) 
      }
    })
  })


    return (
        <div id="search">
          <div >
            <AutoComplete
          filter={AutoComplete.fuzzyFilter}
          dataSource={store}
          maxSearchResults={5}
          id="searchbar"
           />
        </div>
      </div>
    )

}

export {Search};