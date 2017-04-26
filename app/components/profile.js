import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

// const styles = {
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//   },
//   gridList: {
//     width: 500,
//     height: 450,
//     overflowY: 'auto',
//   },
// };

// const tilesData = [
//   {
//     img: 'images/grid-list/00-52-29-429_640.jpg',
//     title: 'Breakfast',
//     author: 'jill111',
//   },
//   {
//     img: 'images/grid-list/burger-827309_640.jpg',
//     title: 'Tasty burger',
//     author: 'pashminu',
//   },
//   {
//     img: 'images/grid-list/camera-813814_640.jpg',
//     title: 'Camera',
//     author: 'Danson67',
//   },
//   {
//     img: 'images/grid-list/morning-819362_640.jpg',
//     title: 'Morning',
//     author: 'fancycrave1',
//   },
//   {
//     img: 'images/grid-list/hats-829509_640.jpg',
//     title: 'Hats',
//     author: 'Hans',
//   },
//   {
//     img: 'images/grid-list/honey-823614_640.jpg',
//     title: 'Honey',
//     author: 'fancycravel',
//   },
//   {
//     img: 'images/grid-list/vegetables-790022_640.jpg',
//     title: 'Vegetables',
//     author: 'jill111',
//   },
//   {
//     img: 'images/grid-list/water-plant-821293_640.jpg',
//     title: 'Water plant',
//     author: 'BkrmadtyaKarki',
//   },
// ];

// /**
//  * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
//  */
// const GridListExampleSimple = () => (
//   <div style={styles.root}>
//     <GridList
//       cellHeight={180}
//       style={styles.gridList}
//     >
//       <Subheader>December</Subheader>
//       {tilesData.map((tile) => (
//         <GridTile
//           key={tile.img}
//           title={tile.title}
//           subtitle={<span>by <b>{tile.author}</b></span>}
//           actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
//         >
//           <img src={tile.img} />
//         </GridTile>
//       ))}
//     </GridList>
//   </div>
// );

// export default GridListExampleSimple;



class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.userId,
      events: [],
      userEvents: []
    }
    this.getUserEvents = this.getUserEvents.bind(this);
    this.setUserEvents = this.setUserEvents.bind(this);
  }
  // set state with UserId
  // get all events from EventParticipant where the UserId matches current user

  getUserEvents() {
    axios.get('/api/userevents/' + this.state.userId)
    .then(res => {
      let eventIds = [];
      let eventData = res.data;

      eventData.forEach(function(event) {
        eventIds.push(event.id);
      })
      this.state.events = eventIds;
      this.setUserEvents();
      console.log('Event state: ', this.state.events);
    }).catch(err => {
      console.log(err);
    })
  }

  setUserEvents() {
    let eventsArray = [];

    this.state.events.forEach(function(event) {
      axios.get('/api/event/' + event)
      .then(res => {
        eventsArray.push(res.data);
      }).catch(err => {
        console.log(err);
      });
    });
    this.state.userEvents = eventsArray;
    // this.setState({
    //   userEvents: eventsArray
    // })
    console.log('USER EVENT STATE: ', this.state.userEvents);
  }

  render() {
    // console.log('Profile events: ', this.state.userId, this.state.events)
    // {this.getUserEvents()}
    return (
    <div id='profile'>
    <div id="profilename">{this.props.profile.name}</div>
    <img id="profilepic" src={this.props.profile.picture}></img>
    {this.getUserEvents()}
    </div>

    )
  }
}

export default Profile