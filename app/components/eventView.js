import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import {Popover} from 'react-bootstrap'



const EventView = () => (
  <div>
    <List>
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

    <Popover
      id="popover-basic"
      placement="right"
      positionLeft={200}
      positionTop={750}
      title="Popover right"
    >
      And here's some <strong>amazing</strong> content. It's very engaging. right?
    </Popover>

    <Popover
      id="popover-basic"
      placement="left"
      positionLeft={600}
      positionTop={900}
      title="Popover left"
    >
      And here's some <strong>amazing</strong> content. It's very engaging. right?
    </Popover>
  </div>
);


export { EventView }