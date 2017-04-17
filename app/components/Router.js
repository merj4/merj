import React from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Link
} from 'react-router-dom';
import { Header } from './header'
import { EventView } from './eventView'

const Routes = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/event">Event</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Header} />
      <Route exact path="/event" component={EventView} />
    </div>
  </Router>
)

export  {Routes} 