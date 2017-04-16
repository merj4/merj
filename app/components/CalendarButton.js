import React from 'react';
import DatePicker from 'material-ui/DatePicker';

/**
 * Inline Date Pickers are displayed below the input, rather than as a modal dialog.
 */
const CalendarButton = (props) => {console.log(props)
  return (
   
      <DatePicker 
        hintText="Landscape Inline Dialog" 
        container="inline" 
        mode="landscape"
        open={props.show}
        value={props.controlledDate}
      />
   
  );
}

export { CalendarButton }