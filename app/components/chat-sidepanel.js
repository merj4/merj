import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import DatePicker from 'material-ui/DatePicker';
import Paper from 'material-ui/Paper';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';


const style = {
  height: 250,
  width: 250,
  margin: 70,
  textAlign: 'center',
};


const styles = {
  button: {
    margin: 12,
    padding: 10,
  },
  paper: {
  height: 250,
  width: 250,
  margin: 70,
  textAlign: 'center',
  },
};

class SidePanel extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleClose = this.handleClose.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  componentDidMount() {
    console.log('DatePickerDialog', window.DatePickerDialog)
    console.log('DatePicker', window.DatePicker._refs)
    // const url = `api.openweathermap.org
    // /data/2.5/forecast?zip=
    // ${this.state.zipcode},${country code}`

  }
  handleToggle() {
  this.setState({
    open: !this.state.open}); 
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    return (
      <div>
        <RaisedButton
          label="Open Drawer"
          onTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={400}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
        <DatePicker hintText="Show Calendar" container="inline" mode="landscape" textFieldStyle={{marginLeft: 70}} 
        dialogContainerStyle={{marginLeft: 70}}/>
        <Paper style={styles.paper} zDepth={3} 
        children={
        <RaisedButton
        label="Event One"
        labelPosition="before"
        style={styles.button}
        containerElement="label"
        labelColor={white}
        backgroundColor={cyan500}
        >

        </RaisedButton>}
        />
        <Paper style={styles.paper} zDepth={3} 
        children={
        <RaisedButton
        label="Event Two"
        labelPosition="before"
        style={styles.button}
        containerElement="label"
        backgroundColor="#a4c639"
        labelColor={white}
        >
        </RaisedButton>}
        />
        <Paper style={styles.paper} zDepth={3} 
        children={
        <RaisedButton
        label="Event Three"
        labelPosition="before"
        style={styles.button}
        containerElement="label"
        labelColor={white}
        backgroundColor={pinkA200}
        >
        </RaisedButton>}
        />


        </Drawer>
      </div>
    );
  }
}

export default muiThemeable()(SidePanel) 

//res.list = array of objects / temps over a period of time 
//res.list[0].weather = 
//res.city.name = city

//Sample DATA BY DATE:
// {
//       "dt": 1493197200,
//       "main": {
//         "temp": 55.38,
//         "temp_min": 52.56,
//         "temp_max": 55.38,
//         "pressure": 989.37,
//         "sea_level": 1025.37,
//         "grnd_level": 989.37,
//         "humidity": 76,
//         "temp_kf": 1.57
//       },
//       "weather": [
//         {
//           "id": 800,
//           "main": "Clear",
//           "description": "clear sky",
//           "icon": "01n"
//         }
//       ],
//       "clouds": {
//         "all": 0
//       },
//       "wind": {
//         "speed": 2.71,
//         "deg": 27.0025
//       },
//       "sys": {
//         "pod": "n"
//       },
//       "dt_txt": "2017-04-26 09:00:00"
//     }