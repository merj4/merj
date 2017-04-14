import React, {Component} from 'react';
import {exampleEvents} from '../../events.js';
import {EventItem} from './eventItem';
import {EventList} from './eventList';
import MapView from './mapView';
import { Button } from 'react-bootstrap';

class ListOrMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMap : false
    }
    this.listmapHandler = this.listmapHandler.bind(this);
  }

  listmapHandler() {
    this.setState({ isMap: !this.state.isMap }, function (){
      console.log(this.state.isMap);
    });
  }

  render() {
    const isMap = this.state.isMap;
    let content = null;
    if (isMap) {
      content = <MapView />
    } else {
      content = <EventList events={this.props.events} />
    }
    return (
      <div>
        <Button onClick={this.listmapHandler}>
          {this.state.isMap ? 'List' : 'Map'}
        </Button>
        { content }
      </div>
    )
  }
};

export default ListOrMap;