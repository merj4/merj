import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {EventItem} from './eventItem';
import {EventList} from './eventList';
import MapView from './mapView';
import ListOrMap from './ListOrMap';

const styles = {
    headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class Filter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // isMap : false,
    }
  }

  render() {
    return (
      <Tabs
        // value={this.state.value}
        // onChange={this.handleChange}
      >
        <Tab label="Distance"  >
          <div style={styles.headline}></div>
        </Tab>
        <Tab label="Category" >
          <div style={styles.headline}></div>
        </Tab>
        <Tab label="Size" >
          <div style={styles.headline}></div>
        </Tab>
        <Tab label="Date" >
          <div style={styles.headline}></div>
        </Tab>
        <Tab label="Now" >
          <div style={styles.headline}></div>
        </Tab>
        <Tab label="Hot" >
          <div style={styles.headline}></div>
        </Tab>
        <Tab label="Map">
          <div style={styles.headline}>
            <ListOrMap events={this.props.events} />
          </div>
        </Tab>
      </Tabs>
    );
  }
}
