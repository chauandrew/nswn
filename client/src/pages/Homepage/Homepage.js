import React, { Component } from 'react';
import './Homepage.css';

class Homepage extends Component {
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

export default Homepage;
