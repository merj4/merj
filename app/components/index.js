import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Routes } from './Router'
import Header from './header.js';
import {Search} from './search';
import Filter from './filter';
import { EventList } from './eventList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import axios from 'axios';
import {EventView} from './eventView'
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';


injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      displayedEvents: [],
      activeEvent: null,
      startDate: moment()
    }
    this.updateEventList = this.updateEventList.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('/api/events/recent')
    .then(res => {
      const events = res.data;
      this.setState({
        events: events,
        displayedEvents: events
      });
    });
  }

  handleEventClick(event) {
    this.setState({
      activeEvent: event
    })
  }

  // build a helper method that will allow us to setState of events to the results of a search

  updateEventList(array) {
    this.setState({ displayedEvents: array });
    console.log('Events have been updated!')
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    if (this.state.activeEvent === null) {
        return (
        <MuiThemeProvider>
          <div >
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
            <Header />
            <Search
              data={this.state.events}
              updateEventList={this.updateEventList} />
            <Filter events={this.state.events} />
            <EventList events={this.state.displayedEvents} handleEventClick={this.handleEventClick.bind(this)}/>
          </div>
        </MuiThemeProvider>
      );
    } else {
        return (
        <MuiThemeProvider>
          <div >
            <Header />
            <Search
              data={this.state.events}
              updateEventList={this.updateEventList} />
            <Filter events={this.state.events} />
            <EventView event={this.state.activeEvent} />
          </div>
        </MuiThemeProvider>
      );
    }
  }
};


ReactDOM.render(<App />, document.querySelector('.container'));

