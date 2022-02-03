import { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'
import './bootstrap-5.1.3-dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom';
class NavbarBody extends Component {
    render() {
        return (
            <Navbar bg="transparent" variant="dark" expand="lg" >
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className='nav-item nav-link' to='/inicio'>Inicio</NavLink>
                            <NavLink className='nav-item nav-link' to='/experiencia'>Experiencia</NavLink>
                            <NavLink className='nav-item nav-link' to='/proyectos'>Proyectos</NavLink>
                            <NavLink className='nav-item nav-link' to='/contacto'>Contacto</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>);
    }
}
export default NavbarBody;
