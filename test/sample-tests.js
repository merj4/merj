import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { spy } from 'sinon';
import { expect } from 'chai';
// import { Link } from 'react-router-dom';
import Header from '../app/src/components/header';


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
    const wrapper = shallow(<Navigation userPrivs={adminProps}/>);
    expect(wrapper.instance().props.userPrivs.isLoggedIn).to.equal(true);
    expect(wrapper.instance().props.userPrivs.isAdmin).to.equal(true);
  });

  it('shows the Student page to student accounts', () => {
    const wrapper = shallow(<Navigation userPrivs={studentProps}/>);
    expect(wrapper.contains(<li><Link to="/Student">Student</Link></li>)).to.equal(true);
  });

  it('hides the Student page to users not authorized', () => {
    const wrapper = shallow(<Navigation userPrivs={notLoggedIn}/>);
    expect(wrapper.contains(<li><Link to="/Student">Student</Link></li>)).to.equal(false);
  });

  it('shows the Admin page to admin accounts', () => {
    const wrapper = shallow(<Navigation userPrivs={adminProps}/>);
    expect(wrapper.contains(<li><Link to="/Admin">Admin</Link></li>)).to.equal(true);
  });

  it('hides the Admin page to users not authorized', () => {
    const wrapper = shallow(<Navigation userPrivs={notLoggedIn}/>);
    expect(wrapper.contains(<li><Link to="/Admin">Admin</Link></li>)).to.equal(false);
  });

  it('shows the CameraPage to admin accounts', () => {
    const wrapper = shallow(<Navigation userPrivs={adminProps}/>);
    expect(wrapper.contains(<li><Link to="/CameraPage">CameraPage</Link></li>)).to.equal(true);
  });

  it('hides the CameraPage to users not authorized', () => {
    const wrapper = shallow(<Navigation userPrivs={notLoggedIn}/>);
    expect(wrapper.contains(<li><Link to="/CameraPage">CameraPage</Link></li>)).to.equal(false);
  });

  it('shows the login link to users not authorized', () => {
    const wrapper = shallow(<Navigation userPrivs={notLoggedIn}/>);
    expect(wrapper.contains(<li><a href="/login">Login / Signup</a></li>)).to.equal(true);
  });

  it('hides the login link to users logged in', () => {
    const wrapper = shallow(<Navigation userPrivs={studentProps}/>);
    expect(wrapper.contains(<li><a href="/login">Login / Signup</a></li>)).to.equal(false);
  });

  it('shows the logout link to users logged in', () => {
    const wrapper = shallow(<Navigation userPrivs={studentProps}/>);
    expect(wrapper.contains(<li><a href="/logout">Logout</a></li>)).to.equal(true);
  });

  it('hides the logout link to users not logged in', () => {
    const wrapper = shallow(<Navigation userPrivs={notLoggedIn}/>);
    expect(wrapper.contains(<li><a href="/logout">Logout</a></li>)).to.equal(false);
  });

});