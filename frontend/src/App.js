import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import ResumeComponent from './ResumeComponent/ResumeComponent';
import FooterComponent from './FooterComponent/FooterComponent';
import PageNotFoundComponent from './PageNotFoundComponent/PageNotFoundComponent';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  state = {
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

    navPages: [
      { name: "Home",
        uri:"./home"
      },
      { name: "Resume",
        uri:"./resume"
      },
      { name: "Portfolio",
        uri:"./portfolio"
      },
      { name: "Blog",
        uri:"./blog"
      },
      { name: "Contact Me",
        uri:"./contact"
      }
    ],

    routes: [
      { path: '/',
        component: Home
      },
      { path: '/home',
        component: Home
      },
      { path: '/resume',
        component: ResumeComponent
      },
      { path: '/portfolio',
        component: Home
      },
    ],

    links: [
      { name: "Home",
        uri:"./home"
      },
      { name: "Resume",
        uri:"./resume"
      },
      { name: "Portfolio",
        uri:"./portfolio"
      },
      { name: "Blog",
        uri:"./blog"
      },
      { name: "Contact",
        uri:"./contact"
      }
    ]
  }

  render() {
    const routes = this.state.routes.map((route) =>
      < Route exact path={route.path}

        render={(props) => <route.component {...props}/>}
      />
    );

    return (
      <div className="App">
        <Header media={this.state.media}/>
        <Navbar pages={this.state.navPages}/>
        <Router>
          <Switch>
            {routes}
            <Route path='**' component={PageNotFoundComponent} />
          </Switch>
        </Router>
        <FooterComponent links={this.state.links} />
      </div>
    );
  }
}

export default App;
