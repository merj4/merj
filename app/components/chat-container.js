import React from 'react';
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


const ChatContainer = (props) => (
  <div>
    <MobileTearSheet>
      <ChatMessage event={props.event}/>
    </MobileTearSheet>
  </div>
);

export { ChatContainer }