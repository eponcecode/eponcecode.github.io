import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './style.css'
export default class NavbarEN extends React.Component {
    constructor(){
        super()
        this.navbarDropdown = React.createRef()
    }
    render(){
    return (
        <Navbar bg="transparent" variant="dark" expand="lg" >
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='nav-item nav-link' to='/about_me'>About Me</Link>
                        <Link className='nav-item nav-link' to='/experience'>Experience</Link>
                        <NavDropdown title="Projects" id="en-nav-dropdown">
                            <Link className='dropdown-item' to='/en-angular'>Angular</Link>
                            <Link className='dropdown-item' to='/en-react'>React</Link>
                            <Link className='dropdown-item' to='/en-java'>Java</Link>
                            <NavDropdown.Divider />
                            <Link className='dropdown-item' to='/others'>Others</Link>
                        </NavDropdown>
                        <Link className='nav-item nav-link' to='/contact'>Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
    }
}
