import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
function About() {
    return (
        <>

            <Container align='center'>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={6} xxl={6}>
                        <br />
                        <Image className="w-50 p-1" src="img/foto.jpg" thumbnail='dark'/>
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
                        <h4>Bachelor of Computer Science</h4>
                        <br />
                        <p>Software developer | Code enthusiast | React | Angular | Java | I enjoy developing and learning about their technologies, as well as their effects in our daily lives, creating implementations and improvements for a better use and use of resources.</p>
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
                                <p><b>Javascript</b></p>
                            </Container>
                            <Container>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p><b>Python</b></p>
                            </Container>
                            <Container>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "40%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p><b>Angular</b></p>
                            </Container>
                            <Container>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "40%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p><b>React</b></p>
                            </Container>
                            <Container>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "40%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p><b>PL/SQL</b></p>
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
                            <h3><Image src='img/hat.png' /> Education:</h3>
                            <h4>Bachelor of Computer Science</h4>
                            <p><b>Meritorious Autonomous University of Puebla</b><br/>2016-2020</p>
                        </Container>
                        <br />
                        <br />
                        <Container>                            
                            <h3>Languages:</h3>
                            <Image src='img/star_full.png'/><Image src='img/star_full.png'/><Image src='img/star_full.png'/><Image src='img/star.png'/><Image src='img/star.png'/>
                            <p><b>English (Intermediate)</b></p>
                            <Image src='img/star_full.png'/><Image src='img/star_full.png'/><Image src='img/star_full.png'/><Image src='img/star_full.png'/><Image src='img/star_full.png'/>
                            <p><b>Spanish (Native)</b></p>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About
