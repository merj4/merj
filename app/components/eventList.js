import React from 'react';
import {EventItem} from './eventItem';

const EventList = (props) => {
  return (
    <div>
      <div>
        {props.events.map((event, i) =>
         <EventItem event={event} key={i} handleEventClick={props.handleEventClick}/>
         )}
      </div>
    </div>
  );
}

export {EventList};