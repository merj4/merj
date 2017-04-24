import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import io from 'socket.io-client';
import {orange500, blue500} from 'material-ui/styles/colors';
import moment from 'moment';
import PhotoIcon from 'material-ui/svg-icons/image/add-a-photo'
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

 //////CLOUDINARY UPLOAD IMAGE//////////
  var imgPreview = document.getElementById('img-preview');
  var imgFormPreview = document.getElementById('img-form-preview');

  var CLOUDINARY_URL =  'https://api.cloudinary.com/v1_1/dcjoeciha/upload';
  var CLOUDINARY_UPLOAD_PRESET = "ceydn5w3";

  $('#url-input').on('change', function() {
    $scope.image = $scope.addImageByUrl;
    imgPreview.src = $scope.addImageByUrl;
    imgFormPreview.src = $scope.addImageByUrl;
  });


$('#upload-input').on('change', function(event) {

  var file = event.target.files[0];
  var formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  axios({
    url: CLOUDINARY_URL,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: formData
  }).then(function(res) {
    console.log(res);
    imgPreview.src = res.data.secure_url;
    imgFormPreview.src = res.data.secure_url;
    $scope.image = res.data.secure_url;
  }).catch(function(err) {
    console.error(err);
  });
});


const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    fontWeight: "bold",
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
  iconStyle: {
    marginLeft: 24,
  }
};


class ChatInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  

  handleSubmit(e) {
    const body = e.target.value;
    if (e.keyCode === 13 && body){
      const message = {
        body,
        username: this.props.profile.given_name,
        timestamp: moment((new Date).getTime()).format("MMMM Do YYYY, h:mm:ss a"),
        image: this.props.profile.picture
      }
      this.props.receiveMessage(message);
      e.target.value = ''      
    }
  }

  handleClick() {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
  let close = () => this.setState({ show: false});
    return (
    <div>
      <Button className="photo-upload" onClick={this.handleClick.bind(this)}></Button>
      <TextField
      className="input-chat"
      floatingLabelText="Start Chatting Here"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      fullWidth={true}
      underlineStyle={styles.underlineStyle}
      onKeyUp={this.handleSubmit}
      />
        <Modal
        show={this.state.show}
        onHide={close}
        container={this}
        aria-labelledby="contained-modal-title">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h2 style="text-align: center;">Upload Pictures from the Event!</h2>
          <div className="row">
            <img className="col-xs-6 col-xs-offset-3" src="" id="img-preview" />
          </div>
          <button className="btn btn-lg upload-btn col-xs-6 col-xs-offset-3" type="button">Upload From Computer</button>
          <input className="col-xs-6 col-xs-offset-3" type="text" name="Link" placeholder="or add url" id="url-input" />
          <button className="btn btn-sm col-xs-4 col-xs-offset-4" type="button">Back to Event Page</button>
          <input id="upload-input" type="file" name="uploads[]" multiple="multiple" /><br />
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" text-align="center" onClick={this.handleSubmit}>Create Event</Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
  }
}

export { ChatInput }

7