import React, {Component} from 'react';

class MapDirection extends Component {
  componentDidMount() {
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer;
    this.directionsDisplay.setPanel(this.refs.directions);
    console.log('valueeeeeee', this.props.option);

  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.userlocation !== '';
  }

  componentDidUpdate() {
    const start = this.props.userlocation;
    const end = this.props.clickedEvent['location'];
    const travelmode = this.props.option;
    if (end) {
      this.directionsService.route({
      origin: start,
      destination: end,
      travelMode: 'DRIVING',
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