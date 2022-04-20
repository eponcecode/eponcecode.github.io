import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default class TitleBar extends React.Component {
    state=this.props.dataFromParent;
    render() {
        return (
            <>
                <Navbar bg="transparent" variant="dark" expand="lg">
                    <Container >
                        <Link className='navbar-brand' to="/">eponcecode</Link>
                        <Nav className="ms-auto">
                            <Link className='nav-item nav-link'
                            to={'/'+this.state.URL}>{this.state.language==='EN'?'Español':'English'}</Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        )
    }
}
