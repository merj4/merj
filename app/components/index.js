import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Routes } from './Router'
import Header from './header.js';
import {Search} from './search';
import Filter from './filter';
import MapView from './mapView'
import ListOrMapButton from './ListOrMapButton'
import { EventList } from './eventList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import axios from 'axios';


injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      displayedEvents: []
    }
    this.updateEventList = this.updateEventList.bind(this);
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

  // build a helper method that will allow us to setState of events to the results of a search

  updateEventList(array) {
    this.setState({ displayedEvents: array });
    console.log('Events have been updated!')
  }


  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <Search
            data={this.state.events}
            updateEventList={this.updateEventList} />
          <Filter events={this.state.events} />
          <Routes />
          <EventList events={this.state.displayedEvents} />
        </div>
      </MuiThemeProvider>
    );
  }
};


ReactDOM.render(<App />, document.querySelector('.container'));

