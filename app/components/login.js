import React from 'react'
import AuthService from '../../config/AuthService.js'
//import styles from './styles.module.css'
import { Modal } from 'react-bootstrap';



export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      misaki: false,
    }
  }


  render() {
    const { auth } = this.props
    let close = () => this.setState({ show: false });
    let closing= () => this.setState({ showing: false });

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
            <Modal.Header closeButton id="merj">We are Team merj</Modal.Header>

            <Modal.Body>
            <div className="team">
              <img id="teampic" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/0a2/329/026f9ab.jpg" />
              <span className="name">Ema Rios　</span>
              <span id="role">　　Product Owner 
              <a target="_blank" href="https://www.linkedin.com/in/emmavrios/" />
              <img id="links" src="./images/linkedin.png" />
              <img id="links" src="./images/github.png" />
              </span>
            </div>

            <div className="team">
              <img  id="teampic" src="https://avatars2.githubusercontent.com/u/8436387?v=3&s=400" />
              <span className="name">Misaki Matsumoto</span>
              <span id="role">Scrum Master
              <img id="links" src="./images/linkedin.png" />
              <img id="links" src="./images/github.png" />
              <a target="_blank" href="https://www.linkedin.com/in/misakimatsumoto/" />
              </span>
            </div>

            <div className="team">
              <img id="teampic" src="https://avatars1.githubusercontent.com/u/23320281?v=3&s=400" />
              <span className="name">Rochelle Valdez</span>
              <span id="role">  Senior Fullstack Engineer
              <img id="links" src="./images/linkedin.png" />
              <img id="links" src="./images/github.png" />
              <a target="_blank" href="https://www.linkedin.com/in/rochelle-v/" />
              </span>
            </div>

            <div className="team">
              <img id="teampic" src="https://avatars1.githubusercontent.com/u/23461229?v=3&s=400" />
            <span className="name">  Joanna Wheeler</span>
              <span id="role">Fullstack Engineer
              <img id="links" src="./images/linkedin.png" />
              <img id="links" src="./images/github.png" />
              <a target="_blank" href="https://www.linkedin.com/in/joanna-wheeler/" />
              </span>
            </div>

            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal>
          </div>

            <div id="aboutus">
              Build with Node, Express, React, PostgreSQL, Socket.IO, Bootstrap, and Material-UI
            </div>
    </div>
    </div>
    )
  }
}

export default Login;