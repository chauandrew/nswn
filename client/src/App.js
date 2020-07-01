import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import Stories from './pages/Stories/Stories';
import Course101 from './pages/Course101/Course101';
import About from './pages/About/About';
import Connect from './pages/Connect/Connect';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/stories">
              <Stories />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/course-101">
              <Course101 />
            </Route>
            <Route exact path="/get-connected">
              <Connect />
            </Route>
            <Route><h2>Page not found!</h2></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
