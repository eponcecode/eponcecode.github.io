import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
function Experiencia() {
    return (
        <>
            <br />
            <br />
            <Container className='p-5'>
                <Row >
                        <Col xs={12} sm={12} md={6} lg={6} xxl={6} align='justify'>
                        <h3>Desarrolladora de Software</h3><b>Septiembre 2021 - Marzo 2022</b>
                        <h5>It and Apps - Revetra</h5>
                        <p>Puebla, MX</p>
                        <p>Realizo aplicaciones web con tecnología JQuery, Java, Spring, React e Hibernate para Front-Backend y SQL para Base de Datos</p>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xxl={6} align='justify'>
                        <h3>Técnico</h3><b>Dic 2020 - Abril 2021</b>
                        <h5>Broxel</h5>
                        <p>CDMX, MX </p>
                        <p>Durante el periodo que estuvo la empresa a cargo del sistema de transporte RUTA en la ciudad de Puebla, laboré realizando mantenimiento preventivo y correctivo al equipo de acceso y cobro, en la misma ciudad.</p>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xxl={6} align='justify'>
                        <h3>Practicas Profesionales</h3><b>2019 - 2020</b>
                        <h5>Benemérita Universidad<br />Autónoma de Puebla</h5>
                        <p>Heróica Puebla de Zaragoza <br /> Puebla, MX</p>
                        <p>Realicé un documento de investigación donde abordo temas de seguridad computacional partiendo de la definición de la criptografía y sus tipos (Simétrica, Asimétrica e Hibrida), así como los algoritmos comúnmente utilizados (DES, 3DES, AES, RSA, Funciones HASH) llegando a ver las definiciones del los protocolos de transmisión de datos SSL y TLS, con ello, elaboré un ejemplo de como generar una llave SSH y por ultimo realicé una pequeña investigación con un ejemplo de lo que es la Esteganografía (ocultar mensajes en imágenes).</p>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xxl={6} align='justify'>
                        <h3>Servicio Social</h3><b>2018 - 2019</b>
                        <h5>Benemérita Universidad<br />Autónoma de Puebla</h5>
                        <p>Heróica Puebla de Zaragoza <br /> Puebla, MX</p>
                        <p>Realicé un proceso de investigación para elaborar un programa que hace uso de técnicas de extracción de características y técnicas de detección de objetos que se usan en la biometría, conocidas como, Gabor, LBP, PCA, Viola Jones y SIFT en lenguaje Python</p>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default Experiencia
