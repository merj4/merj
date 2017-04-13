import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

const styles = {
    headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const TabsExampleSimple = () => (
  <Tabs>
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
      <div style={styles.headline}></div>
    </Tab>
  </Tabs>
);

export default TabsExampleSimple;