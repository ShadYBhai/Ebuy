import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
    <header>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
          <Container>
            <Navbar.Brand href="#home">E-Buy</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>                    
   
                <Nav className="ml-auto">
                <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
            <Nav.Link href="/login"><i className='fas fa-user'></i> Sign In</Nav.Link>
            </Nav>
  
          </Container>
        </Navbar>
 </header>
)
}

export default Header