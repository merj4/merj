import React from 'react';
import EventItem from './eventItem';


var EventList = (props) => {
  return (
    <table>
      <tbody>
        {props.events.map((event) =>
         <EventItem event={event} key={event.location}/>
         )}
      </tbody>
    </table>
  );
}


export default EventList;