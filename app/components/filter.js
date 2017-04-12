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
      <div>
        <h2 style={styles.headline}>Size</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab label="Date" >
      <div>
        <h2 style={styles.headline}>Date</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab label="Now" >
      <div>
        <h2 style={styles.headline}>Now</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab label="Hot" >
      <div>
        <h2 style={styles.headline}>Hot</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
  </Tabs>
);

export default TabsExampleSimple;

// import React from 'react';
// import { Button, Col, Row } from 'react-bootstrap';

// // every class must have a render function
//   // it's recommended that you start with a functional based component and
//   // only refactor to a class when you need some added functionality

// // this header will contain our app name in the center, which will also be a clickable link to go to the homepage/eventsList

// // on the right side of the header, we need a + button to add an event

// const Filter = () => {
//   return (
//     <div>
//       <Row>
//         <Col xs={2} className="text-center">Distance</Col>
//         <Col xs={2} className="text-center">Category</Col>
//         <Col xs={2} className="text-center">Date</Col>
//         <Col xs={2} className="text-center">Now</Col>
//         <Col xs={2} className="text-center">Hot</Col>
//         <Col xs={2} className="text-center"><Button className="map-view">Map</Button></Col>
//       </Row>
//     </div>
//   );
// }

// export default Filter;