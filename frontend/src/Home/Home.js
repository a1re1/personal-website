import React from 'react';
import Header from '../Header/Header';
import ResumeComponent from '../ResumeComponent/ResumeComponent';
import PortfolioComponent from '../PortfolioComponent/PortfolioComponent';

const state = {
  media: [
    { name: "linkedIn",
      uri: "https://www.linkedin.com/in/tyler-whitehurst-354051128",
      icon: "/icons/linkd.png"
    },
    { name: "facebook",
      uri: "https://www.facebook.com/a1re1/",
      icon: "/icons/fb.png"
    },
    { name: "instagram",
      uri: "https://www.instagram.com/a1re123/",
      icon: "/icons/ig.png"
    }
  ],
}

const home = () => {
  return (
    <div>
      <Header media={state.media}/>
      <ResumeComponent />
      <PortfolioComponent />
    </div>
  );
};

export default home;
