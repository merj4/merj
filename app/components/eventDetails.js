import React, { Component } from 'react';

class EventDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let styles = {
      root: {
        float: 'left',
        marginBottom: 24,
        marginRight: 24,
        width: 360,

      },

      container: {
        border: 'solid 1px #d9d9d9',
        height: this.props.height,
        overflow: 'hidden',
      }
    };
          console.log('eventDetails', this.props.activeEvent)

    return (
      <div id="eventDetails">
      <div style={styles.root}>
        <div style={styles.container}>
          <h3>{this.props.activeEvent.title}</h3>
          <div>{this.props.activeEvent.date}</div>
          <div>{this.props.activeEvent.time}</div>
          <div>{this.props.activeEvent.location}</div>
          <div id="descriptioninchat">{this.props.activeEvent.description}</div>
        </div>
      </div>
    </div>
    );
  }

};

export { EventDetails }