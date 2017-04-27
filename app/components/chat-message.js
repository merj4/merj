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

const styles = {
  root: {
    display: 'table',
  },
  child: {
    display: 'table-row'
  },
}
const ChatMessage = (props) => {
  if (props.message.slice(-3).includes("g")) {
    return (
      <List>
        <Subheader>{props.time}</Subheader>
        <ListItem
          leftAvatar={<Avatar src={props.image} />}
          rightIconButton={rightIconMenu}
          primaryText={<span style={{fontSize: 18 + 'px'}}>{props.user}</span>}
          secondaryText={
          <div className="row" style={styles.root}>
            <div className="col-xs-8 col-xs-offset-2" style={styles.child} >
              <img  src={props.message}/>
            </div>
          </div>
          }
        />
      </List>
    )
  } else { 
  return (
    <List>
      <Subheader>{props.time}</Subheader>
      <ListItem
        leftAvatar={<Avatar src={props.image} />}
        rightIconButton={rightIconMenu}
        primaryText={<span style={{fontSize: 18 + 'px'}}>{props.user}</span>}
        secondaryText={
          <p>
         <span style={{color: 'black', fontSize: 22 + 'px'}}>{props.message}</span>
          </p>
        }
        secondaryTextLines={2}
      />
    </List>
  )}
}

export { ChatMessage }