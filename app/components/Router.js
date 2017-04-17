import React from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Link
} from 'react-router-dom';

const Router = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/event">Event</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={App} />
      <Route path="/event" component={Event} />
    </div>
  </Router>


)