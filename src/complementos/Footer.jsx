import Container from 'react-bootstrap/Container';
import React from 'react'
import Card from 'react-bootstrap/Card';

function Footer() {
    return (
        <Card bg="dark" text="light">
            <Card.Footer style={{background:'#444444'}}>
                <Container align="center">
                    © 2021 Copyright: eponce
                </Container>
            </Card.Footer>
</Card>
    );
}

export default Footer;