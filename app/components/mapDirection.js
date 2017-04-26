import React, {Component} from 'react';

class MapDirection extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    console.log('hiiii')
    const directionsDisplay = new google.maps.DirectionsRenderer;
    const directionsService = new google.maps.DirectionsService;

    directionsDisplay.setPanel(document.getElementById('right-panel'));
    const control = document.getElementById('floating-panel');

    function calculateAndDisplayRoute(directionsService, directionsDisplay) {
      const start = this.props.clickedEvent['location'];
      const end = this.props.clickedEvent['location'];
      directionsService.route({
        origin: start,
        destination: end,
        travelMode: 'DRIVING'
      }, (response, status) => {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    }
  }

  
     
  render() {
    console.log("clickedEvent clickedddd", this.props.clickedEvent)
    return (
      <div>
        <div id="floating-panel"></div>
        <div id="right-panel"></div>
      </div>
    )
  }
}


export {MapDirection};