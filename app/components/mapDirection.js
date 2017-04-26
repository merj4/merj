import React, {Component} from 'react';

class MapDirection extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    console.log('hiiii')
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;

    directionsDisplay.setPanel(document.getElementById('right-panel'));
  }
    



  
  render() {
    console.log("clickedEvent clickedddd", this.props.clickedEvent)
    if (this.props.clickedEvent) {
      return (
        <div>
          <div><b>Direction to {this.props.clickedEvent['title']}</b></div>
          <div id="right-panel"></div>
        </div>

      )
    }
    return (
      <div></div>
    )
  }
}


export {MapDirection};