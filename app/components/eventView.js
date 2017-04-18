import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import {Popover} from 'react-bootstrap'



const EventView = () => (
  <Row>
    <List Col xs={6}>
      <Subheader>Recent chats</Subheader>
      <ListItem
        primaryText="JSON.stringify(kim)"
        leftAvatar={<Avatar src="images/jason.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="jDCstubbs"
        leftAvatar={<Avatar src="images/jordan.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Simon Ledger"
        leftAvatar={<Avatar src="images/simon.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="J<3sOld_Bay"
        leftAvatar={<Avatar src="images/jesse.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="NeverFaized"
        leftAvatar={<Avatar src="images/faiz.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
    </List>
  </Row>
);


export { EventView }