import React, {Component} from 'react';

class MapDirection extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const directionsDisplay = new google.maps.DirectionsRenderer;
    const directionsService = new google.maps.DirectionsService;

    directionsDisplay.setPanel(document.getElementById('right-panel'));
    const control = document.getElementById('floating-panel');

    function calculateAndDisplayRoute(directionsService, directionsDisplay) {
      const start = this.props.clickedEvent['location'];
      const index = this.props.userlocations.length -1;
      const end = this.props.userlocations[index];

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
    

    return (
      <div>
        <div id="floating-panel"></div>
        <div id="right-panel"></div>
      </div>
    )
  }
}


export {MapDirection};