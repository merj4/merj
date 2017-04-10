import React from 'react';
import EventItem from './eventItem';
// every class must have a render function
  // it's recommended that you start with a functional based component and
  // only refactor to a class when you need some added functionality

// This component is basically the manager for the eventItem
  // it controls the layout of the events
  // and controls rendering the layout of the events based on filters, too

  // The components that get passed into this are eventItem

  // Will have to be a class component to handle changing state

  const EventList = (props) => {
    const event = props.events.map((event) => {
      return (
        <EventItem
          key={event.id} />
      );
    });

console.log('EventList')
  return (
      <ul classname="col-md-12 list-group">
        {event}
      </ul>
    );
  };

  export default EventList;