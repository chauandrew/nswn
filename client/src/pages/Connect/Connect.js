import React, {useState, useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';
import banner from '../../assets/get-started-placeholder.jpg';
import flyers from '../../data/flyers.json';
import Flyer from '../../components/Flyer/Flyer';
import './Connect.css';

const Connect = () => {

    /* Checks window resize to see if we need to switch to mobile view */
    const[contentIDs, setContentIDs] = useState(["get-started-body", "get-started-form", "get-started-flyers"])

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        handleWindowSizeChange();

        return function cleanup() {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    },[]);

    /* Renders different views depending on width */
    const handleWindowSizeChange = () => {
        if(window.innerWidth <= 768){
            setContentIDs(["get-started-body-mobile", "get-started-form-mobile", "get-started-flyers-mobile"]);
        }else{
            setContentIDs(["get-started-body", "get-started-form", "get-started-flyers"]);
        }
    }

    /* Handles the signup from students, probably need a backend for this? */
    const handleSignUp = async (event) => {
        let nameValid = handleNameChange(event.target.elements[0].value);
        let emailValid = handleEmailChange(event.target.elements[1].value);

        if (!nameValid) {
            alert("Please enter your first and last name");
        }
        else if (!emailValid) {
            alert("Invalid email format");
        }
        else {
            alert("Thanks for connecting with us! A staff will be in touch shortly.");
        }
    }

    /* Makes sure name has the correct format */
    const handleNameChange = (name) => {
        // Checking for format of the name
        const nameInput = name;
        let lastSpacePos = nameInput.lastIndexOf(' ');
        let firstNameValid = lastSpacePos > 0;
        let lastNameValid = nameInput.length - lastSpacePos > 1;

        // If invalid, indicate an error
        if (nameInput === "" || !firstNameValid || !lastNameValid) {
            return false;
        }

        // If valid, indicate valid
        else {
            return true;
        }

    }

    /* When input for email address changes, try to validate the email address */
    const handleEmailChange = (email) => {
        const emailInput = email;
        let lastAtPos = emailInput.lastIndexOf('@');
        let lastDotPos = emailInput.lastIndexOf('.');

        // Logics used to check validity of email input
        let validFormat = lastAtPos > 0 && lastDotPos > 2 && lastAtPos < lastDotPos;
        let containsDoubleAt = emailInput.lastIndexOf('@@') !== -1;
        let validOrgNameLength = emailInput.length - lastDotPos > 2;

        // If any of the logics are not satisfied, email is not valud
        if (emailInput === "" || !validFormat || !validOrgNameLength || containsDoubleAt) {
            return false;
        }

        // Otherwise, it's valid!
        else {
            return true;
        }
    };

    /* Renders the list of flyers from json file */
    const flyerList = flyers.events.map((event) => {
        return(
            <Flyer src={event.src} alt={event.eventName} time={event.eventTime} location={event.location} />
        )
    })

    /* Actual content of this page */
    return (
        <div className="page-content">
            {/* Can the final banner have a title text saying "Get Started?" It's pretty hard to 
            make sure that the text is centered and responsive */}
            <img className="get-started-banner" src={banner} alt="Get started!" />
            <div className="page-body" id={contentIDs[0]}>
                <div className="get-started-sub" id={contentIDs[1]}>
                    <Form onSubmit={handleSignUp}>
                        <div className="inputField">
                            <Form.Label>Name *</Form.Label>
                            <Form.Control name="name" type="name" placeholder="First & Last Name" style={{ backgroundColor: "white" }}
                            />
                        </div>
                        <br />
                        <div className="inputField">
                            <Form.Label>Email *</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Email" style={{ backgroundColor: "white" }}
                            />
                        </div>

                        {/* Checkboxes */}
                        <br />
                        <Form.Check type="checkbox" label="I'm interested in Fall 2020 Welcome Week Events" />
                        <br />
                        <Form.Check type="checkbox" label="I want to join a small group with 
                    other incoming freshmen and upperclassmen" />
                        <br />
                        <Form.Check type="checkbox" label="I want to get involved in Klesis! (Service, Mentorship, Fun Stuff too!)" />
                        <br />
                        <Form.Check type="checkbox" label="I'm interested in learning about Christianity (course101.org)" />

                        <br />
                        <Button variant="primary" type="submit">Connect with GP!</Button>
                    </Form>
                </div>
                <div className="get-started-sub" id={contentIDs[2]}>
                    {flyerList}
                </div>
            </div>
        </div>
    );
}

export default Connect;