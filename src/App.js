import "./styles.css";

import React, { Component } from "react";

import Content from "./Content";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Content />
      </div>
    );
  }
}

export default App;
