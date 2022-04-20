import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
export default function NavbarEN() {
    return (
        <Navbar bg="transparent" variant="dark" expand="lg" >
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='nav-item nav-link' to='/about_me'>About Me</Link>
                        <Link className='nav-item nav-link' to='/experience'>Experience</Link>
                        <Link className='nav-item nav-link' to='/projects'>Projects</Link>
                        <Link className='nav-item nav-link' to='/contact'>Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
