import React from 'react'
import AuthService from '../../config/AuthService.js'
//import styles from './styles.module.css'
import { Modal } from 'react-bootstrap';



export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
  }


  render() {
    const { auth } = this.props
    let close = () => this.setState({ show: false});

    return (
      <div className="login">
        <div id="logo"></div>
        <div id="loginContainer">
          <span id='social'>Social.<span id='ly'>ly</span></span>
          <h2 id="explain">Chat before, during, and after events</h2>
          <button id="loginbutton" onClick={auth.login.bind(this)}>Join</button>
          <div id="aboutuscontainer">
          <button id="aboutus" onClick={() => this.setState({ show: true})} >About us</button>

           <Modal
            show={this.state.show}
            onHide={close}
            container={this}
            aria-labelledby="contained-modal-title">
            <a target="_blank" href="https://github.com/merj4/merj" >
            <Modal.Header closeButton>We are Team merj</Modal.Header>
            </a>

            <Modal.Body>
            <div className="team">
            <a target="_blank" href="https://www.linkedin.com/in/emmavrios/" />
              <img id="teampic" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/0a2/329/026f9ab.jpg" />
              <span className="name">Ema Rios</span>
              <span>　　　Product Owner</span>
            </div>

            <div className="team">
            <a target="_blank" href="https://www.linkedin.com/in/misakimatsumoto/" />
              <img  id="teampic" src="https://avatars2.githubusercontent.com/u/8436387?v=3&s=400" />
              <span className="name">Misaki Matsumoto</span>
              <span>　　　Scrum Master</span>
            </div>

          <a target="_blank" href="https://www.linkedin.com/in/rochelle-v/" />
            <div className="team">
              <img id="teampic" src="https://avatars1.githubusercontent.com/u/23320281?v=3&s=400" />
              <span className="name">Rochelle Valdez</span>
              <span>　　　Senior Fullstack Engineer</span>
            </div>

          <a target="_blank" href="https://www.linkedin.com/in/joanna-wheeler/" />
            <div className="team">
              <img id="teampic" src="https://avatars1.githubusercontent.com/u/23461229?v=3&s=400" />
            <span className="name">Joanna Wheeler</span>
              <span>　　　Fullstack Engineer</span>
            </div>

            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal>
          </div>
      </div>
    </div>

    )
  }
}

export default Login;