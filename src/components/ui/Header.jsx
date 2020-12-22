import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap'
import DataContext from '../context/DataContext';
import config from '../../env/config'



class Header extends Component {
    state = {  }
    handleLogout=()=>{
      localStorage.removeItem('currentUser');
      this.context.handleLoginChange(false)
      window.location.href = "#/login"; 
      // this.alert('Succesfully Logout!')
  
    }

    render() { 
      const usertype = config.currentUser.user_type
        return ( 
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            
            {Number(usertype)===1?<Nav className="ml-auto">
              <Nav.Link eventKey={1} href="#hotels">Hotels</Nav.Link>
              <Nav.Link eventKey={2} href="#products">
                Products
              </Nav.Link>
              <Nav.Link eventKey={3} href="#users">
                Users
              </Nav.Link>
              <Nav.Link eventKey={4} href="#logs">
                Logs
              </Nav.Link>
              <Nav.Link onClick={this.handleLogout}>
                Logout
              </Nav.Link>
              <Nav.Link  eventKey={5} href='#give'>
                Give & Take
              </Nav.Link>
              {/* <NavDropdown
               title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#">Username</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={this.handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>:<Nav className="ml-auto">
              <Nav.Link eventKey={1} href="#give">Give</Nav.Link>
              <Nav.Link eventKey={2} href="#take">
                Take
              </Nav.Link>
              <Nav.Link  onClick={this.handleLogout}>
                Logout
              </Nav.Link>
             
              
            </Nav>}
          </Navbar.Collapse>
        </Navbar>
       );
    }
}
Header.contextType=DataContext
export default Header;