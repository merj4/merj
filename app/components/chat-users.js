import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';


const ChatUsers = (props) => {
  return (
  <List >
    <ListItem
      primaryText={props.name}
      leftAvatar={<Avatar src={props.image} />}
      rightIcon={<CommunicationChatBubble />}
    />
  </List>
)}



export { ChatUsers }