import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {EventItem} from './eventItem';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  async componentDidMount() {
    let map = new google.maps.Map(this.refs.map, {
      zoom: 8,
      mapTypeId: 'roadmap',
    });

    //get user's current location and added icon (purple dot)
    const userPosition = await new Promise(resolve =>
      $.getJSON("http://freegeoip.net/json/", function(data) {
        resolve({
          lat: data.latitude,
          lng: data.longitude,
        })
      })
    )

    const userPositionOnGoogleMap = new google.maps.LatLng(parseFloat(userPosition.lat), parseFloat(userPosition.lng));    
    map.setCenter(userPositionOnGoogleMap);

    console.log("displayedEvents", this.props.updateEventList())

  

    // Trying to get event location and put them in locations array
    let data = this.props.events.slice();
    let geocoder = new google.maps.Geocoder();
  

    //make event location to log/lat format and put marker(pin)
    if (this.props.displayedEvents === 0) {
      let data = this.props.events;
    } else {
      let data = this.props.displayedEvents;
    }
        for (var i = 0; i < data.length; ++i) {
          let eachData = data[i]
           geocoder.geocode({'address' : data[i]['location'] }, function (results, status) {
           if (status == 'OK') {
            var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location,
            });

            var content = '<div id="markerContainer">'+
                          '<h3 id="firstHeading">'+ eachData['title']+'</h3>'+
                          '<p><b>Date: </b>' + eachData['date']+'</p>'+
                          '<p><b>Time: </b>' + eachData['time']+'</p>'+
                          '<p><b>Descrption: </b>' +eachData['description']+'</p>'+
                          '</div>'

            var infowindow = new google.maps.InfoWindow()

            google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
              return function() {
                 infowindow.setContent(content);
                 infowindow.open(map,marker);
              };
            })(marker,content,infowindow)); 
            } else {
              console.log('location undefined!', status)
            }
          })
        }    
      }

  render() {
    var style = {
      width: "770px",
      height: "770px",
    };

    return (
      <div id="mapcontainer" style={style}>
        <div ref="map" style={style} ></div>
      </div>
      );
    }
};

export default MapView;