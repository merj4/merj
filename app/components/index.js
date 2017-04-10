import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js';
import Search from './search';
import Filter from './filter';
import EventList from './eventList';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    }

    this.componentDidMount = this.componentDidMount.bind(this)

  }

  componentDidMount() {
    var myInit = {
      method: "GET"
    };

    fetch("/", myInit).then((response) => {
      return response.json();
    }).then((data) => {
      this.state.events = data;
      this.setState(this.state);
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Search />
        <Filter />
        <EventList events={this.state.events} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));
