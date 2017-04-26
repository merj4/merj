import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 800,
    height: 1000,
    overflowY: 'auto',
  },
};

let tilesData = [];

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
    this.updateEventGrid = this.updateEventGrid.bind(this);
  }

  // get all events from EventParticipant where the UserId matches current user
  componentDidMount() {
    this.getUserEvents()

    const timeStamp = (new Date).getTime();
    console.log('Component did mount: ', timeStamp);
    // const tile = this.state.userEvents.map((tile) => {return tile;})
    // console.log('Events: ', this.state.userEvents, 'Tiles: ', tile);
  }

  getUserEvents() {
    axios.get('/api/userevents/' + this.state.userId)
    .then(res => {
      let eventIds = [];
      let eventData = res.data;

      eventData.forEach(function(event) {
        eventIds.push(event.id);
      })
      this.setState({
        events: eventIds
      })
      // this.state.events = eventIds;
      this.setUserEvents();
      console.log('Event state: ', this.state.events);
    }).catch(err => {
      console.log(err);
    })
  }

  // this sets event data on the state of the component
  setUserEvents() {
    let eventsArray = [];

    this.state.events.forEach(function(event) {
      axios.get('/api/event/' + event)
      .then(res => {
        eventsArray.push(res.data);
      }).catch(err => {
        console.log(err);
      });
    })
    const timeStamp = (new Date).getTime();
    console.log('Set User Events: ', timeStamp);
    this.setState({
      userEvents: eventsArray
    })
  }

  updateEventGrid() {
    console.log('Updating event grid!')
    if (tilesData.length > 0) {
      return (
        <div id="profile" style={styles.root}>
          <div id="profilename">{this.props.profile.name}</div>
          <img id="profilepic" src={this.props.profile.picture}></img>
          <GridList
            cellHeight={180}
            style={styles.gridList}
            cols={3}
          >
            <Subheader>Your Events</Subheader>
            {tilesData.map((tile) => (
              <GridTile
                key={tile.image}
                title={tile.title}
                subtitle={<span>time <b>{tile.time}</b></span>}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
                <img src={tile.image} />
              </GridTile>
            ))}
          </GridList>
        </div>
      )
    } else {
      console.log('Loading...');
    }
  }

  render() {
    const timeStamp = (new Date).getTime();
    console.log('USER EVENT STATE: ', this.state.userEvents);
    console.log('Render: ', timeStamp);
    tilesData = this.state.userEvents;

    if (tilesData.length === 0) {
      console.log('Tile data: ', tilesData)
      setTimeout(() => { this.updateEventGrid(); }, 1000)
      return (
        <div id='profile'>
        <div id="profilename">{this.props.profile.name}</div>
        <img id="profilepic" src={this.props.profile.picture}></img>
        </div>
      )
    } else {
      {this.updateEventGrid()}
    }
  }
}

export default Profile