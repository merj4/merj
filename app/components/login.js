// every class must have a render function
  // it's recommended that you start with a functional based component and
  // only refactor to a class when you need some added functionality

  // to be discussed/implemented AFTER MVP - don't even bother with this

import React from 'react'
import AuthService from '../../config/AuthService.js'
//import styles from './styles.module.css'

export class Login extends React.Component {


  render() {
    const { auth } = this.props

    return (
      <div className="login">
        <div id="logo"></div>
        <div id="loginContainer">
          <span id='social'>Social.<span id='ly'>ly</span></span>
          <h2 id="explain">Chat before, during, and after events</h2>
          <button id="loginbutton" onClick={auth.login.bind(this)}>Join</button>
          <div id="aboutuscontainer">
          <button id="aboutus">About us</button>
          </div>
        </div>
      </div>

    )
  }
}

export default Login;