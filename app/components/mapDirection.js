import React, {Component} from 'react';

class MapDirection extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }







  render() {
    console.log("clickedEvent clickedddd", this.props.clickedEvent)
    if (this.props.clickedEvent) {
      return (
        <div><b>Direction to {this.props.clickedEvent['title']}</b></div>
      )
    }
    return (
      <div>helo</div>
    )
  }
}


export {MapDirection};