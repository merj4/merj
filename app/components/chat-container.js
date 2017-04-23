import React, { Component } from 'react';
import { ChatMessage } from './chat-message'

let MobileTearSheet = React.createClass({

  propTypes: {
    height: React.PropTypes.number
  },

  getDefaultProps() {
    return {
      height: 775
    };
  },

  render() {

    let styles = {
      root: {
        float: 'right',
        marginBottom: 24,
        marginRight: 24,
        width: 700

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


const ChatContainer = (props) => {
  return (
    <MobileTearSheet> 
      <div className="messages">
      {props.messages.map((message, i) => 
        <ChatMessage message={message.body} key={i} 
        user={message.username}
        image={message.image}
        time={message.time}/>
      )}
      </div>
    </MobileTearSheet>
  )
}

export { ChatContainer }