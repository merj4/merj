import React from 'react'
import moment from 'moment';
import Paper from 'material-ui/Paper';

let styles = {
  root: {
    float: 'left',
    marginBottom: 24,
    marginRight: 24,
    width: 300,
    border: 'solid 1px #d9d9d9',
    height: 150,
    overflow: 'hidden',
    background: '#f2f2f2',
    padding: 15,
  }
};

let EventDetails = (props) => {
    return (
      <Paper id="eventDetails" style={styles.root} zDepth={1}>
        <div style={styles.container}>
          <h3>{props.activeEvent.title}</h3>
          <div>{moment(props.activeEvent.date)
            .format('MMMM DD, YYYY')}</div>
          <div>{props.activeEvent.time}</div>
          <br />
          <div>{props.activeEvent.location}</div>
        </div>
    </Paper>
    );
}

export { EventDetails }