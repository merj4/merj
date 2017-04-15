import React, {Component} from 'react';
import {exampleEvents} from '../../events.js';
import {EventItem} from './eventItem';
import {EventList} from './eventList';
import MapView from './mapView';
import { Button } from 'react-bootstrap';

const ListOrMapButton = (props) => {
  console.log('ListOrMap props:', props);

  let content = null;

  if (props.viewState) {
    content = <MapView />
  } else {
    content = <EventList events={props.events} />
  }
  console.log('This is content:', content);
    return (
      <div>{ content }</div>
    )
};

export default ListOrMapButton;