import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
export default function NavbarES() {
        return (
            <Navbar bg="transparent" variant="dark" expand="lg" >
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className='nav-item nav-link' to='/acerca_de'>Acerca de</Link>
                            <Link className='nav-item nav-link' to='/experiencia'>Experiencia</Link>
                            <Link className='nav-item nav-link' to='/proyectos'>Proyectos</Link>
                            <Link className='nav-item nav-link' to='/contacto'>Contacto</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}
