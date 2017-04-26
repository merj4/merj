import React, { Component } from 'react';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  titleBackground:
    "linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)",
  titleStyle: {
    color: 'rgb(0, 188, 212)'
  }
};


const gif = (props) => {
  const handleClick = (e) => {
    this.props.openDropdown()
    this.props.insertUrl(src)
  }

  return (
    <GridTile
      actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
      titleStyle={styles.titleStyle}
      titleBackground={styles.titleBackground}
    >
      <img src={tilesData.img} onClick={this.handleClick}/>
    </GridTile>
  )
}

export { gif }

const tilesData = [
  {
    img: './images/jason.jpg',
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