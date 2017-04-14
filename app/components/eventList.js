import React from 'react';
import {EventItem} from './eventItem';

var EventList = (props) => {
  // console.log('EVENT LIST', props);
  return (
    <div>
      <div>
        {props.events.map((event) =>
         <EventItem event={event} key={event.id}/>
         )}
      </div>
    </div>
  );
}

export {EventList};