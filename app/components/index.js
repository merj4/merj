import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js';
import Search from './search';
import Filter from './filter';
import MapView from './mapView'
import ListOrMap from './ListOrMap'
import {EventList} from './eventList';
import {exampleEvents} from '../../events.js';
ntList } from './eventList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import axios from 'axios';


injectTapEventPlugin();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    axios.get('/api/events')
    .then(res => {
      const events = res.data;
      this.setState({ events });
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <Search />
          <Filter />
          <ListOrMap events={this.state.events} />
        </div>
      </MuiThemeProvider>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));
