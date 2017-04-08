import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../public/components/header';
// import App from './App';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));