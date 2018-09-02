import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Scrollbars } from 'react-custom-scrollbars';

const navbar = (props) => {
  const pages = props.pages;
  const listItems = pages.map((page) =>
    <li key={page.name.toString()}>
      <a href={page.uri}>{page.name}</a>
    </li>
  );

  return (
    <div className='Menu'>
      <i className='material-icons'>menu</i>
      <Menu>
        <ul>{listItems}</ul>
      </Menu>
    </div>
  );
};

export default navbar;
