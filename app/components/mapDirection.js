import React, {Component} from 'react';


class MapDirection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: "",
      end: ""
    }

    this.getDirection = this.getDirection.bind(this);
  }

  getDirection(destination) {
    console.log('hello direction!');
  }





  render() {
    return (
      <div>hello!</div>



    )
  }


export default MapDirection;