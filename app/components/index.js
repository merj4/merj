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
import MapView  from './mapView.js';

injectTapEventPlugin();

//Helper method for debugging
window.test = (label, data) => {
  console.log('****' + label + ': ' + data)
}

const auth = new AuthService('pzuivu1BmVpSBZN3oOAxF3MSGIywGW94', 'merjgirls.auth0.com');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      displayedEvents: [],
      activeEvent: null,
      profile: auth.getProfile(),
      userId: null,
      showProfile: false,
      date: moment(),
      showMap: false,
      users: [],
      userEventIds: [],
      userEvents: []
    }

    auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile})
      console.log("Profile: ", this.state.profile);
      // when a user has logged in use axios to make server request
        // does this user exist? Yes? Send back an 'ok'
          // No? Add them to the database and send back an 'ok'
      //this.repod = new repoService();
      // checkUser();
      const p = this.state.profile;

      axios.post('/api/user', {
        username: p.given_name,
        email: p.email,
        image: p.picture
      }).then(res => {
        console.log('User added to the database!')
      }).catch(err => {
        console.log('There was an error:', err);
      })
    })

    auth.on('logged_out', (bye) => {
      this.setState({profile: auth.getProfile()})
      //this.render();
    })
    this.updateDateState = this.updateDateState.bind(this);
    this.updateEventList = this.updateEventList.bind(this);
    this.showProfile = this.showProfile.bind(this);
    this.showProfileSetToFalse = this.showProfileSetToFalse.bind(this);
    this.showMap = this.showMap.bind(this);
    this.joinEvent = this.joinEvent.bind(this);
    this.setUserEvents = this.setUserEvents.bind(this);
  }


  logout(){
    auth.logout()//add props.auth.on('logged-out') event which should be triggered in authservice.js which refreshes page. and same for logged in or authenticated events rather than the use of routes in authservice and here.
    //this.context.router.push('/login');//
  }


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
    })

    axios.get('/api/users')
    .then(res => {
      const users = res.data;
      let userId = null;
      let p = this.state.profile;

      users.forEach(function(user) {
        if (user.email === p.email) {
          userId = user.id;
        }
      })
      this.setState({
        userId: userId
      });

      console.log('User Id: ', this.state.userId)
      // get a user's event ids
      axios.get('/api/userevents/' + this.state.userId)
      .then(res => {
        let eventIds = [];
        let eventData = res.data;

        eventData.forEach(function(event) {
          eventIds.push(event.id);
        })
        this.setState({
          userEventIds: eventIds
        })
        // this.state.events = eventIds;
        this.setUserEvents();
        console.log('Event state: ', this.state.userEventIds);
      }).catch(err => {
        console.log(err);
      })
    })
  }

  // this sets event data on the state of the component
  setUserEvents() {
    let eventsArray = [];

    this.state.userEventIds.forEach(function(event) {
      console.log('EVENT: ', event)
      axios.get('/api/event/' + event)
      .then(res => {
        eventsArray.push(res.data);
      }).catch(err => {
        console.log(err);
      });
    })
    this.setState({
      userEvents: eventsArray
    })
    console.log('Users events: ', this.state.userEvents);
  }

  handleEventClick(event) {
    let eventId = event.id;
    let userId = this.state.userId

    if (event !== null) {
      this.state.activeEvent = event;
      this.forceUpdate();
      this.joinEvent(eventId, userId);
    } else {
      this.setState({
        activeEvent: event
      })
    }
  }

  joinEvent(eventId, userId) {
    axios.post('/api/joinevent', {
      EventId: eventId,
      UserId: userId
    }).then(res => {
      console.log('User has joined the event!', eventId, userId)
    }).catch(err => {
      console.log('There was an error:', err);
    })
  }

  // build a helper method that will allow us to setState of events to the results of a search

  updateEventList(array) {
    this.setState({ displayedEvents: array });
  }


  showProfile() {
    // console.log("showProfile Ran")
    this.setState({
      showProfile: true,
      activeEvent: null,
      showMap: false
    })
    // console.log("showProfile: " + this.state.showProfile)
    // console.log("activeEvent: " + this.state.activeEvent)
  }

