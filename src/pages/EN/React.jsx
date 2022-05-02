import React from 'react'
import {Container, Image } from 'react-bootstrap';
import Header from '../../complementos/Header';
export default class ReactEn extends React.Component{
    state = { language : "EN", URL: 'es-react' } 
    render(){
    return (
        <>
        <Header dataFromParent = {this.state} />
        <Container  className='text-light rounded' style={{ background: '#444444' }}>
        <Container className='p-5'>
            <Container align='center' className='p-2'>
                <h3>React</h3>
                <p><b>Sites made with React & Bootstrap</b></p>
                <p>This site and...</p>
                <Container className='p-2'>
                <h5>La Tía Lita</h5><p><b>Photographer page</b></p>
                    <Image className='w-50 m-2' src='img/latialita.png' />
                    <br/>
                <a href='https://latialita.netlify.app/' target="_blank" rel="noreferrer"><Image className='p-2' src='img/link.png' />   More...</a>
                </Container>
                <Container className='p-2'>
                <h5>Simple template</h5><p><b>DJ Template</b></p>
                    <Image className='w-50' src='img/plantilla-sencilla.png' />
                    <br/>
                <a href='https://eponcecode.github.io/plantilla-sencilla/' target="_blank" rel="noreferrer"><Image className='p-2' src='img/link.png' />   More...</a>
                </Container>
                
            </Container>
            </Container>
            </Container>
        </>
    )
    }
}
