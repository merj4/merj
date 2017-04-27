import React, { Component } from 'react'
import { GridList } from 'material-ui/GridList';
import { GridTile } from 'material-ui/GridList';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import axios from 'axios';
import Emojis from './chat-emojis'
import moment from 'moment';

//Override styles of GridList root element
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: 30 + '%',
    padding: 10,
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  icon: {
    position: "absolute",
    top: 49 + "em",
    left: 2 + "em",
    visible: "hidden"
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)'
  }
};

//Start of emojis component
class Emoji extends Component {
  constructor(props) {
    super(props)
    this.state = {
       dropdown: false,
       emojis: Emojis,
       img: null
    }
    this.closeDropdown = this.closeDropdown.bind(this)
    this.openDropdown = this.openDropdown.bind(this)
    this.sendEmoji = this.sendEmoji.bind(this)

  }

//Opens dropdown
  openDropdown(){
    this.setState({dropdown: true})
  }

//Closes dropdown
  closeDropdown(){
    this.setState({dropdown: false})
  }

//Send emoji as message 
  sendEmoji(e) {
    const imageData = {
      body: e.target.src,
      username: this.props.profile.given_name,
      timestamp: moment((new Date).getTime())
      .format("MMMM Do YYYY, h:mm:ss a"),
      image: this.props.profile.picture
    }
    this.props.receiveMessage(imageData);
    this.props.saveToDatabase(imageData)
  }
//Dropdown serves as container and iterator for array of gif results
  render() {
  return (
    <IconMenu
      style={styles.icon}
      open={this.state.dropdown}
      iconButtonElement={<div></div>}
      anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
      autoWidth={false}
      className={''}
      onClick={this.closeDropdown}
    >
      <div style={styles.root}>
        <GridList style={styles.gridList} 
        >
        {this.state.emojis.map((emoji, i) => (
          <GridTile key={i}>
            <img src={emoji.src} onClick={this.sendEmoji}/>
          </GridTile>          
          ))}
        </GridList>
      </div>
    </IconMenu>
    );
  }
}

export { Emoji }