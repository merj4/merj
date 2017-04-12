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
      isMap : false,
    }
    this.listmapHandler = this.listmapHandler.bind(this);
  }

  listmapHandler() {
    this.setState({ isMap: !this.state.isMap }, function (){
      console.log(this.state.isMap);
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.listmapHandler}>
          {this.state.isMap ? 'List' : 'Map'}
        </Button>

        
        <MapView />
        
        <div className="col-md-12">
          <EventList events={this.props.events} />
        </div>

      </div>
    )
  }
};

export default ListOrMap;
