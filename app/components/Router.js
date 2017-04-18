import React from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Link
} from 'react-router-dom';
import App from './index'
import { EventView } from './eventView'


const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/event" component={EventView} />
    </div>
  </Router>
)

export {Routes} 

