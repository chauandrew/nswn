import React, { Component } from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Container from 'react-bootstrap/Container';
import StoryCard from '../../components/StoryCard/StoryCard';
import HeroImage from '../../components/HeroImage/HeroImage';

import * as Placeholders from '../../assets/placeholders';
import './Stories.css';

class Stories extends Component {
    render() {
        var placeholderText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        return (
            <div>
                <HeroImage value="OUR STORY" src={Placeholders.standard}/>
                <Container fluid className="card-container">
                    <CardColumns>
                        <StoryCard title="Jeff Ding" value={placeholderText} src={Placeholders.standard} />
                        <StoryCard title="Jeff Ding" value={placeholderText} src={Placeholders.wide} />
                        <StoryCard title="Jeff Ding" value={placeholderText} src={Placeholders.vertical} />
                        <StoryCard title="Jeff Ding" value={placeholderText} src={Placeholders.wide} />
                        <StoryCard title="Jeff Ding" value={placeholderText} src={Placeholders.standard} />
                        <StoryCard title="Jeff Ding" value={placeholderText} src={Placeholders.wide} />
                        <StoryCard title="Jeff Ding" value={placeholderText} src={Placeholders.standard} />
                        <StoryCard title="Jeff Ding" value={placeholderText} src={Placeholders.vertical} />
                    </CardColumns>
                </Container>
            </div>
        );
    }
}

export default Stories;