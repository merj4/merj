import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  // set state with UserId
  // get all events from EventParticipant where the UserId matches current user

  render() {
    console.log(this.props)

    return (
    <div id='profile'>
    <div id="profilename">{this.props.profile.name}</div>
    <img id="profilepic" src={this.props.profile.picture}></img>
    </div>

    )
  }
}

export default Profile