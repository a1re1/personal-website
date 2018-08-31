import React from 'react';

const footerComponent = (props) => {
  const links = props.links;
  const listItems = links.map((link) =>
    <li key={link.name.toString()}>
      <a href={link.uri}>{link.name}</a>
    </li>
  );
  return (
    <div className='Footer'>
      <ul>{listItems}</ul>
    </div>
  );
};

export default footerComponent;
