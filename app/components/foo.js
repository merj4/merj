import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Foo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  componentDidMount() {
    console.log("mounted")
  }

  render() {
    return (
      <div className="foo">


        <div className="bar">
        </div>

        <div className="bar">
        </div>

      </div>


    )
  }
}

export default Foo;