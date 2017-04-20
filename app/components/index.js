import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js';
import {Search} from './search';
import Filter from './filter';
import { EventList } from './eventList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import axios from 'axios';
import {EventView} from './eventView'
import AuthService from '../../config/AuthService.js'
import Login from './login.js'
import Profile from './profile.js'
import moment from 'moment';

injectTapEventPlugin();


const auth = new AuthService('pzuivu1BmVpSBZN3oOAxF3MSGIywGW94', 'merjgirls.auth0.com');
console.log("auth: " + auth);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      displayedEvents: [],
      activeEvent: null,
      profile: auth.getProfile(),
      showProfile: false,
      date: moment()
    }

    auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile})
      //this.repod = new repoService();
    })
    auth.on('logged_out', (bye) => {
      this.setState({profile: auth.getProfile()})
      //this.render();
    })
    this.updateDateState = this.updateDateState.bind(this);
    this.updateEventList = this.updateEventList.bind(this);
    this.showProfile = this.showProfile.bind(this);
  }

  logout(){
    auth.logout()//add props.auth.on('logged-out') event which should be triggered in authservice.js which refreshes page. and same for logged in or authenticated events rather than the use of routes in authservice and here.
    //this.context.router.push('/login');//
  }


//TODO: add logout bu
  // logout(){
  //   this.props.auth.logout()

    //add props.auth.on('logged-out') event which should be triggered in authservice.js which refreshes page. and same for logged in or authenticated events rather than the use of routes in authservice and here.
    //this.context.router.push('/login');//
  // }

  componentDidMount() {
    axios.get('/api/events/recent')
    .then(res => {
      const events = res.data;
      this.setState({
        events: events,
        displayedEvents: events
      });
    });
  }

  handleEventClick(event) {
    this.setState({
      activeEvent: event
    })
  }

  // build a helper method that will allow us to setState of events to the results of a search

  updateEventList(array) {
    this.setState({ displayedEvents: array });
    console.log('Events have been updated!')
  }

  showProfile() {
    // console.log("showProfile Ran")
    this.setState({
      showProfile: true,
      activeEvent: null
    })
    console.log("showProfile: " + this.state.showProfile)
    console.log("activeEvent: " + this.state.activeEvent)
  }

  updateDateState(newDate) {
    console.log('Updating the date in index: ', this.state.date, 'Arg:', newDate)
    this.setState({
      date: newDate
    })
    this.refs.child.performSearch(newDate);
  }

  render() {
    const { profile } = this.state;
    //const requireAuth = (nextState, replace) => {
      if (!auth.loggedIn()) {
       //replace({ pathname: '/login' })
       return (
        <div>
          <Login auth={auth}/>
        </div>
        )
      } else {
        if (this.state.activeEvent === null && this.state.showProfile === false) {
            return (
            <MuiThemeProvider>
              <div >
                <Header auth={auth} profile={profile} showProfile={this.showProfile}/>
                <Search
                  data={this.state.events}
                  updateEventList={this.updateEventList}
                  dateSearch={this.state.date}
                  ref='child'
                />
                <Filter
                  events={this.state.events}
                  updateDate={this.updateDateState}
                />
                <EventList events={this.state.displayedEvents} handleEventClick={this.handleEventClick.bind(this)}/>
              </div>
            </MuiThemeProvider>
          );
        } else if (this.state.activeEvent !== null && this.state.showProfile === false) {
            return (
            <MuiThemeProvider>
              <div >
                <Header auth={auth} profile={profile} showProfile={this.showProfile}/>
                <Search
                  data={this.state.events}
                  updateEventList={this.updateEventList}
                  dateSearch={this.state.date}
                  ref='child'
                />
                <Filter
                  events={this.state.events}
                  date={this.updateDateState}
                />
                <EventView event={this.state.activeEvent} />
              </div>
            </MuiThemeProvider>
          );
        } else if (this.state.activeEvent === null && this.state.showProfile === true) {
          return (
          <MuiThemeProvider>
              <div >
                <Header auth={auth} profile={profile} showProfile={this.showProfile}/>
                <Search
                  data={this.state.events}
                  updateEventList={this.updateEventList} />
                <Filter events={this.state.events} />
                <Profile auth={auth} profile={profile} />
              </div>
            </MuiThemeProvider>
          )
        }
      }
  }
}

ReactDOM.render(<App auth={auth} />, document.querySelector('.container'));
