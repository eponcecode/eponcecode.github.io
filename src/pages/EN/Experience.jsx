import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import Header from '../../complementos/Header';
export default class Experience extends React.Component {
    state = { language : "EN", URL: 'experiencia' } 
    render(){
    return (
        <>
        <Header dataFromParent = {this.state} />
            <Container className='text-light rounded' style={{ background: '#444444' }}>
            <Container className='p-5'>
            <Container align="center" className="mb-5">
            <h2>Experience</h2>
            </Container>
                <Row>
                        <Col xs={12} sm={12} md={6} lg={6} xxl={6} align='justify'>
                        <h3>Software Developer</h3><b>Sep 2021 - Mar 2022 </b>
                        <h5>It and Apps - Revetra</h5><p>Puebla, MX </p>
                        <p>I make web applications with JQuery, Java, Spring, React and Hibernate technology for Front-Backend and SQL for Database</p>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xxl={6} align='justify'>
                        <h3>Technical</h3><b>Dec 2020 - April 2021</b>
                        <h5>Broxel</h5><p>CDMX, MX </p>
                        <p>During the period that the company was in charge of the RUTA transportation system in the city of Puebla, I worked performing preventive and corrective maintenance to the access and collection equipment in the same city.</p>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xxl={6} align='justify'>
                        <h3>Professional Practices</h3><b>2019 - 2020</b>
                        <h5>Meritorious Autonomous<br />University of Puebla</h5>
                        <p>Heróica Puebla de Zaragoza <br /> Puebla, MX</p>
                        <p>I made a research document where I address issues of computational security starting from the definition of cryptography and its types (Symmetric, Asymmetric and Hybrid), as well as the commonly used algorithms (DES, 3DES, AES, RSA, HASH functions) getting to see the definitions of the SSL and TLS data transmission protocols, with this, I elaborated an example of how to generate an SSH key and finally I did a little investigation with an example of what Steganography is (hide messages on images).</p>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xxl={6} align='justify'>
                        <h3>Social Service</h3><b>2018 - 2019</b>
                        <h5>Meritorious Autonomous<br />University of Puebla</h5>
                        <p>Heróica Puebla de Zaragoza <br /> Puebla, MX</p>
                        <p>I carried out a research process to develop a program that makes use of characteristics extraction techniques and object detection techniques used in biometrics known as Gabor, LBP, PCA, Viola Jones and SIFT in Python</p>
                    </Col>
                </Row>
            </Container>
            </Container>
        </>
    )
    }
}
