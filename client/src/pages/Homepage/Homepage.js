import React, { Component } from 'react';
import Countdown from '../../components/Countdown/Countdown';
import './Homepage.css';

class Homepage extends Component {
  render() {
    return (
      <div id="content" className="container-fluid">
        <div className="row">
          <div className="col-md-5 align-self-center" id="nswnIs">
            <h1>NSWN is </h1>
            <p id="underscore"></p>
          </div>
        </div>
		<Countdown />
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
