import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  componentDidMount() {
    fetch(window.location.origin.toString() + "/api")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  render() {

    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      //   <p className="App-intro">{this.state.apiResponse}</p>
      // </div>
      <div id="content">
        <p>This is some content.</p>
        <div>
          <p>Some other content.</p>
        </div>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      //   <p className="App-intro">{this.state.apiResponse}</p>
      // </div>
    );
  }
}

export default App;
