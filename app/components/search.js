import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import _ from 'underscore';

let transform = (date) => {
  let time = new Date(date + 'UTC');
  return time.toString()
}

const Search = (props) => {
  let data = props.data;
  let store = [];
  let keys = _.each(data, function(obj) {
     _.each(obj, function(value, key) {
      if (key !== "image") {
        if (key === "time") {
        transform(obj[key])
        
        }
        store.push(value) 
      }
    })
  })
     


  return (
    <div className="search">
      <AutoComplete
        floatingLabelText="Search by category, activity, location, date and time"
        filter={AutoComplete.fuzzyFilter}
        dataSource={store}
        maxSearchResults={5}
        fullWidth={true}

        style={{
          color: 'white',
          padding: '20px',
          targetOrigin: 'top'
        }}
      />
    </div>
  )
}

export {Search};