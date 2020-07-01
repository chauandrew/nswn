import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
