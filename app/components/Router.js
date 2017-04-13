import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Mapview from './mapView'
import EventList from './eventList'
import TabsExampleSimple from './filter'
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mapView: false,
      listView: true
    };
  }

  mapSet() {
    this.setState({
      mapButton: true,
      listButton: false
    })
  }

  listSet() {
    this.setState({
      mapButton: false,
      listButton: true
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Link to='/map'>
            <TabsExampleSimple buttonValue={this.state.mapButton}
            mapChange={this.mapSet.bind(this)}/>
          </Link>
          <Link to='/list'>
            <ListButton buttonValue={this.state.listButton}
            listChange={this.listSet.bind(this)}/>
          </Link>

          <Route exact path='/map' component={ListOrMap}/>
          <Route exact path='/list' component={ListView}/>
        </div>
      </Router>
    )
  }
}

export default CatNav