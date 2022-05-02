import React from 'react'
import {Row,Col,Container} from 'react-bootstrap';
import Header from '../../complementos/Header';
export default class Contacto extends React.Component{
    state = { language : "ES", URL: 'contact' } 
    render(){
    return (
        <>
        <Header dataFromParent = {this.state} />
        <Container className='text-light rounded' style={{ background: '#444444' }}>
        <Container align='center' className='p-5'>
        <Container align="center" className="mb-5">
            <h2>Contacto</h2>
        </Container>
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
            <a href='https://www.facebook.com/eponcecode/' target="_blank"> Estefanía Ponce de León</a>
            </Col>
        </Row>
        </Container>
        </Container>
        </>
    )
    }
}
