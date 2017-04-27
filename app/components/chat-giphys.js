import React, { Component } from 'react'
import { GridList } from 'material-ui/GridList';
// import { Gif } from './chat-gif'
import { GridTile } from 'material-ui/GridList';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Download from 'material-ui/svg-icons/file/file-download';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import axios from 'axios';
import Emojis from './chat-emojis'

//Giphy API
const api = "http://api.giphy.com/v1/gifs/search?";
const apiKey = "&api_key=dc6zaTOxFJmzC";

//Override styles of GridList root element
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: 30 + '%',
    padding: 10,
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
  titleStyle: {
    color: 'rgb(0, 188, 212)'
  }
};

//Start of Gifs component
class Gifs extends Component {
  constructor(props) {
    super(props)
    this.state = {
       dropdown: false,
       query: '',
       prefix: '',
       media: [],
    }
    this.closeDropdown = this.closeDropdown.bind(this)
    this.openDropdown = this.openDropdown.bind(this)
    this.handleQuery = this.handleQuery.bind(this)
    this.getGifsOrEmojis = this.getGifsOrEmojis.bind(this)
    this.sendGif = this.sendGif.bind(this)
  }

//Opens dropdown
  openDropdown(){
    this.setState({dropdown: true})
  }

//Closes dropdown
  closeDropdown(){
    this.setState({dropdown: false})
  }

//Takes string after ".gif" trigger and sets it as query
  handleQuery(query) {
    const keyword = query.slice(4);
    this.setState({query: keyword, prefix: query})
    this.getGifsOrEmojis()
  }

//API call to Giphy
  getGifsOrEmojis() {
    if (this.state.prefix.startsWith(".gif")) {
      let url = api + apiKey + "&q=" + this.state.query;
      axios.get(url)
      .then(res => {
        console.log(res.data.data)
        this.setState({media: res.data.data})
      })
      .catch(err => {
        test('GET FAIL', err)
      })
    } else {
      this.setState({media: Emojis})
    }
//Open dropdown with search results
    this.openDropdown()
  }

//Send giphy as message 
  sendGif(e) {
    test("PROPS", this.props)
    test("Send GIF", e.target.src)
    this.props.insertURL(e.target.src)
  }
//Dropdown serves as container and iterator for array of gif results
  render() {
  return (
    <IconMenu
      style={styles.icon}
      open={this.state.dropdown}
      iconButtonElement={<div></div>}
      anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
      autoWidth={false}
      className={''}
      onClick={this.closeDropdown}
    >
      <div style={styles.root}>
        <GridList style={styles.gridList} 
        >
        {this.state.media.map((medium, i) => (
          <GridTile key={i}>
            <img src={medium.images.downsized_large.url} onClick={this.sendGif}/>
          </GridTile>          
          ))}
        </GridList>
      </div>
    </IconMenu>
    );
  }
}

export { Gifs }