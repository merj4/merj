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

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const TabsExampleSimple = () => (
  <Tabs>
    <Tab label="Item One" >
      <div>
        <h2 style={styles.headline}>Tab One</h2>
        <p>
          This is an example tab.
        </p>
        <p>
          You can put any sort of HTML or react component in here. It even keeps the component state!
        </p>
        <Slider name="slider0" defaultValue={0.5} />
      </div>
    </Tab>
    <Tab label="Item Two" >
      <div>
        <h2 style={styles.headline}>Tab Two</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab
      label="onActive"
      data-route="/home"
      onActive={handleActive}
    >
      <div>
        <h2 style={styles.headline}>Tab Three</h2>
        <p>
          This is a third example tab.
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