//render eventList (bad naming sorry, ignore the naming of this method)
  showProfileSetToFalse() {
    this.setState({
      showProfile: false,
      activeEvent: null,
      showMap: false
    })
    this.forceUpdate();
  }

  showMap() {
    this.setState({
      showMap: !this.state.showMap,
      showProfile: false
    })
  }

  updateDateState(newDate) {
    // console.log('Updating the date in index: ', this.state.date, 'Arg:', newDate)
    this.setState({
      date: newDate
    })
    this.refs.child.performSearch(newDate); // apparently you can use the methods of child compoents inside of parent components
    // you must add ref='child' to the child component you want to borrow the method from
  }



  render() {
    // console.log('Users id: ', this.state.users)
    const { profile } = this.state;
    //const requireAuth = (nextState, replace) => {
      if (!auth.loggedIn()) {
       //replace({ pathname: '/login' })
       return (
        <div id='logincontainer'>
          <Login auth={auth}/>
        </div>
        )
      } else {
        //showEventList (home page)
        if (this.state.activeEvent === null && this.state.showProfile === false && this.state.showMap === false) {
            return (
            <MuiThemeProvider>
              <div>
                <Header
                  auth={auth}
                  profile={profile}
                  showProfile={this.showProfile}
                  showProfileSetToFalse={this.showProfileSetToFalse}
                />
                <Search
                  data={this.state.displayedEvents}
                  updateEventList={this.updateEventList}
                  dateSearch={this.state.date}
                  ref='child'
                  handleEventClick={this.handleEventClick.bind(this)}
                />
                <Filter
                  events={this.state.events}
                  eventsdisplayed={this.state.displayedEvents}
                  updateDate={this.updateDateState}
                  handleEventClick={this.handleEventClick.bind(this)}
                  showMap={this.showMap}
                  updateEventList={this.updateEventList}
                />
              <MuiThemeProvider>
                <EventList
                  events={this.state.displayedEvents}
                  handleEventClick={this.handleEventClick.bind(this)}
                />
               </MuiThemeProvider>
              </div>
            </MuiThemeProvider>
          );
        //shows an individual event after clicking "would like to go"
        } else if (this.state.activeEvent !== null && this.state.showProfile === false && this.state.showMap === false) {
          // console.log('activeEvent in index.js', this.state.activeEvent)
            return (
            <MuiThemeProvider >
              <div>
                <Header
                  auth={auth}
                  profile={profile}
                  showProfile={this.showProfile}
                  showProfileSetToFalse={this.showProfileSetToFalse}
                />
                <Search
                  data={this.state.displayedEvents}
                  updateEventList={this.updateEventList}
                  dateSearch={this.state.date}
                  ref='child'
                  handleEventClick={this.handleEventClick.bind(this)}
                />
                <Filter
                  events={this.state.events}
                  eventsdisplayed={this.state.displayedEvents}
                  updatedate={this.updateDateState}
                  updateEventList={this.updateEventList}
                  handleEventClick={this.handleEventClick.bind(this)}
                  showMap={this.showMap}
                />
                <EventView
                  activeEvent={this.state.activeEvent}
                  profile={this.state.profile}
                  users={this.state.users}
                />
              </div>
            </MuiThemeProvider>
          );
        //shows the user's profile
        } else if (this.state.activeEvent === null && this.state.showProfile === true && this.state.showMap === false) {
          return (
          <MuiThemeProvider>
              <div>
                <Header
                  auth={auth}
                  profile={profile}
                  showProfile={this.showProfile}
                  showProfileSetToFalse={this.showProfileSetToFalse}
                />
                <Search
                  data={this.state.displayedEvents}
                  updateEventList={this.updateEventList}
                  dateSearch={this.state.date}
                  ref='child'
                  handleEventClick={this.handleEventClick.bind(this)}
                />
                <Filter
                  events={this.state.events}
                  eventsdisplayed={this.state.displayedEvents}
                  updatedate={this.updateDateState}
                  updateEventList={this.updateEventList}
                  handleEventClick={this.handleEventClick.bind(this)}
                  showMap={this.showMap}
                />
                <Profile
                  auth={auth}
                  profile={profile}
                  userId={this.state.userId}
                  handleEventClick={this.handleEventClick.bind(this)}
                  userEvents={this.state.userEvents}
                />
              </div>
          </MuiThemeProvider>
          )
        //shows the map view
        } else if (this.state.activeEvent === null && this.state.showProfile === false && this.state.showMap === true) {
          return (
            <MuiThemeProvider>
              <div>
                <Header
                  auth={auth}
                  profile={profile}
                  showProfile={this.showProfile}
                  showProfileSetToFalse={this.showProfileSetToFalse}
                />
                <Search
                  data={this.state.displayedEvents}
                  updateEventList={this.updateEventList}
                  dateSearch={this.state.date}
                  ref='child'
                  handleEventClick={this.handleEventClick.bind(this)}
                />
                <Filter
                  events={this.state.events}
                  eventsdisplayed={this.state.displayedEvents}
                  updateDate={this.updateDateState}
                  handleEventClick={this.handleEventClick.bind(this)}
                  showMap={this.showMap}
                  updateEventList={this.updateEventList}
                />
                <MapView
                  events={this.state.events}
                  eventsdisplayed={this.state.displayedEvents}
                  updateEventList={this.updateEventList}
                  handleEventClick={this.handleEventClick.bind(this)}
                />
              </div>
            </MuiThemeProvider>
          );
        }
      }
  }
}

ReactDOM.render(<App auth={auth} />, document.querySelector('.container'));