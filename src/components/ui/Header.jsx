import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'

class Header extends Component {
    state = {  }
    render() { 
        return ( 
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            
            <Nav className="ml-auto">
              <Nav.Link href="#admin">Admin</Nav.Link>
              <Nav.Link eventKey={2} href="#user">
                User
              </Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#">Username</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
       );
    }
}
 
export default Header;