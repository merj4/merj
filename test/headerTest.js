'use strict';
import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
//import each component in its own import statement as needed
import Foo from '../app/components/foo.js';

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


describe('Component Header', function() {
  it ('should have a class named foo', function() {
  const wrapper = shallow(<Foo />);
  expect(wrapper.is('.foo')).to.equal(true);
  })
it('should have two children', function() {
 const wrapper = shallow(<Foo />);
 expect(wrapper.children().length).to.equal(2)
 })
it('should have children with a class named bar', function() {
 const wrapper = shallow(<Foo />);
 expect(wrapper.children('.bar').length).to.equal(2);
 })
})
