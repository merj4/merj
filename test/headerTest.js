'use strict';
import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
//import each component in its own import statement as needed
import Header from '../app/components/header.js';

//use shallow if stateLESS component

//shallow test = only component and its immediate children are rendered

  //1 wrapper = 1 test
    //BAD PRACTICE:
      //const wrapper = shallow(...)
      //it('should...')
      //it('should')

    //GOOD PRACTICE:
        //const wrapper = shallow(...)
        //it('should...')
        //const wrapper = shallow(...)
        //it('should')

//use mount if stateFUL


describe('<Header />', function() {

  const studentProps = {
    isLoggedIn: true,
    isAdmin: false
  };

  const adminProps = {
    isLoggedIn: true,
    isAdmin: true
  };

  const notLoggedIn = {
    isLoggedIn: false,
    isAdmin: false
  };

  it('receives props from its parent component', () => {
    const wrapper = shallow(<Header userPrivs={adminProps}/>);
    expect(wrapper.instance().props.userPrivs.isLoggedIn).to.equal(true);
    expect(wrapper.instance().props.userPrivs.isAdmin).to.equal(true);
  });
})
