'use strict';
import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
//import each component in its own import statement as needed
import Foo from '../app/components/foo.js';
import Header from '../app/components/header.js'

//use shallow if stateLESS component

//use mount if stateFUL



describe('Foo', function() {
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
  it('calls componentDidMount', () => {
    sinon.spy(Foo.prototype, 'componentDidMount');
    const wrapper = mount(<Foo />);
    expect(Foo.prototype.componentDidMount.calledOnce).to.equal(true);
  });
})

describe('Header', () => {
  // it('allows us to set props', () => {
  //   const wrapper = mount(<Header bar="baz"  />);
  //   expect(wrapper.props().bar).to.equal("baz");
  //   wrapper.setProps({ bar: "foo" });
  //   expect(wrapper.props().bar).to.equal("foo");
  // });
  it('allows us to set props', () => {
    const profile = { name: 'name' };
    const auth = { logout: function() { return; } }
    const wrapper = mount(<Header bar="baz" profile={profile} auth={auth} />);
    expect(wrapper.props().bar).to.equal("baz");
    wrapper.setProps({ bar: "foo" });
    expect(wrapper.props().bar).to.equal("foo");
  });
  it('simulates click events', () => {
    const profile = { name: 'name' };
    const auth = { logout: function() { return; } }
    const onButtonClick = sinon.spy();
    const wrapper = mount(
      <Header onButtonClick={onButtonClick} profile={profile} auth={auth} />
    );
    wrapper.find('button').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
  });
  // it('allows us to set props', () => {
  //   const wrapper = mount(<Header bar="baz" />);
  //   expect(wrapper.props().bar).to.equal("baz");
  //   wrapper.setProps({ bar: "foo" });
  //   expect(wrapper.props().bar).to.equal("foo");
  // });
})

