import React, {Component} from 'react';
import { Button, Modal } from 'react-bootstrap';
import {Tabs, Tab } from 'material-ui';
import EventItem from './eventItem.js';
import MapView from './mapView.js';
import ListOrMapButton from './ListOrMapButton.js';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {Dropdown} from './distance-dropdown'
import DatePIcker from 'react-datepicker/dist/react-datepicker.css';


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
      isMap: false,
      startDate: moment(), // this property highlights today's date on the calendar
      isOpen: false,
      show: false
    }
    // will need to also bind all the other methods to 'this'
    this.listMapHandler = this.listMapHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleCalendar = this.toggleCalendar.bind(this);
    // this.handleSelect = this.handleSelect.bind(this);
  }


  listMapHandler() {
    // console.log('listMapHandler was called!', this.props.events);
    this.setState({
      isMap: !this.state.isMap
    });

    this.props.showMap();

  }

  handleChange(date) {
    console.log(moment(date).format())
    this.props.updateDate(moment(date).format())
    this.toggleCalendar()
  }

  toggleCalendar(e) {
    e && e.preventDefault()
    this.setState({
      isOpen: !this.state.isOpen
    })
  }


  render() {
    let labelForMap = this.state.isMap ? "List": "Map"
    let close = () => this.setState({ show: false});
    console.log('displayedEvents', this.props.displayedEvents)
    let hotevents = this.props.events.slice(1, 3);

    return (
      <Tabs>
        <Tab label="Distance" 
        onClick={() => this.refs.Dropdown.isDropdown()} >
          <Dropdown ref="Dropdown" events={this.props.events}  updateEventList={this.props.updateEventList} />
        </Tab>

        <Tab label="Calendar" onClick={this.toggleCalendar} handleEventClick={this.props.handleEventClick} >
          <div style={styles.headline}>
            {
              this.state.isOpen && (
                <DatePicker
                  onClickOutside={this.toggleCalendar}
                  selected={this.state.startDate}
                  onSelect={this.handleSelect}
                  onChange={this.handleChange}
                  withPortal
                  inline />
              )
            }
          </div>
        </Tab>

        <Tab label="Hot" onClick={() => this.props.updateEventList(hotevents)} >
          <div style={styles.headline}></div>
        </Tab>

        <Tab label={labelForMap} onActive={this.listMapHandler}>
          <div style={styles.headline} />
        </Tab>
      </Tabs>
    );
  }
};

export default Filter;
