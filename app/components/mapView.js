import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';


export class MapView extends Component {
  render() {
    const mapContainer = <div style= {{height: '100%', width:'100%'}}></div>
    const center = {
      lat: 40.7575285,
      lng: -73.9884469
    }
    return (
      <GoogleMapLoader
        containerElement = { mapContainer }
        googleMapElement = {
          <GoogleMap 
            defaultZoom = {15}
            defaultCenter = {center}
            options = {{streetViewControl: false, mapTypeControl: false }}>
          </GoogleMap>
        } />  
    )
  }
}

export default MapView;
