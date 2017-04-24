import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { ChatUsers } from './chat-users'


let MobileTearSheet = React.createClass({

  propTypes: {
    height: React.PropTypes.number
  },

  getDefaultProps() {
    return {
      height: 350
    };
  },

  render() {

    let styles = {
      root: {
        float: 'left',
        marginBottom: 24,
        marginRight: 24,
        width: 360

      },

      container: {
        border: 'solid 1px #d9d9d9',
        height: this.props.height,
        overflow: 'hidden'
      }
    };

    return (
      <div style={styles.root}>
        <div style={styles.container}>
          {this.props.children}
        </div>
      </div>
    );
  }

});

const UsersContainer = (props) => {
  // console.log('UsersContainer: ', props)
  return (
    <MobileTearSheet >
      <Subheader>Attendees</Subheader>
        <List>
        {props.users.map((user, i) => 
          <ChatUsers key={i}
          name={user.username}
          image={user.image}
          />
        )}
        </List>
    </MobileTearSheet>
  )
}

export { UsersContainer }