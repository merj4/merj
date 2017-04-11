import React from 'react';
import {EventItem} from './eventItem';



var EventList = (props) => {
  return (
    <div>
      <div>
        {props.events.map((event) =>
         <EventItem event={event} key={event.location}/>
         )}
      </div>
    </div>
  );
}


export {EventList};

