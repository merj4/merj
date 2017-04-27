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
      userEvents: this.props.userEvents
    }
    // this.getUserEvents = this.getUserEvents.bind(this);
    // this.setUserEvents = this.setUserEvents.bind(this);
    tilesData = this.state.userEvents;
  }

  // get all events from EventParticipant where the UserId matches current user

  render() {
    return (
      <div id="profile">
        <div id="profilename">{this.props.profile.name}</div>
        <img id="profilepic" src={this.props.profile.picture}></img>
        <div id="user-events" style={styles.root}>
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
                subtitle={<span>Time: <b>{tile.time}</b></span>}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
                <img src={tile.image} />
              </GridTile>
            ))}
          </GridList>
        </div>
      </div>
    )
  }
}

export default Profile