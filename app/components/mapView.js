import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {EventItem} from './eventItem';

// let INITIAL_LOCATION = {
//     address: 'London, United Kingdom',
//     position: {
//       latitude: 51.5085300,
//       longitude: -0.1257400
//     }
//   }

// let INITIAL_MAP_ZOOM_LEVEL = 8;


class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  // componentDidMount() {
  //   const map = new google.maps.Map(this.refs.map, {
  //     center:{
  //       lat: INITIAL_LOCATION.position.latitude,
  //       lng: INITIAL_LOCATION.position.longitude,
  //     },
  //     zoom: INITIAL_MAP_ZOOM_LEVEL,
  //     mapTypeId: 'roadmap',

  //   });

  //   this.marker = new google.maps.Marker({
  //     map: this.map,
  //     position: {
  //       lat: INITIAL_LOCATION.position.latitude,
  //       lng: INITIAL_LOCATION.position.longitude
  //     }
  //   });

  //   // new google.maps.Geocorder();
  // }



  // Trying to get event location and put them in locations array
  // **but right now, it's empty array, why?
  getEventLocation() {
    let data = this.props.events.slice();
    // let locations = [];
    // data.forEach((event) => 
    //   locations.push(this.props.event.location)
    // )
    // console.log('locations:', locations)
  }


render() {
  const style = {
    width: "800px",
    height: "800px",
  };
  console.log("getEventLocation:", this.props.events);
  return (
    <div className="container">
      <div className="map" ref="map" style={style} ></div>
    </div>
    );
  }
};

module.exports = MapView;