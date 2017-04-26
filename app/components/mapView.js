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
    this.setState({userlocation: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.userlocation);
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
                      '<p><b>Descrption: </b>' ,eachData['description'],'</p>',
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
      width: "770px",
      height: "300px",
    };
    let close = () => this.setState({ show: false});
    console.log('locationnnn', this.state.userlocation)
    if (this.state.clickedEvent) {
      return (
        <div id="mapcontainer" style={style}>
          <div ref="map" style={style} ></div>
          <form onSubmit={this.handleSubmit}>
          <label>
            Starting Location:
            <input type="text" value={this.state.userlocation} onChange={this.handleChange} />
          </label>
          <button type="submit" value="Get Direction" />
          </form>
          <div>to {this.state.clickedEvent['title']}</div>
          <MapDirection show={this.state.show} onHide={close} clickedEvent={this.state.clickedEvent} />
        </div>
      );
    } 
    return (
      <div>
        <div ref="map" style={style} ></div>
        <div>Click the event you are interested!</div>
      </div>
    )
  }
};

export default MapView;