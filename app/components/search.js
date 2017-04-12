import React, { Component } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

// every class must have a render function
  // it's recommended that you start with a functional based component and
  // only refactor to a class when you need some added functionality



const Search = React.createClass({
    doSearch:function(){
        var query=this.refs.searchInput.getDOMNode().value; // this is the search text
        this.props.doSearch(query);
    },
    render:function(){
        return <input type="text" ref="searchInput" placeholder="Search" value={this.props.query} onChange={this.doSearch}/>
    }
});


export default Search;