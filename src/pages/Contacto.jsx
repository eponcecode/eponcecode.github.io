import React from 'react'
import {Row,Col,Container} from 'react-bootstrap';
function Contacto() {
    return (
        <>
        <br/>
        <br/>
        <Container align='center'>
        <Row>
            <Col xs={12} sm={12} md={12} lg={12} xxl={12} align='ml-auto'>
            <p><b>Correo</b></p><p>eponcecode@gmail.com</p>
            </Col>
        <Col xs={12} sm={12} md={12} lg={12} xxl={12} align='ml-auto'>
            <p><b>Linkedin</b></p>
            <a href='https://www.linkedin.com/in/estefania-ponce-de-leon/' target="_blank"> Estefanía Ponce de León</a>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xxl={12} align='ml-auto'>
                <br/>
            <p><b>Facebook</b></p>
            <a href='https://www.facebook.com/eponcedleon/' target="_blank"> Estefanía Ponce de León</a>
            </Col>
        </Row>
        </Container>
        <br/>
        <br/>
        </>
    )
}

export default Contacto
