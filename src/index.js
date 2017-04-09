import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Search from './components/search';
import Navigation from './components/filter';
// import App from './App';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Header />
        <Search />
        <Navigation />
      </div>

    );
  }
};


