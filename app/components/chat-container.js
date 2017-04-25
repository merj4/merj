import React, { Component } from 'react';
import { ChatMessage } from './chat-message';
import InfiniteScroll from 'react-infinite-scroll-component';

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
      <InfiniteScroll
      height={775}
      hasMore={false}
      loader={<h4 >Loading...</h4>}>
      {props.messages.map((message, i) => 
        <ChatMessage message={message.body} key={i} 
        user={message.username}
        image={message.image}
        time={message.timestamp}/>
      )}
      </InfiniteScroll>
    </MobileTearSheet>
  )
}

export { ChatContainer }