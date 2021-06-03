import { slide as Menu } from "react-burger-menu";
import React from "react";

const pages = [
  { name: "Home", uri: "/#Home" },
  { name: "About Me", uri: "/#About" },
  { name: "Experience", uri: "/#Experience" },
  { name: "Resume", uri: "/#Resume" },
  { name: "Portfolio", uri: "/#Portfolio" },
  { name: "Contact Me", uri: "/#Contact" },
  { name: "Blog", uri: "https://medium.tylerwhitehurst.com/" },
];

const navbar = () => {
  const listItems = pages.map((page) => (
    <li key={page.name.toString()}>
      <a href={page.uri}>{page.name}</a>
    </li>
  ));

  return (
    <div className="Menu">
      <i className="material-icons md-48">menu</i>
      <Menu>
        <ul>{listItems}</ul>
      </Menu>
    </div>
  );
};

export default navbar;
