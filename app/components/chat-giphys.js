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
    maxWidth: 70 + 'em',
    maxHeight: 40 + 'em'
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
const tilesData = [
  {
    img: "http://media3.giphy.com/media/3o6ZsT1OxqTBHiZXuU/giphy-downsized.gif",
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: './images/jesse.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: './images/faiz.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: './images/simon.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: './images/jordan.jpg',
    title: 'Hats',
    author: 'Hans',
  },
];
//Start of Gifs component
class Gifs extends Component {
  constructor(props) {
    super(props)
    this.state = {
       dropdown: false,
       query: '',
       gifs: [],
    }
    this.closeDropdown = this.closeDropdown.bind(this)
    this.openDropdown = this.openDropdown.bind(this)
    this.handleQuery = this.handleQuery.bind(this)
    this.getGifs = this.getGifs.bind(this)
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
    query = query.slice(4);
    this.setState({query: query})
    this.getGifs()
  }

//API call to Giphy
  getGifs() {
    let url = api + apiKey + "&q=" + this.state.query;
    test('URL', url)
    axios.get(url)
      .then(res => {
       console.log('Get request successful', res)
        this.setState({gifs: res.data.data})
      })
      .catch(err => {
        test('GET FAIL', err)
      })
    //Open dropdown with search results
    this.openDropdown()
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
        {this.state.gifs.map((gif, i) => (
          <GridTile key={i}>
            <img src={gif.images.downsized_large.url} />
          </GridTile>          
          ))}
        </GridList>
      </div>
    </IconMenu>
    );
  }
}

export { Gifs }