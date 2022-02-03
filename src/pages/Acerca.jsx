import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
function Acerca() {
    return (
        <>

            <Container align='center'>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={6} xxl={6}>
                        <br />
                        <Image className="w-50 p-2" src="img/foto.jpg?100px250" thumbnail/>
                        <br/><br/>
                        Heróica Puebla de Zaragoza, Puebla, MX
                        <br />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xxl={6}>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <h2>Estefanía Ponce de León Rosas</h2>
                        <h4>Lic. en Ciencias de la Computación</h4>
                        <br />
                        <p>Desarrolladora de software | Entusiasta del código | React | Angular | Java | Disfruto el desarrollo y aprender sobre sus tecnologias, asi como sus efectos en nuestra vida diaria, creando implementaciones y mejoras para un mejor uso y aprovechamiento de recursos.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={6} xxl={6}>
                        <Container>
                            <br />
                            <h3>Skills</h3>
                            <Container>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p><b>Java</b></p>
                            </Container>
                            <Container>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p><b>Python</b></p>
                            </Container>
                            <Container>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p><b>HTML/CSS</b></p>
                            </Container>
                            <Container>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "40%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p><b>PHP</b></p>
                            </Container>
                            <Container>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "40%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p><b>Javascript</b></p>
                            </Container>
                            <Container>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "40%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p><b>React</b></p>
                            </Container>
                            <Container>
                                <div class="progress">
                                    <div class="progress-bar" bg-secondary role="progressbar" style={{ width: "40%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p><b>C/C++</b></p>
                            </Container>
                            <Container>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p><b>MySQL</b></p>
                            </Container>
                            <Container>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p><b>SQL Server</b></p>
                            </Container>

                        </Container>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xxl={6}>
                        <br />
                        <br />
                        <Container>
                            <h3><Image src='img/hat.png' /> Educación</h3>
                            <h4>Licenciatura en Ciencias de la Computación</h4>
                            <p><b>Benemérita Universidad Autónoma de Puebla</b><br/>2016-2020</p>
                        </Container>
                        <br />
                        <br />
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
        </>
    )
}

export default Acerca
