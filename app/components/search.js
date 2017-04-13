import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import _ from 'underscore';


const Search = (props) => {
  let data = props.data;
  let store = [];
  let keys = _.each(data, (obj) => 
    _.each(obj, (key) => store.push(key)))


  return (
    <div>
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