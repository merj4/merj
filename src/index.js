import React, { Component } from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Search from './components/search';
import Filter from './components/filter';
import EventList from './components/eventList';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    };

    this.componentDidMount = this.componentDidMount.bind(this)

  }

var dummyData = [
  {
    location: "Santa Barbara, CA",
    date: "Aug. 10, 2017",
    title: "Fun in the Sun",
    time: "2:00 pm",
    category: "Outdoor",
    description: "Come out to the beach and enjoy company, food and sand castles",
    image: "http://www.unique-canvas.com/media/images/popup/meer-und-traumstraende-fotografie--fotomotiv-beach-party--816406.jpg"
  },

  {
    location: "Berkeley, CA",
    date: "Aug. 10, 2017",
    title: "Fun in the Sun",
    time: "2:00 pm",
    category: "Outdoor",
    description: "Come out to the beach and enjoy company, food and sand castles",
    image: "http://www.unique-canvas.com/media/images/popup/meer-und-traumstraende-fotografie--fotomotiv-beach-party--816406.jpg"
  }
]

  componentDidMount() {
    var myInit = {
      method: "GET"
    };

    fetch("/api/events", myInit).then((response) => {
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
