import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';


function NavigationSection() {
    return (
        <Navbar variant="dark" bg="dark" style={{ width: '100%' }}>
            <Navbar.Brand href="#home">Convosential</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
            </Nav>
            
        </Navbar>
    )
};


export default NavigationSection