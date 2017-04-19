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
      <div className="container login">
        <div className="jumbotron">
          <div className="row align-items-center justify-contents-center">
            <div className="col">
              <h1>MERJ</h1>
            </div>
            <div className="w-100"></div>
            <div className="w-100"></div>
            <div className="col">
              <button className="btn btn-primary" onClick={auth.login.bind(this)}>Login</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
