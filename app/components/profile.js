// every class must have a render function
  // it's recommended that you start with a functional based component and
  // only refactor to a class when you need some added functionality

  // We should get authentication implemented before we work this out

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    console.log(this.props.profile)

    return (
    <div id='profile'>
    <img id="profilepic" src={this.props.profile.picture}></img>
    <div id="profilename">{this.props.profile.name}</div>
    </div>

    )
  }
}

export default Profile