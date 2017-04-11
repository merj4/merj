import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js';
import Search from './search';
import Filter from './filter';
import EventList from './eventList';
import exampleEvents from '../../events.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }
  componentDidMount() {
    console.log(exampleEvents)
    this.getEvents();
  }

  getEvents() {
    this.setState({
      events: exampleEvents
    }) 
  }


  render() {
    return (
      <div>
        <Header />
        <Search />
        <Filter />
        <div className="col-md-12">
          <EventList events={this.state.events} />
        </div>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));
