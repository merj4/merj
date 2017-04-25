import React, { Component } from 'react';
import { Gifs } from './chat-giphy';
import { orange500, blue500 } from 'material-ui/styles/colors';
import { Button, Modal } from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import PhotoIcon from 'material-ui/svg-icons/image/add-a-photo'
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import moment from 'moment';
import axios from 'axios';
 //////CLOUDINARY UPLOAD IMAGE//////////
let imgPreview = document.getElementById('img-preview');
let imgFormPreview = document.getElementById('img-form-preview');

const CLOUDINARY_URL =  'https://api.cloudinary.com/v1_1/dcjoeciha/upload';
const CLOUDINARY_UPLOAD_PRESET = "ceydn5w3";

const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    fontWeight: "bold",
    width: 93 + "%",
    position: "absolute",
    bottom: 0 + "em",
  },
  floatingLabelStyle: {
    color: orange500,
    position: "absolute",
    bottom: 1 + "em",
    fontSize: 22 + "px"
  },
  floatingLabelFocusStyle: {
    color: blue500,
    position: "absolute",
    bottom: 1 + "em",
  },
  mediumIcon: {
    width: 48,
    height: 48,
  },
  medium: {
    width: 96,
    height: 96,
    position: "absolute",
    right: 10 + "em"

  }
};


class ChatInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      image: '',
      query: null,
    }
    // this.handleInputChange = this.handleInputChange.bind(this)
    this.onImgUpload = this.onImgUpload.bind(this)
    this.onFileSelect = this.onFileSelect.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  

  handleSubmit(e) {
    const body = e.target.value;
    if (e.keyCode === 13 && body){
    const message = {
      body,
      username: this.props.profile.given_name,
      timestamp: moment((new Date).getTime())
      .format("MMMM Do YYYY, h:mm:ss a"),
      image: this.props.profile.picture
    }
      e.target.value = ''      
      this.props.receiveMessage(message);
      this.props.saveToDatabase(message);
      this.refs.child.handleQuery(this.state.query)
      this.refs.child.handleDropdown()
      this.refs.child.getGifs()
    }
  }


  // handleInputChange(e) {
  //   console.log('handleInputChange: ', e.target.value)
  //   this.setState({ query: e.target.value })
  //   if (e.keyCode === 32 && this.state.query === ".gif") {
  //   }
  // }
  handleClick() {
    this.setState({
      show: !this.state.show
    })
  }

  insertURL(e) {
    this.setState({
      image: e.target.value
    })
  }

  onFileSelect(e) {
  const file = e.target.files[0];
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  axios({
    url: CLOUDINARY_URL,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: formData
    }).then((res) => {
      const img = res.data.secure_url
      this.setState({
        image: img
      })
    }).catch((err) => {
      console.error(err);
    })
  }

  onImgUpload() {
    const imageData = {
      body: this.state.image,
      username: this.props.profile.given_name,
      timestamp: moment((new Date).getTime())
      .format("MMMM Do YYYY, h:mm:ss a"),
      image: this.props.profile.picture
    }
    this.props.receiveMessage(imageData);
    
    const upload = {
      body: this.state.image,
      username: this.props.profile.given_name,
      timestamp: moment((new Date).getTime())
      .format("MMMM Do YYYY, h:mm:ss a"),
      image: this.props.profile.picture
    }
      this.props.saveToDatabase(upload)
      this.handleClick();
  }

  render() {
        console.log("QUERY: ", this.state.query)

  let close = () => this.setState({ show: false});
    return (
      <div style={{position: "relative"}}>
        <Gifs ref="child"/>
        <TextField
        className="input-chat"
        floatingLabelText="Start Chatting Here"
        floatingLabelStyle={styles.floatingLabelStyle}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        fullWidth={true}
        underlineStyle={styles.underlineStyle}
        onKeyUp={this.handleSubmit}
        // onKeyUp={this.handleInputChange}
        />
        <IconButton tooltip="Upload Image" iconStyle={styles.mediumIcon}
          style={styles.medium} onTouchTap={this.handleClick}>
          <PhotoIcon color={orange500} hoverColor={blue500}> </PhotoIcon>
        </IconButton>
        <Modal
        show={this.state.show}
        onHide={close}
        container={this}
        aria-labelledby="contained-modal-title">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h2 style={{textAlign: "center"}}>Upload Pictures from the Event!</h2>
          <div className="row" style={{margin: 30}}>
            <img className="col-xs-6 col-xs-offset-3" 
            src={this.state.image} 
            id="img-preview" />
          </div>
          <div className="row" style={{margin: 20}}>
            <input className="col-xs-6 col-xs-offset-3" 
            id="upload-input" type="file" 
            onChange={this.onFileSelect.bind(this)}/>
          </div>
          <div className="row" style={{margin: 20}}>
            <input className="col-xs-6 col-xs-offset-3" 
            type="text" onChange={this.insertURL.bind(this)} 
            placeholder="or add url" id="url-input" />
          </div>
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button type="button" onClick={this.onImgUpload.bind(this)}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
  }
}

export { ChatInput }

7