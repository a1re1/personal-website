import './App.css';

import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import PageNotFoundComponent from './PageNotFoundComponent/PageNotFoundComponent';

class App extends Component {
  state = {
    navPages: [
      { name: "Home",
        uri:"/#Home"
      },
      { name: "About Me",
        uri:"/#About"
      },
      { name: "Experience",
        uri:"/#Experience"
      },
      { name: "Resume",
        uri:"/#Resume"
      },
      { name: "Portfolio",
        uri:"/#Portfolio"
      },
      { name: "Contact Me",
        uri:"/#Contact"
      },
      { name: "Blog",
        uri:"https://medium.tylerwhitehurst.com/"
      },
    ],

    routes: [
      { path: '/',
        component: Home
      },
      { path: '/home',
        component: Home
      },
    ],
  }

  render() {
    const routes = this.state.routes.map((route) =>
      < Route exact path={route.path} key={route.path}
        render={(props) => <route.component {...props}/>}
      />
    );

    return (
      <div className="App">
        <Navbar pages={this.state.navPages}/>
        <Router>
          <Switch>
            {routes}
            <Route path='**' component={PageNotFoundComponent} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
