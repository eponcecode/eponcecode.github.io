import Container from 'react-bootstrap/Container';
import React from 'react'
import Card from 'react-bootstrap/Card';

export default function Footer() {
    return (
        <Card bg="dark" text="light">
            <Card.Footer style={{background:'#444444'}}>
                <Container align="center">
                    © Copyright by eponce
                </Container>
            </Card.Footer>
</Card>
    );
}
