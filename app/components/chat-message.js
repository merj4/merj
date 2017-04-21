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

const ChatMessage = (props) => {
  console.log('This is line 44', props)
  return (
    <List>
      <Subheader>Today</Subheader>
      <ListItem
        leftAvatar={<Avatar src={props.image} />}
        rightIconButton={rightIconMenu}
        primaryText={props.user}
        secondaryText={
          <p>
         {props.message}
          </p>
        }
        secondaryTextLines={2}
      />
    </List>
  )
}

export { ChatMessage }