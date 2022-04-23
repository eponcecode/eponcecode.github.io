import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import Header from '../../complementos/Header';
export default class AcercaDe extends React.Component {
    state = { language : "ES", URL: 'about_me' } 
    render(){
    return (
        <>
        <Header dataFromParent = {this.state} />
            <Container align='center' className='text-light rounded' style={{ background: '#444444' }}>
            <Container align='center' className='p-5'>
                <Row >
                    <Col xs={12} sm={12} md={12} lg={6} xxl={6}>
                        <br />
                        <Image className="w-50 p-1" src="img/foto.jpg" thumbnail='dark'/>
                        <br/>Heróica Puebla de Zaragoza, Puebla, MX
                        <br />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xxl={6}>
                        <h2>Estefanía Ponce de León Rosas</h2>
                        <h4>Lic. en Ciencias de la Computación</h4>
                        <br />
                        <p>Desarrolladora de software | Entusiasta del código | React | Angular | Java | Disfruto el desarrollo y aprender sobre sus tecnologias, asi como sus efectos en nuestra vida diaria, creando implementaciones y mejoras para un mejor uso y aprovechamiento de recursos.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={6} xxl={6}>
                        <Container>
                            <h3>Skills</h3>
                            <Container>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p><b>Java</b></p>
                            </Container>
                            <Container>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p><b>Javascript</b></p>
                            </Container>
                            <Container>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p><b>Typescript</b></p>
                            </Container>
                            <Container>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p><b>Angular</b></p>
                            </Container>
                            <Container>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p><b>React</b></p>
                            </Container>
                            <Container>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p><b>SQL</b></p>
                            </Container>
                        </Container>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xxl={6}>
                        <Container>
                            <h3><Image src='img/hat.png' /> Educación</h3>
                            <h4>Licenciatura en Ciencias de la Computación</h4>
                            <p><b>Benemérita Universidad Autónoma de Puebla</b><br/>2016-2020</p>
                        </Container>
                        <Container>                            
                            <h3>Idiomas</h3>
                            <Image src='img/star_full.png'/><Image src='img/star_full.png'/><Image src='img/star_full.png'/><Image src='img/star.png'/><Image src='img/star.png'/>
                            <p><b>Inglés (Intermedio)</b></p>
                            <Image src='img/star_full.png'/><Image src='img/star_full.png'/><Image src='img/star_full.png'/><Image src='img/star_full.png'/><Image src='img/star_full.png'/>
                            <p><b>Español (Nativo)</b></p>
                        </Container>
                    </Col>
                </Row>
            </Container>
            </Container>
        </>
    )}
}
