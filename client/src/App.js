import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './components/Header/Header';
import * as Pages from "./pages"
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Pages.Homepage} />
            <Route exact path="/stories" component={Pages.Stories} />
            <Route exact path="/about" component={Pages.About} />
            <Route exact path="/course-101" component={Pages.Course101} />
            <Route exact path="/get-connected" component={Pages.Connect} />
            <Route component={Pages.Error404} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
