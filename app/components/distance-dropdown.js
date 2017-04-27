import React, { Component } from 'react'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';




//Start of Gifs component
class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
       dropdown: false,
    }
    this.isDropdown = this.isDropdown.bind(this)

  }

//Closes dropdown
  isDropdown(){
    this.setState({dropdown: !this.state.dropdown})
    this.props.updateEventList(this.props.events) 
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


//Dropdown serves as container and iterator for array of gif results
  render() {
    console.log("eventlist all", this.props.events)
  return (
    <IconMenu
      open={this.state.dropdown}
      iconButtonElement={<div></div>}
      anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
      autoWidth={true}
      className={''}
      onClick={this.isDropdown}
    >
        <MenuItem value={1} primaryText="5 miles " onClick={() => this.distanceHandler(8046.72)}  />
        <MenuItem value={2} primaryText="10 miles " onClick={() => this.distanceHandler(16093.4)}  />
        <MenuItem value={2} primaryText="15 miles " onClick={() => this.distanceHandler(24140.2)} />
        <MenuItem value={4} primaryText="20 miles " onClick={() => this.distanceHandler(32186.9)} />

    </IconMenu>
    );
  }
}

export { Dropdown }
