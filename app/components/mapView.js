import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {
    const map = new google.maps.Map(this.refs.map, {
      center:{
        lat: -34.397,
        lng: 150.644,
      },
      zoom: 6,
      mapTypeId: 'roadmap',
    });
 
  const infoWindow = new google.maps.InfoWindow({map: map});
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent("Misaki's place!");
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
      }
  }

  render() {
    const style = {
      width: "800px",
      height: "800px",
    };

    return (
      <div id="map" ref="map" style={style}></div>
    );
  }
}

export default MapView;