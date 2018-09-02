import React from 'react';
import Header from '../Header/Header';
import ScrollableAnchor from 'react-scrollable-anchor';

const state = {
  media: [
    { name: "linkedIn",
      uri: "https://www.linkedin.com/in/tyler-whitehurst-354051128",
      icon: "/icons/linkd.png"
    },
    { name: "facebook",
      uri: "https://www.github.com/a1re1/",
      icon: "/icons/hub.png"
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
      <ScrollableAnchor id='Home'>
        <div />
      </ScrollableAnchor>
      <Header media={state.media}/>
      <ScrollableAnchor id='Experience'>
        <div className='Experience Dark'>
          <div className='Content'>
            <h1>Experience</h1>
            <div className='Card'>
              <h1>Java</h1>
              <p>I have 3+ years experience with over 10k LOC; My experience includes
              standard libraries and data structures.I have 3+ years experience with over 10k LOC; My experience includes
              standard libraries and data structures. I have 3+ years experience with over 10k LOC; My experience includes
              standard libraries and data structures.</p>
            </div>
            <div className='Card'>
              <h1>C</h1>
              <p>I have 3+ years experience with over 10k LOC; My experience includes
              standard libraries and data structures.I have 3+ years experience with over 10k LOC; My experience includes
              standard libraries and data structures. I have 3+ years experience with over 10k LOC; My experience includes
              standard libraries and data structures.</p>
            </div>
            <div className='Card'>
              <h1>Python</h1>
              <p>I have 3+ years experience with over 10k LOC; My experience includes
              standard libraries and data structures.I have 3+ years experience with over 10k LOC; My experience includes
              standard libraries and data structures. I have 3+ years experience with over 10k LOC; My experience includes
              standard libraries and data structures.</p>
            </div>
            <div className='Card'>
              <h1>JavaScript/HTML/CSS</h1>
              <p>I have 3+ years experience with over 10k LOC; My experience includes
              standard libraries and data structures.I have 3+ years experience with over 10k LOC; My experience includes
              standard libraries and data structures. I have 3+ years experience with over 10k LOC; My experience includes
              standard libraries and data structures.</p>
            </div>
            <div className='Card'>
              <h1>React</h1>
              <p>I have 3+ years experience with over 10k LOC; My experience includes
              standard libraries and data structures.I have 3+ years experience with over 10k LOC; My experience includes
              standard libraries and data structures. I have 3+ years experience with over 10k LOC; My experience includes
              standard libraries and data structures.</p>
            </div>
            <div className='Card'>
              <h1>Node.js</h1>
              <p>I have 3+ years experience with over 10k LOC; My experience includes
              standard libraries and data structures.I have 3+ years experience with over 10k LOC; My experience includes
              standard libraries and data structures. I have 3+ years experience with over 10k LOC; My experience includes
              standard libraries and data structures.</p>
            </div>
            <div className='Card'>
              <h1>MySQL, Postgres, MSSQL</h1>
              <p>I have 3+ years experience with over 10k LOC; My experience includes
              standard libraries and data structures.I have 3+ years experience with over 10k LOC; My experience includes
              standard libraries and data structures. I have 3+ years experience with over 10k LOC; My experience includes
              standard libraries and data structures.</p>
            </div>
            <div className='Card'>
              <h1>Git, GitHub</h1>
              <p>I have 3+ years experience with over 10k LOC; My experience includes
              standard libraries and data structures.I have 3+ years experience with over 10k LOC; My experience includes
              standard libraries and data structures. I have 3+ years experience with over 10k LOC; My experience includes
              standard libraries and data structures.</p>
            </div>
          </div>
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id='Resume'>
        <div className='Component Light'>
          <div className='Content'>
            <h1>Resume</h1>
            <embed src="/resources/updated_resume.pdf#view=FitV" type='application/pdf' width="95%"/>
          </div>
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id='Portfolio'>
        <div className='Portfolio Dark'>
          <div className='Content'>
            <h1>Portfolio</h1>
          </div>
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id='Contact'>
        <div className='Contact Light'>
          <div className='Content'>
            <h1>Contact Me</h1>
            <p><i className='material-icons-dark'>email</i> : twwhitehurst@gmail.com</p>
            <p><i className='material-icons-dark'>phone</i> : (205)223-4175</p>
            <p><i className='material-icons-dark'>location_on</i> : Rochester, NY (Open to Relocation)</p>
          </div>
        </div>
      </ScrollableAnchor>
    </div>
  );
};

export default home;
