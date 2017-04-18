import React from 'react';
import {EventItem} from './eventItem';

const EventList = (props) => {
  return (
    <div>
      <div>
        {props.events.map((event) =>
         <EventItem event={event} key={event.title} handleEventClick={props.handleEventClick}/>
         )}

      </div>
    </div>
  );
}

export {EventList};