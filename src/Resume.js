import React from "react";

const cover = (props) => {
  const media = props.media;
  const listItems = media.map((page) => (
    <li key={page.name.toString()}>
      <a href={page.uri}>
        <img
          src={`${window.location.origin}${page.icon}`}
          alt={page.name}
          width="48px"
          height="48px"
        ></img>
      </a>
    </li>
  ));
  return (
    <div className="Cover">
      <div className="media">{listItems}</div>
      <br />
      <div className="heading">
        <div className="Content">
          <h1>
            <span className="highlight">tyler whitehurst</span>
          </h1>
          <h2>
            <span className="highlight">
              web dev engineer building cool stuff
            </span>
          </h2>
        </div>
      </div>
      <div className="more">
        <a href="/#About">
          <i className="material-icons md-72 animated bounce">expand_more</i>
        </a>
      </div>
    </div>
  );
};

export default cover;
