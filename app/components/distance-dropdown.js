import React, { Component } from 'react'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';




//Start of Gifs component
class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
       dropdown: false,
    }
    this.isDropdown = this.isDropdown.bind(this)

  }

//Closes dropdown
  isDropdown(){
    this.setState({dropdown: !this.state.dropdown})
  }


//Dropdown serves as container and iterator for array of gif results
  render() {
  return (
    <IconMenu
      open={this.state.dropdown}
      iconButtonElement={<div></div>}
      anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
      autoWidth={true}
      className={''}
      onClick={this.isDropdown}
    >
        <MenuItem value={1} primaryText="<<  5 miles  >>" />
        <MenuItem value={2} primaryText="<<  10 miles  >>" />
        <MenuItem value={2} primaryText="<<  15 miles  >>"/>
        <MenuItem value={4} primaryText="<<  20 miles  >>" />
    </IconMenu>
    );
  }
}

export { Dropdown }

// onClick={() => this.setState({ show: true})}>
//           <div style={styles.headline}>
//           <a class="dropdown-toggle" data-toggle="dropdown" href="#">Menu 1<span class="caret"></span></a>
//             <ul class="dropdown-menu">
//               <li><button onClick={() => this.distanceHandler(3218.69)}>2 miles</button></li>
//               <li><button onClick={() => this.distanceHandler(8046.72)}>5 miles</button></li>
//               <li><button onClick={() => this.distanceHandler(32186.9)}>20 miles</button></li>
//               <li><button onClick={() => this.props.updateEventList(this.props.events)}>20 miles</button></li>
//             </ul>
//           </div>