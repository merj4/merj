import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import {MapDirection} from './mapDirection'
import {EventItem} from './eventItem';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      clickedEvent: null,
      userlocation: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({userlocationInput: event.target.value});
  }

  handleSubmit(event) {
    this.setState({userlocation: this.state.userlocationInput});
    event.preventDefault();
  }

  async componentDidMount() {
    let map = new google.maps.Map(this.refs.map, {
      zoom: 8,
      mapTypeId: 'roadmap',
    });

    //get user's current location and added icon (purple dot)
    const userPosition = await new Promise(resolve =>
      $.getJSON("http://freegeoip.net/json/", (data) => {
        resolve({
          lat: data.latitude,
          lng: data.longitude,
        })
      })
    )
    
    const userPositionOnGoogleMap = new google.maps.LatLng(parseFloat(userPosition.lat), parseFloat(userPosition.lng)); 
    var markUser = new google.maps.Marker({
        position: userPositionOnGoogleMap,
        map: map,
        icon: 'http://www.robotwoods.com/dev/misc/bluecircle.png'
    });

    map.setCenter(userPositionOnGoogleMap);

    // Trying to get event location and put them in locations array
    let data = this.props.events.slice();
    let geocoder = new google.maps.Geocoder();  

    //make event location to log/lat format and put marker(pin)
    for (var i = 0; i < data.length; ++i) {
      let eachData = data[i]

      geocoder.geocode({'address' : data[i]['location'] }, (results, status) => {
       if (status == 'OK') {
        let marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });

        let content = ['<div id="markerContainer">',
                      '<h3 id="firstHeading">', eachData['title'],'</h3>',
                      '<p><b>Date: </b>' , eachData['date'],'</p>',
                      '<p><b>Time: </b>' , eachData['time'],'</p>',
                      '</div>'].join("");


        let infowindow = new google.maps.InfoWindow()
        infowindow.setContent(content);

        google.maps.event.addListener(marker,'click', ((marker, content, infowindow) => {
          return () => {
           infowindow.open(map,marker);
           this.setState({clickedEvent: eachData});
          };
        })(marker, content, infowindow)); 

        } else {
          console.log('location undefined!', status)
        }
      })
    }
  }

  render() {
    var style = {
      height: "700px",
    };

    let close = () => this.setState({ show: false});
    if (this.state.clickedEvent) {
      return (
        <div id="mapcontainer" >
          <p id="map" ref="map" style={style} ></p>
          <p  id="routes">
          <form onSubmit={this.handleSubmit}>
            <div>From <input id="directioninput" type="text" value={this.state.userlocationInput} onChange={this.handleChange}  placeholder="  Choose starting point 　" /></div>
            <div>To <b>{this.state.clickedEvent['title']} </b></div>
            <div><button id="directionsubmit" type="submit" onClick={this.handleSubmit}> Get Direction</button></div>
          </form>
          <MapDirection show={this.state.show} onHide={close} clickedEvent={this.state.clickedEvent} userlocation={this.state.userlocation}/>
          </p>
        </div>
      );
    } 
    return (
      <div id="mapcontainer">
        <p id= "map" ref="map" style={style} ></p>
        <p id="routes">
        <form onSubmit={this.handleSubmit}>
        <div>From <input id="directioninput" type="text" value={this.state.userlocationInput} onChange={this.handleChange}  placeholder="  Click Event Pin  "/></div>
        <div>To <b>Where? </b></div>
        <div><button id="directionsubmit" type="submit">Get Direction</button></div>
        </form>
        </p>
      </div>
    )
  }
};

export default MapView;