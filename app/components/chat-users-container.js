import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { ChatUsers } from './chat-users';
import InfiniteScroll from 'react-infinite-scroll-component';
import Paper from 'material-ui/Paper';


let styles = {
  paper: {
    float: 'left',
    marginBottom: 24,
    marginRight: 24,
    width: 360,
    border: 'solid 1px #d9d9d9',
    height: 350,
    overflow: 'hidden'
  },
};

const UsersContainer = (props) => {
  return (
    <Paper zDepth={1} style={styles.paper} > 
      <Subheader>Attendees</Subheader>
      <InfiniteScroll
      height={775}
      hasMore={false}
      loader={<h4>Loading...</h4>}>
        <List>
        {props.users.map((user, i) => 
          <ChatUsers key={i}
          name={user.username}
          image={user.image}
          />
        )}
        </List>
      </InfiniteScroll>
    </Paper>
  )
}

export { UsersContainer }