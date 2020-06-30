import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../images/logo.png';
import '../css/Header.css'


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <Nav className='m-auto'>
          <Nav.Item>
            <Nav.Link href="#" className="text-secondary">OUR STORY</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="text-secondary">WHAT TO EXPECT</Nav.Link>
          </Nav.Item>
          <Navbar.Brand href="/">
            <img src={logo} width="50" height="50"></img>
          </Navbar.Brand>
          <Nav.Item>
            <Nav.Link href="#" className="text-secondary">GOT QUESTIONS?</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="text-dark font-weight-bold">GET STARTED</Nav.Link>
          </Nav.Item>
        </Nav>
    );
  }
}

export default Header;