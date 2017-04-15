import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js';
import {Search} from './search';
import Filter from './filter';
import {EventList} from './eventList';
import {exampleEvents} from '../../events.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import axios from 'axios';


injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [], // master list of events
      displayedEvents: [] // what is rendered in the view
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
        <div >
          <Header />
          <Search
            data={this.state.events}
            updateEventList={this.updateEventList}
          />
          <Filter events={this.state.events} />
          <EventList events={this.state.events} />
        </div>
      </MuiThemeProvider>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));