import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {EventItem} from './eventItem';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    let map = new google.maps.Map(this.refs.map, {
      zoom: 12,
      mapTypeId: 'roadmap',
    });

    //get user's current location and added icon (purple dot)
    navigator.geolocation.getCurrentPosition(function (position) {
      var userPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
      var markUser = new google.maps.Marker({
          position: userPosition,
          map: map,
          icon: 'http://www.robotwoods.com/dev/misc/bluecircle.png'
      });
      map.setCenter(markUser.position);
    })


    // Trying to get event location and put them in locations array
    let data = this.props.events.slice();
    let geocoder = new google.maps.Geocoder();
  

    //make event location to log/lat format and put marker(pin)
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
      width: "1000px",
      height: "800px",
    };

    return (
      <div className="container" style={style}>
        <div ref="map" style={style} ></div>
      </div>
      );
    }
};

export default MapView;