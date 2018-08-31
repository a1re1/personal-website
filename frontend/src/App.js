import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';

class App extends Component {
  state = {
    media: [
      {name: "linkedIn", uri: "https://www.linkedin.com/in/tyler-whitehurst-354051128", icon: "/icons/linkd.png"},
      {name: "facebook", uri: "https://www.facebook.com/a1re1/", icon: "/icons/fb.png"},
      {name: "instagram", uri: "https://www.instagram.com/a1re123/", icon: "/icons/ig.png"}
    ],
    navPages: [
      {name: "Home", uri:"./home"},
      {name: "Resume", uri:"./resume"},
      {name: "Portfolio", uri:"./portfolio"},
      {name: "Blog", uri:"./blog"},
      {name: "Contact Me", uri:"./contact"}
    ]
  }

  render() {
    return (
      <div className="App">
        <Header media={this.state.media}/>
        <Navbar pages={this.state.navPages}/>
        <Home />
      </div>
    );
  }
}

export default App;
