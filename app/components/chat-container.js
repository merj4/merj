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


class ChatContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isTyping: ''
    }
  }
  
  handleTyping() {
    this.props.socket.on('typing', (data) => {
      console.log(data.message)
    })
  }
  render() {
    return (
    <div>
      <MobileTearSheet> 
      {this.props.messages.map((message, i) => 
        <ChatMessage message={message.body} key={i} 
        user={this.props.profile.given_name}
        image={this.props.profile.picture}/>
      )}
        {this.state.isTyping}
      </MobileTearSheet>
    </div>
  )};
}

export { ChatContainer }