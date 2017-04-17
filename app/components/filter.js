import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {EventItem} from './eventItem';
import MapView from './mapView';
import ListOrMapButton from './ListOrMapButton';

const styles = {
    headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class Filter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredEvents: this.props.events,
      isMap: false
    }
    // will need to also bind all the other methods to 'this'
    this.listMapHandler = this.listMapHandler.bind(this);
  }

  // distanceFilter method
  // calendarFilter method
  // hotFilter method
  // ListOrMapHandler method
  listMapHandler() {
    console.log('listMapHandler was called!');
    this.setState({ 
      isMap: !this.state.isMap 
    });
  }

  render() {
    let labelForMap = this.state.isMap ? "Map" : "List"
    return (
      <Tabs
        // value={this.state.value}
        // onChange={this.handleChange}
      >
        <Tab label="Distance"  >
          <div style={styles.headline}></div>
        </Tab>
        <Tab label="Calendar" >
          <div style={styles.headline}></div>
        </Tab>
        <Tab label="Hot" >
          <div style={styles.headline}></div>
        </Tab>
        <Tab label={labelForMap} onActive={this.listMapHandler}>
          <div style={styles.headline}>
            <ListOrMapButton
              events={this.state.filteredEvents}
              viewState={this.state.isMap}
            />
          </div>
        </Tab>
      </Tabs>
    );
  }
};

export default Filter;
