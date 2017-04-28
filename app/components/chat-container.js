import React, { Component } from 'react';
import { ChatMessage } from './chat-message';
import InfiniteScroll from 'react-infinite-scroll-component';
import Paper from 'material-ui/Paper';

let styles = {
  paper: {
    float: 'right',
    marginBottom: 24,
    marginRight: 0,
    width: 490,
    border: 'solid 1px #d9d9d9',
    height: 400,
    overflow: 'hidden'
  }
};
  

const ChatContainer = (props) => {
  return (
    <Paper zDepth={1} style={styles.paper} > 
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
    </Paper>
  )
}

export { ChatContainer }