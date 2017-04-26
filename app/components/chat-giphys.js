import React, { Component } from 'react'
import { GridList } from 'material-ui/GridList';
import { gif } from './chat-gif'
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Download from 'material-ui/svg-icons/file/file-download';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import axios from 'axios'

//Giphy API
const api = "http://api.giphy.com/v1/gifs/search?";
const apiKey = "&api_key=dc6zaTOxFJmzC";

//Override styles of GridList root element
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  icon: {
    position: "absolute",
    top: 49 + "em",
    left: 2 + "em",
    visible: "hidden"
  },
};

//Start of Gifs component
class Gifs extends Component {
  constructor(props) {
    super(props)
    this.state = {
       dropdown: false,
       query: '',
       gifs: [],
    }
    this.handleDropdown = this.handleDropdown.bind(this)
    this.handleQuery = this.handleQuery.bind(this)
  }

//Opens and Closes dropdown
  handleDropdown(){
    this.setState({dropdown: !this.state.dropdown})
  }

//Takes string after ".gif" trigger and sets it as query
  handleQuery(query) {
    query = query.slice(4);
    this.setState({query: query})
  }

//API call to Giphy
  getGifs() {
    log('Handle Search was triggered')
    let url = api + apiKey + "&q=" + this.state.query;
    axios.get(url)
    .then(res => {console.log('This is what you get back from API req: ', res)})
      // this.setState({gifs: })
    .catch(err => {console.log('GET FAIL', err)})
  }

//DropDown serves as container and iterator for array of gif results
  render() {
    log('Drop', this.state.dropdown) 
    log('query', this.state.query)
      return (
    <IconMenu
      style={styles.icon}
      open={this.state.dropdown}
      iconButtonElement={<div></div>}
      anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
      targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
      onClick={()=>this.handleDropdown()}
    >
      <h5>Enter gif search! Ex: ".gif puppies"</h5>
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2}>
          {this.state.gifs.map((gif, i) => (
            <gif img={gif.url} key={i} title={gif.title}/>
          ))}
        </GridList>
      </div>

    </IconMenu>
    );
  }
}

export { Gifs }