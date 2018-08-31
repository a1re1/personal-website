import React from 'react';

const header = (props) => {
  const media = props.media;
  const listItems = media.map((page) =>
    <box>
      <li key={page.name.toString()}>
        <a href={page.uri}>
          <img src={`${window.location.origin}${page.icon}`}
               alt={page.name}
               width="30px"
               height="30px"></img>
        </a>
      </li>
    </box>
  );
  return (
    <div className='Header'>
      <media>{listItems}</media><br />
      <p>Tyler Whitehurst</p>
    </div>
  );
};

export default header;
