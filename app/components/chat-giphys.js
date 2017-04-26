import React, { Component } from 'react'
import { GridList } from 'material-ui/GridList';
import { gif } from './chat-gif'
import IconMenu from 'material-ui/IconMenu';
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
    this.closeDropdown = this.closeDropdown.bind(this)
    this.openDropdown = this.openDropdown.bind(this)
    this.handleQuery = this.handleQuery.bind(this)
  }
//API call to Giphy
  componentDidUpdate() {

    let url = api + apiKey + "&q=" + this.state.query;
    test('URL', url)
    axios.get(url)
      .then(res => {
       console.log('Get request successful', res)
        this.setState({gifs: res.data.data})
      })
      .catch(err => {
        console.log('GET FAIL', err)
      })
    //Open dropdown with search results
    this.openDropdown()
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
  }


//Dropdown serves as container and iterator for array of gif results
  render() {
    test('Drop', this.state.dropdown) 
    test('query', this.state.query)
    console.log('GIFS ARRAY', this.state.gifs)
      return (
    <IconMenu
      style={styles.icon}
      open={this.state.dropdown}
      iconButtonElement={<div></div>}
      anchorOrigin={{vertical: 'bottom'}}
      targetOrigin={{vertical: 'bottom'}}
      onClick={this.closeDropdown}
    >
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2}>
          {this.state.gifs.map((gif, i) => (
            <gif url={gif.bitly_url} key={i} 
            handleDropdown={this.openDropdown}
            insertURL={this.props.insertURL}
            />
          ))}
        </GridList>
      </div>

    </IconMenu>
    );
  }
}

export { Gifs }