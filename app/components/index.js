import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js';
import Search from './search';
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
      events: []
    }
  }

  componentDidMount() {
    axios.get('/api/events')
    .then(res => {
      console.log(res)
      const events = res.data;
      this.setState({ events });
    });

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <Search />
          <Filter />
          <div className="col-md-12">
            <EventList events={this.state.events} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));
