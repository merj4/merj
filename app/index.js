import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.js';
import Search from './components/search';
import Filter from './components/filter';
import EventList from './components/eventList';


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
        Hello World
        <Search />
        <Filter />
        <EventList events={this.state.events} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('.app'));
