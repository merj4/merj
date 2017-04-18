
import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {EventItem} from './eventItem';
import MapView from './mapView';
import ListOrMapButton from './ListOrMapButton';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

const styles = {
    headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,

  }
};

class Filter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredEvents: this.props.events,
      isMap: false,
      startDate: moment()
    }
    // will need to also bind all the other methods to 'this'
    this.listMapHandler = this.listMapHandler.bind(this);
    this.renderCalendar = this.renderCalendar.bind(this);
  }

  // distanceFilter method
  // calendarFilter method
  // hotFilter method
  // ListOrMapHandler method
  listMapHandler() {
    console.log('listMapHandler was called!', this.props.events);
    this.setState({
      isMap: !this.state.isMap
    });
  }

  renderCalendar(date) {
    console.log('Trying to render calendar', this.state.startDate)
    this.setState({
      startDate: date
    });
  }

  render() {
    let labelForMap = this.state.isMap ? "Map" : "List"
    console.log("props!!hey!!!", this.props)
    return (
      <Tabs
        // value={this.state.value}
        // onChange={this.handleChange}
      >
        <Tab label="Distance"  >
          <div style={styles.headline}></div>
        </Tab>
        <Tab label="Calendar" onActive={this.renderCalendar}>
          <div style={styles.headline}>
            <DatePicker
              inline
              selected={this.state.startDate}
              onChange={this.renderCalendar}
            />
          </div>
        </Tab>
        <Tab label="Hot" >
          <div style={styles.headline}></div>
        </Tab>
        <Tab label={labelForMap} onActive={this.listMapHandler}>
          <div style={styles.headline}>
            <ListOrMapButton
              events={this.props.events}
              viewState={this.state.isMap}
            />
          </div>
        </Tab>
      </Tabs>
    );
  }
};

export default Filter;