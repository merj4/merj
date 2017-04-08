import React, { Component } from 'react';

// this header will contain our app name in the center, which will also be a clickable link to go to the homepage/eventsList

// on the right side of the header, we need a + button to add an event

const Header = () => {
  return (
    <div className="main-header">
      MERJ
      <button className="create-event">Add Event Button</button>
    </div>
  );
}

export default Header;