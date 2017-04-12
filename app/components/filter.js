import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import ListOrMap from './ListOrMap';

const styles = {
    headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class Filter extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: 'a',
  //   };
  // }

  // handleChange = (value) => {
  //   this.setState({
  //     value: value,
  //   });
  // };

  render() {
    return (
      <Tabs
        // value={this.state.value}
        // onChange={this.handleChange}
      >
        <Tab label="Distance"  >
          <div style={styles.headline}></div>
        </Tab>
        <Tab label="Category" >
          <div style={styles.headline}></div>
        </Tab>
        <Tab label="Size" >
          <div style={styles.headline}></div>
        </Tab>
        <Tab label="Date" >
          <div style={styles.headline}></div>
        </Tab>
        <Tab label="Now" >
          <div style={styles.headline}></div>
        </Tab>
        <Tab label="Hot" >
          <div style={styles.headline}></div>
        </Tab>
        <Tab label="Map" >
          <div style={styles.headline}>
          </div>
        </Tab>
      </Tabs>
    );
  }
}