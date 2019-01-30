import React from 'react';
import Header from '../Header/Header';
import ScrollableAnchor from 'react-scrollable-anchor';
import Slide from '../SlideComponent/SlideComponent';
import Mountains from '../MountainComponent/MountainComponent';

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
      uri: "https://www.instagram.com/twhitehurst_/",
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
              <p>Hey, I'm Tyler Whitehurst<br/><br/>
              I'm a Computer Science Major from Birmingham, AL. I've studied my undergraduate at RIT in Rochester, NY, and co-op'ed in Sacramento, CA, and Boston, MA. 
              As you might be able to tell, I'm not afraid to travel for opportunities. I like boba tea, swimming, prepositions, and long walks on the beach after sunset when all of the 
              hermit crabs have come out to the surface. Apart from that, I am really interested in the way people currently communicate, and the nuances and changes that are coming
              in the age of machine learning.<br/>
              </p><br/>
              <a href='/#Experience'>
                <i className="material-icons md-72 animated bounce">expand_more</i>
              </a>
            </div>
          </div>
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id='Experience'>
        <div className='Experience Dark'>
          <div className='Content'>
            <h1>Experience</h1>
            <div className='Card'>
              <h1>HubSpot</h1>
              <img className='card-pic' src="/img/hubspot.png" alt='HubSpot'/>
              <h2>
                < Slide title={<h1>HubSpot</h1>}
                        body={<div><br/>Experience on a back-end communications team.
                                Built endpoints for integrations for popular
                                messaging applications. Migrated data models between multiple databases. Closely worked with Bots
                                team to develop resources for bot communication.
                              </div>}
                />
              </h2>
            </div>
            <div className='Card'>
              <h1>PowerSchool</h1>
              <img className='card-pic' src="/img/powerschool.jpg" alt='PowerSchool'/>
              <h2>
                < Slide title={<h1>PowerSchool</h1>}
                        body={<div><br/>QA work and automation testing. Worked with a
                                team in charge of provisioning and syncing data between multiple databases. Experienced filtering and
                                processing large quantities of data.
                              </div>}
                />
              </h2>
            </div>
            <h1>Skills</h1>
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
            </div>
          </div>
          <a href='/#Resume'>
            <i className="material-icons md-72 animated bounce">expand_more</i>
          </a>
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id='Resume'>
        <div className='Component Light'>
          <div className='Content'>
            <h1>Resume</h1>
            <embed src="/resources/updated_resume.pdf#view=FitV" type='application/pdf' width="95%"/>
          </div>
          <a href='/#Portfolio'>
            <i className="material-icons md-72 animated bounce">expand_more</i>
          </a>
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
                        body={<div>
                                <br/>The website you are currently visiting
                                showcases some of my experiences with education and in
                                developer roles. It shows off my design skills and technologies
                                that I have worked with throughout my career.
                                The website was built using Node.js
                                as a back-end with a React.js front-end with CSS styling.
                              </div>}
                />
              </h2>
            </div>
            <div className='Card'>
              <h1>Selenium Automation Testing</h1>
              <img className='card-pic' src="/img/selenium.png" alt='Selenium'/>
              <h2>
                < Slide title={<h1>Selenium Automation Testing</h1>}
                        body={<div>
                                <br/>At my PowerSchool I worked closely with QA to test
                                new development features. These tasks strengthened my ability to create test
                                cases and clearly define the scope of use ccases in order to
                                understand feature design. Working in QA
                                trained me to take a more thoughtful approach to my
                                work in order to avoid careless mistakes and adequately
                                address edge cases. With this position I
                                caught and debugged multiple issues before they reached
                                production which helped prevent future problems for development engineers. 
                              </div>}
                />
              </h2>
            </div>
            <div className='Card'>
              <h1>GitHub Stats</h1>
              <img className='card-pic' src="/img/db.png" alt='DB Project'/>
              <h2>
                < Slide title={<h1>GitHub Stats</h1>}
                        body={<div>
                                <br/>About: <br/>
                                This was an 8 week long Project with a group of 3 people
                                (including myself) for my Principles of Database
                                Management class. The objective of the project was to
                                demonstrate the use of a relational database in a
                                practical setting. We chose to base our project on a
                                head-to-head user comparison of stats from a user's
                                GitHub data. We did not, however, extract a user's actual
                                GitHub stats using an api, but instead
                                generated sample data that could be from a real user.
                                <br/>
                                <br/>
                                The Tech:<br/>
                                The project was written in Python and used the Web.py
                                library to build the server. On the backend, we
                                used PostGres to create a relational database which was
                                queried by our python application. All of our
                                data was generated using a shell script to import data
                                from a library of sample fake data. When run, the
                                server is set up on the default http port of 8080.
                                <br/>
                                <br/>
                                Reflection:<br/>
                                This project helped me to understand relational databases
                                and the capabilities of Databases to process
                                information. I now understand the necessity of database
                                normalization in order to remove redundancies
                                of data. I also now have a cursory understanding of how
                                indices can speed up query processesing when
                                working with large quantities of data.
                              </div>}
                />
              </h2>
            </div>
            <div className='Card'>
              <h1>Web Checkers</h1>
              <img className='card-pic' src="/img/checkers.png" alt='Web checkers'/>
              <h2>
                < Slide title={<h1>Web Checkers</h1>}
                        body={<div>
                                <br/>About: <br />
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
                              </div>}
                />
              </h2>
            </div>
            <div className='Card'>
              <h1>Wild Fire Simulator</h1>
              <img className='card-pic' src="/img/fire.gif" alt='Wild Fire'/>
              <h2>
                < Slide title={<h1>Wild Fire Simulator</h1>}
                        body={<div>
                                <br/>This will be expanded upon later. Unfortunately
                                I cannot link to the source code as this was a project
                                for my CS243: Mechanics of Programming class to understand
                                the basics of compilers, memory management, and operating systems
                                as well as learning C.<br/>
                              </div>}
                />
              </h2>
            </div>
            <div className='Card'>
              <h1>Programming Notes</h1>
              <img className='card-pic' src="/img/notes.png" alt='Notes repository'/>
              <h2>
                < Slide title={<h1>Programming Notes</h1>}
                        body={<div>
                                <br/>This repo is a collection of notes that I have taken through out my career. 
                                I strongly believe that taking in depth notes during development helps you 
                                to reason through design choices and have a better understanding of why 
                                you are making certain decisions. These notes are primarily on languages I have 
                                learned however due to confidentiality of most projects that I have worked on. 
                                Check out the source here: <br/> <br/>
                                <a href='https://github.com/a1re1/programming-notes'>Project</a>
                              </div>}
                />
              </h2>
            </div>
            <div className='Card'>
              <h1>Fin the Fish</h1>
              <img className='card-pic' src="/img/fin.png" alt='p5.js game'/>
              <h2>
                < Slide title={<h1>Fin the Fish</h1>}
                        body={<div>
                                <br/>
                                <div className="row">
                                  <div className="column">
                                    <iframe src="https://a1re1.github.io/FishFood/www/index.html" height='600' title='Fin the Fish'>                         
                                      <p>Your browser does not support iframes.</p>
                                    </iframe>
                                  </div>
                                  <div className="column">
                                    <br/>Fin the Fish is a mobile friendly web game programmed in JavaScript using the p5.js libraries. <br/>
                                    <br/>
                                    Controls:<br/>
                                    <br/>
                                    a - paddle left fin<br/>
                                    d - paddle right fin<br/>
                                    <br/>
                                    a + d - move straight(with speed boost)<br/>
                                    <br/>
                                    *On mobile, tap the side of the screen you want to paddle.<br/>
                                    <br/>
                                    Summary:<br/>
                                    Dodge the sharks and seaweed in order to last as long as you can. The ocean is a dangerous place and as such the life of a fish is hard. How long can you survive in the Deep Blue.<br/>
                                    <br/>
                                    source:<br/>
                                    <a href='https://github.com/a1re1/FishFood'>Project</a>
                                  </div>
                                </div>
                              </div>}
                />
              </h2>
            </div>
            <div className='Card'>
              <h1>Rise of Angels Minecraft Mod</h1>
              <img className='card-pic' src="/img/mc-mod.png" alt='Minecraft Mod'/>
              <h2>
                < Slide title={<h1>Rise of Angels Minecraft Mod</h1>}
                        body={<div>
                                <br/>About: <br />
                                Rise of Angels is a minecraft mod focused on the balance
                                between angels and demons. It is written in
                                Java using the forge api libraries so that it can be loaded
                                into the minecraft client. The mod adds some
                                building blocks as well as some basic world generation to
                                the vanilla Minecraft 1.7.10 game. <br/> <br/>
                                <a href='https://github.com/a1re1/Rise_of_Angels'>Project</a>
                              </div>}
                />
              </h2>
            </div>
          </div>
          <a href='/#Contact'>
            <i className="material-icons md-72 animated bounce">expand_more</i>
          </a>
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
          <a href='/#Home'>
            <i className="material-icons md-72 animated bounce">expand_less</i>
          </a>
          <Mountains/>
        </div>
      </ScrollableAnchor>
    </div>
  );
};

export default home;
