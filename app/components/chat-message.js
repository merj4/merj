import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);
const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

class ChatMessage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: this.props.len
    }
  }

  // onMessage() {
  //   this.setState({
  //     count: this.state.count++
  //   })
  // }

  render() {

    return (
      <List>
        <Subheader>Today</Subheader>
        <ListItem
          leftAvatar={<Avatar src="images/jason.jpg" />}
          rightIconButton={rightIconMenu}
          primaryText="JSON.stringify(kim)"
          secondaryText={
            <p>
              {this.props.message}
            </p>
          }
          secondaryTextLines={2}
        />
      </List>
    )
  }
  

}

export { ChatMessage }