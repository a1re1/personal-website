import React from 'react';
import Header from '../Header/Header';
import ScrollableAnchor from 'react-scrollable-anchor';
import Slide from '../SlideComponent/SlideComponent';

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
      <ScrollableAnchor id='About'>
        <div className='Light'>
          <div className='About Content'>
            <img className='circle-img Profile-pic' src="/img/profile.jpg" alt='Profile pic'/>
            <div className='desc'>
              <h1>About Me</h1>
              <p>Hey, Im Tyler Whitehurst<br />
              Im a Computer Science Major with a Math Minor<br/>
              and I solve problems.
              </p>
            </div>
          </div>
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id='Experience'>
        <div className='Experience Dark'>
          <div className='Content'>
            <h1>Experience</h1>
            <div className='Card'>
              <h1>Java</h1>
              <p>
                • 3+ years experience<br />
                • 8k LOC<br />
                • Data Structures, Standard Libraries<br />
                • Java 8 Proficient<br />
                • Spring MVC, REST<br />
                • Gradle, Maven Dependencies<br />
              </p>
              <h2>Read More</h2>
            </div>
            <div className='Card'>
              <h1>C</h1>
              <p>
                • 1+ years experience<br />
                • 4k LOC<br />
                • Low-level Dev<br />
                • Terminal Manipulation<br />
                • Memory Management<br />
                • STD libraries<br />
              </p>
              <h2>Read More</h2>
            </div>
            <div className='Card'>
              <h1>MySQL, MSSQL, Postgres</h1>
              <p>
                • 2+ years experience<br />
                • Data Normalization<br />
                • Legacy Data Manipulation<br />
                • Cross-platform synchronization<br />
                • Queries, Triggers, Indices<br />
                • Relational databases<br />
              </p>
              <h2>Read More</h2>
            </div>
            <div className='Card'>
              <h1>JavaScript/HTML/CSS</h1>
              <p>
                • 1+ years experience<br />
                • 3k LOC<br />
                • React.js Front-end<br />
                • Node.js Back-end<br />
                • NGINX load-balancing<br />
                • npm dependencies<br />
              </p>
              <h2>Read More</h2>
            </div>
            <div className='Card'>
              <h1>Git, GitHub</h1>
              <p>
                • 3+ years experience<br />
                • VCS<br />
                • Coordination<br />
                • Code Reviews<br />
                • Markdown formatting<br />
              </p>
              <h2>Read More</h2>
            </div>
            <div className='Card'>
              <h1>Python</h1>
              <p>
                • 1+ years experience<br />
                • 2k LOC<br />
                • Python 2.7<br />
                • Imperative Programming<br />
                • Web.py, Psycopg Web Dev<br />
              </p>
              <h2>Read More</h2>
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
            <div className='Card'>
              <h1>This Site</h1>
              <img className='card-pic' src="/img/site.png" alt='Web-dev'/>
              <h2>
                < Slide title={<h1>This Website</h1>}
                        body={<p1>
                                My current website: https://www.tylerwhitehurst.com/
                                showcases some of my experiences with education and in
                                developer roles as well as showing off my design skills.
                                The website was built from the ground up using Node.js
                                as a back-end with a React.js front-end with CSS styling.
                              </p1>}
                />
              </h2>
            </div>
            <div className='Card'>
              <h1>Selenium Automation Testing</h1>
              <img className='card-pic' src="/img/selenium.png" alt='Selenium'/>
              <h2>
                < Slide title={<h1>Selenium Automation Testing</h1>}
                        body={<p1>
                                My current website: https://www.tylerwhitehurst.com/ showcases some of my experiences with education and in developer roles as well as showing off my design skills. The website was built from the ground up using Node.js as a back-end with a React.js front-end with CSS styling.
                              </p1>}
                />
              </h2>
            </div>
            <div className='Card'>
              <h1>GitHub Stats</h1>
              <img className='card-pic' src="/img/db.png" alt='DB Project'/>
              <h2>
                < Slide title={<h1>GitHub Stats</h1>}
                        body={<p1>
                                My current website: https://www.tylerwhitehurst.com/ showcases some of my experiences with education and in developer roles as well as showing off my design skills. The website was built from the ground up using Node.js as a back-end with a React.js front-end with CSS styling.
                              </p1>}
                />
              </h2>
            </div>
            <div className='Card'>
              <h1>Web Checkers</h1>
              <img className='card-pic' src="/img/checkers.png" alt='Web checkers'/>
              <h2>
                < Slide title={<h1>Web Checkers</h1>}
                        body={<p1>
                                About: <br />
                                This project took place over the course of a 14 week semester during a software engineering course.
                                The was taken on by a team of four students (including myself) with the goal of creating a web based
                                application that functionally can player a game of checkers with another user.
                                <br />
                                <br />
                                The Tech:<br />
                                The project was written in Java and incorporated a Spark based web server, using Maven to aggregate
                                the appropriate libraries needed to build the server. The server allows for users to connect through a
                                simple http client with the default port of 4567.
                                <br />
                                <br />
                                Reflection:<br />
                                This project was a good introduction to development in a team environment. As a team, we used Slack
                                for communication purposes and Trello in order to keep track of User Stories that needed to be
                                implemented. Over the course of the semester, I was able to take part in team building activities in order
                                to strengthen my ability to work with others.
                              </p1>}
                />
              </h2>
            </div>
            <div className='Card'>
              <h1>Wild Fire Simulator</h1>
              <img className='card-pic' src="/img/fire.gif" alt='Wild Fire'/>
              <h2>
                < Slide title={<h1>Wild Fire Simulator</h1>}
                        body={<p1>
                                ...
                              </p1>}
                />
              </h2>
            </div>
            <div className='Card'>
              <h1>Programming Notes</h1>
              <img className='card-pic' src="/img/notes.png" alt='Notes repository'/>
              <h2>
                < Slide title={<h1>Programming Notes</h1>}
                        body={<p1>
                                ...
                              </p1>}
                />
              </h2>
            </div>
            <div className='Card'>
              <h1>Fin the Fish</h1>
              <img className='card-pic' src="/img/fin.png" alt='p5.js game'/>
              <h2>
                < Slide title={<h1>Fin the Fish</h1>}
                        body={<p1>
                                ...
                              </p1>}
                />
              </h2>
            </div>
            <div className='Card'>
              <h1>Rise of Angels Minecraft Mod</h1>
              <img className='card-pic' src="/img/mc-mod.png" alt='Minecraft Mod'/>
              <h2>
                < Slide title={<h1>Rise of Angels Minecraft Mod</h1>}
                        body={<p1>
                                ...
                              </p1>}
                />
              </h2>
            </div>
          </div>
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id='Contact'>
        <div className='Contact Light'>
          <div className='Content'>
            <h1>Contact Me</h1>
            <p><i className='material-icons-dark'>location_on</i> : Rochester, NY (Open to Relocation)</p>
            <p><i className='material-icons-dark'>email</i> : twwhitehurst@gmail.com</p>
            <p><i className='material-icons-dark'>phone</i> : (205)223-4175</p>
          </div>
        </div>
      </ScrollableAnchor>
    </div>
  );
};

export default home;
