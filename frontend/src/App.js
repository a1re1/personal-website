import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import PageNotFoundComponent from './PageNotFoundComponent/PageNotFoundComponent';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  state = {
    navPages: [
      { name: "Home",
        uri:"/home"
      },
      { name: "Resume",
        uri:"/#Resume"
      },
      { name: "Portfolio",
        uri:"/#Portfolio"
      },
      { name: "Blog",
        uri:"/blog"
      },
      { name: "Contact Me",
        uri:"/contact"
      }
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
