import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'
import './bootstrap-5.1.3-dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom';
function NavbarEn() {
    return (
        <Navbar bg="transparent" variant="dark" expand="lg" >
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className='nav-item nav-link' to='/home'>Home</NavLink>
                        <NavLink className='nav-item nav-link' to='/experience'>Experience</NavLink>
                        <NavLink className='nav-item nav-link' to='/projects'>Projects</NavLink>
                        <NavLink className='nav-item nav-link' to='/contact'>Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarEn
