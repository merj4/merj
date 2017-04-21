import React, {Component} from 'react';
import {exampleEvents} from '../../events.js';
import {EventItem} from './eventItem';
import {EventList} from './eventList';
import MapView from './mapView';
import { Button } from 'react-bootstrap';

const ListOrMapButton = (props) => {

  let content = null;
  //isMap: true
  if (props.viewState) {
    content = <MapView events={props.events} />
  //isMap: false
  } else {
    content = <EventList events={props.events} />
  }
  // console.log('This is content:', content);
    return (
      <div>{ content }</div>
    )
};

export default ListOrMapButton;