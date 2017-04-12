import React from 'react';

// every class must have a render function
  // it's recommended that you start with a functional based component and
  // only refactor to a class when you need some added functionality

// this header will contain our app name in the center, which will also be a clickable link to go to the homepage/eventsList

// on the right side of the header, we need a + button to add an event

const Filter = () => {
  return (
    <div className="filter-bar">
      Distance  Category  Size  Date  Now   Hot
    </div>
  );
}

export default Filter;