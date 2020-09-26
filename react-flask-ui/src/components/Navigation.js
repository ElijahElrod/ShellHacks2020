import React from 'react';
import {Navbar} from 'react-bootstrap';


function NavigationSection() {
    return (
        <Navbar bg="light" style = {{width: '100%'}}>
            <Navbar.Brand href="#home">Convosential</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        </Navbar>
    )
};

export default NavigationSection