import React, { Component } from 'react';
import './Homepage.css';

class Homepage extends Component {
  render() {
    return (
      <div id="content">
        <div className="row">
          <div className="col-md-5 align-self-center" id="nswnIs">
            <h1>NSWN is </h1>
            <p id="underscore"></p>
          </div>
        </div>

        <div class="container-fluid parallax">
          <div className="text-center" id="imageText">
            <h1>I am John Doe</h1>
            <p>And I'm a Photographer</p>
          </div>
        </div>

        <div id="pizza" className="text-center">
          <h1>AN INTRODUCTION TO STORYCORPS</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum neque sem, vel porttitor ex maximus eu. Suspendisse potenti. Quisque molestie scelerisque porttitor. Aenean scelerisque eros vel ante condimentum, ac auctor turpis ultricies. Nulla quis dapibus ligula. Duis sollicitudin ligula venenatis congue auctor. Sed sit amet nulla non felis vulputate convallis ac ac leo.</h3>
          
        </div>
      </div>
    );
  }
}

export default Homepage;
