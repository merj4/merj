import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MapView extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      center:{
        lat: -34.397, 
        lng: 150.644
      },
      zoom: 12
    });
  }
  render() {
  const mapStyle = {
      width: 1140,
      height: 770,
    };
    
    return (
      <div ref="map" style={mapStyle}></div>
    );
  }
};

export default MapView;
