import { Component , Fragment} from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'
import './bootstrap-5.1.3-dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom';
class TitleBar extends Component {
    render() {
        return (
            <>
            <Fragment>
                <Navbar bg="transparent" variant="dark" expand="lg">
                    <Container >
                        <NavLink className='navbar-brand' to="/">eponcecode</NavLink>
                        <Nav className="ms-auto">
                            <NavLink className='nav-item nav-link' to='/en'>English</NavLink>
                        </Nav>
                    </Container>
                </Navbar>
            </Fragment>
            </>);
    }
}
export default TitleBar;
