import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from "./components/Home"
import artContainer from "./containers/artContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/art" component={artContainer} />
      </Router>
    );
  }
}

export default App;
