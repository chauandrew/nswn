import React, { Component } from 'react';
import Countdown from '../../components/Countdown/Countdown';
import './Homepage.css';

class Homepage extends Component {
  render() {
    return (
      <div id="content">
        <div className="col-md-5" id="nswnIs">
          <h1>NSWN is </h1>
          <p id="underscore"></p>
        </div>

        <div class="container-fluid parallax">
          <div className="text-center" id="imageText">
            <h1>I am John Doe</h1>
            <p>And I'm a Photographer</p>
          </div>
        </div>

        <div class="container-fluid text-center" id="message">
          <h1>HISTORY OF NEW STUDENT WELCOME NIGHT</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum neque sem, vel porttitor ex maximus eu. Suspendisse potenti. Quisque molestie scelerisque porttitor. Aenean scelerisque eros vel ante condimentum, ac auctor turpis ultricies. Nulla quis dapibus ligula. Duis sollicitudin ligula venenatis congue auctor. Sed sit amet nulla non felis vulputate convallis ac ac leo.</p>
          <div className="row">
            <div className="embed-responsive embed-responsive-16by9 col-lg-7">
              {/* Youtube link must have '/embed/' or else YouTube.com will not connect */}
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/PZnIrCLz77c" allowfullscreen></iframe>
            </div>
            <div class="card col-lg-5">
              <div class="card-body">
                <h4 class="card-title">Behind the Scenes</h4>
                <hr></hr>
                <p class="card-text">Interested in checking out what it takes to put on such a large event? You might be surprised with how much fun we have while doing it.</p>
                <a href="https://www.flickr.com/photos/gracepointla/albums/72157711242540927" target="_blank" class="card-link">Check out the behind-the-scenes pictures</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
