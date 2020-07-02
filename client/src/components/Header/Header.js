import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/logo.png';
import './Header.css';


class Header extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  // Add event listener on window resize
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // Remove the listener when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 768;
    if (!isMobile) {
      // Desktop View
      return (
        <Navbar className='m-auto' fixed='top' expand='lg'>
          <Nav.Link href='/stories' className='text-secondary'>OUR STORIES</Nav.Link>
          <Nav.Link href='/about' className='text-secondary'>WHAT TO EXPECT</Nav.Link>
          <Navbar.Brand href='/'>
            <img src={logo} alt='logo' width='50' height='50'></img>
          </Navbar.Brand>
          <Nav.Link href='/course-101' className='text-secondary'>GOT QUESTIONS?</Nav.Link>
          <Nav.Link href='/get-connected' className='text-dark font-weight-bold'>GET STARTED</Nav.Link>
        </Navbar>
      );
    } else {
      // Mobile View
      return (
        <Navbar collapseOnSelect fixed='top' expand='lg'>
          <Navbar.Brand href='/'>
            <img src={logo} alt='logo' width='50' height='50'></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href='/' className='text-secondary'>HOME</Nav.Link>
              <Nav.Link href='/stories' className='text-secondary'>OUR STORIES</Nav.Link>
              <Nav.Link href='/about' className='text-secondary'>WHAT TO EXPECT</Nav.Link>
              <Nav.Link href='/course-101' className='text-secondary'>GOT QUESTIONS?</Nav.Link>
              <Nav.Link href='/get-connected' className='text-dark font-weight-bold'>GET STARTED</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }
  }
}

export default Header;