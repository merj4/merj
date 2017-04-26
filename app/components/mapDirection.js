import React, {Component} from 'react';

class MapDirection extends Component {
  componentDidMount() {
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer;
    this.directionsDisplay.setPanel(this.refs.directions);
  }
  componentDidUpdate() {
    const start = this.props.clickedEvent['location'];
    const end = this.props.userlocation;

    if (end) {
      this.directionsService.route({
      origin: start,
      destination: end,
      travelMode: 'DRIVING'
      }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
        console.log('response', response)
      } else {
        window.alert('Directions request failed due to ' + status);
      }
      });
    } else {
      console.log('not yet!')
    }
  }

  render() {
    return (
      <div>
        <div ref="directions"></div>
      </div>
    )
  }
}

export {MapDirection};