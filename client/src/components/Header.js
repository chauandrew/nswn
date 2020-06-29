import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../images/logo.png';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar>
        <Nav>
          <Nav.Item>
            <Nav.Link href="#">Our Story</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">What To Expect</Nav.Link>
          </Nav.Item>
          <Navbar.Brand href="/">
            <img src={logo} width="50" height="50"></img>
          </Navbar.Brand>
          <Nav.Item>
            <Nav.Link href="#">Got Questions?</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Get Started</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;