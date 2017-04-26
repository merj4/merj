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
<<<<<<< HEAD

=======
>>>>>>> d25cce36c863c1b824d7dc629cf182a66a632492

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

  //get user's current location and measuring radius
  async distanceHandler(option) {
    const data = this.props.events;
    const geocoder = new google.maps.Geocoder();

    const userPosition = await new Promise(resolve =>
      $.getJSON("http://freegeoip.net/json/", function(data) {
        resolve({
          lat: data.latitude,
          lng: data.longitude
        })
      })
    )

    const userPositionOnGoogleMap = new google.maps.LatLng(parseFloat(userPosition.lat), parseFloat(userPosition.lng));
    const distanceResults = [];
    const distanceRemainingResults = [];

    await data.reduce((promise, datum) =>
      promise.then(() =>
        new Promise(resolve =>
          geocoder.geocode({'address' : datum['location'] }, function (results, status) {
            if (status === 'OK') {
              const preEventPosition = JSON.stringify(results[0].geometry.location)
              const eventPosition = JSON.parse(preEventPosition)
              const eventPositionOnGoogleMap = new google.maps.LatLng(parseFloat(eventPosition.lat), parseFloat(eventPosition.lng));
              const path = google.maps.geometry.spherical.computeDistanceBetween(userPositionOnGoogleMap, eventPositionOnGoogleMap);
              if (path <= option) {
                distanceResults.push(datum);
              } else {
                distanceRemainingResults.push(datum);
              }
            } else {
              console.log('err event', datum, status)
            }
            setTimeout(resolve, 200);
          })
        )
      ),
      Promise.resolve(),
    )

    this.props.updateEventList(distanceResults);
    if (distanceResults.length === 0) {
      alert("no events found :( ");
    }
    console.log('distanceResults', distanceResults)
  }

  render() {
    let labelForMap = this.state.isMap ? "List": "Map"
    let close = () => this.setState({ show: false});
    console.log('displayedEvents', this.props.displayedEvents)

    return (
      <Tabs>
        <Tab label="Distance" 
        onClick={() => this.refs.Dropdown.isDropdown()}>
          <Dropdown ref="Dropdown"/>
        </Tab>

        <Tab label="Calendar" onClick={this.toggleCalendar} handleEventClick={this.props.handleEventClick}>
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
        <Tab label="Hot" >
          <div style={styles.headline}></div>
        </Tab>
        <Tab label={labelForMap} onActive={this.listMapHandler}>
          <div style={styles.headline}>
          </div>
        </Tab>
      </Tabs>
    );
  }
};

export default Filter;
