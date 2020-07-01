import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/logo.png';
import './Header.css';


class Header extends Component {
  render() {
    return (
        <Nav className='m-auto'>
          <Nav.Item>
            <Nav.Link href="/stories" className="text-secondary">OUR STORIES</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about" className="text-secondary">WHAT TO EXPECT</Nav.Link>
          </Nav.Item>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" width="50" height="50"></img>
          </Navbar.Brand>
          <Nav.Item>
            <Nav.Link href="/course-101" className="text-secondary">GOT QUESTIONS?</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/get-connected" className="text-dark font-weight-bold">GET STARTED</Nav.Link>
          </Nav.Item>
        </Nav>
    );
  }
}

export default Header;