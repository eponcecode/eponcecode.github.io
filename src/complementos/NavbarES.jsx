import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './style.css'
export default function NavbarES() {
        return (
            <Navbar bg="transparent" variant="dark" expand="lg" >
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className='nav-item nav-link' to='/acerca_de'>Acerca de</Link>
                            <Link className='nav-item nav-link' to='/experiencia'>Experiencia</Link>
                            <NavDropdown title="Projectos" id="es-nav-dropdown">
                            <Link className='dropdown-item' to='/es/angular'>Angular</Link>
                            <Link className='dropdown-item' to='/es/react'>React</Link>
                            <Link className='dropdown-item' to='/es/java'>Java</Link>
                            <NavDropdown.Divider />
                            <Link className='dropdown-item' to='/otros'>Others</Link>
                        </NavDropdown>
                            <Link className='nav-item nav-link' to='/contacto'>Contacto</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}
