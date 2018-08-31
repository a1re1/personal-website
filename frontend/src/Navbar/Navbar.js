import React from 'react';

const navbar = (props) => {
  const pages = props.pages;
  const listItems = pages.map((page) =>
    <li key={page.name.toString()}>
      <a href={page.uri}>{page.name}</a>
    </li>
  );
  return (
    <div className='Nav-bar'>
      <ul>{listItems}</ul>
    </div>
  );
};

export default navbar;
