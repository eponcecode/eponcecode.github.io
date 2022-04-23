import React from 'react'
import { Container, Image } from 'react-bootstrap';
import Header from '../../complementos/Header';
export default class AngularEs extends React.Component {
    state = { language : "ES", URL: 'en-angular' } 
    render(){
    return (
        <>
        <Header dataFromParent = {this.state} />
        <Container align='center' className='text-light rounded' style={{ background: '#444444' }}>
        <Container className='p-5'>
            <Container align='center' className='p-2'>
                <h3>Angular</h3>
                <br />
                <b><h5>Heroes App</h5></b>
                <p>Angular & Material Design</p>
                <Container  className='p-2'>
                    <Image className='w-50' src='img/angular-heroes-app.png' />
                </Container>
                <a href='https://eponcecode-heroes-app.netlify.app' target="_blank"  rel="noreferrer"><Image className='p-2' src='img/link.png' />   Ver más...</a>
            </Container>
            <Container align='center'  className='p-2'>
                <b><h5>Forms App</h5></b>
                <p>Angular & Bootstrap</p>
                <Container className='p-2'>
                    <Image className='w-50' src='img/angularForms.png' />
                </Container>
                <a href='https://eponcecode-angularforms.netlify.app' target="_blank"  rel="noreferrer"><Image className='p-2' src='img/link.png' />   Ver más...</a>
            </Container>
            <Container align='center'  className='p-2'>
                <b><h5>Pipes App</h5></b>
                <p>Angular & Prime NG</p>
                <Container  className='p-2'>
                    <Image className='w-50' src='img/pipes.png' />
                </Container>
                <a href='https://eponcecode.github.io/angular-pipes/' target="_blank"  rel="noreferrer"><Image className='p-2' src='img/link.png' />   Ver más...</a>
            </Container>
            <Container align='center'  className='p-2'>
                <b><h5>Países App</h5></b>
                <p>Angular & Bootstrap</p>
                <Container  className='p-2'>
                    <Image className='w-50' src='img/paises.png' />
                </Container>
                <a href='https://eponcecode.github.io/angular-paises-app/' target="_blank"  rel="noreferrer"><Image className='p-2' src='img/link.png' />   Ver más...</a>
            </Container>
            </Container>
            </Container>
        </>
    )
    }
}
