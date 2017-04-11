import React from 'react';
import EventItem from './eventItem';


  const EventList = (props) => (
      <ul className="list-group">
        {props.events.map(event => 
          <EventItem event={event} key={event.location}/>
        )}
      </ul>
    );

  export default EventList;