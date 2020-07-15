import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div>
                <div id="nswnbanner">
                    <div className="text">What is NSWN?</div>
                </div>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/YDqYu-57PNQ" allowfullscreen></iframe>
                </div>
            </div>
        );
    }
}

export default About;