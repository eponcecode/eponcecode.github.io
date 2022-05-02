import React from 'react'
import { Container, Image } from 'react-bootstrap';
import Header from '../../complementos/Header';
export default class ReactEs extends React.Component {
    state = { language : "ES", URL: 'en-react' } 
    render(){
    return (
        <>
        <Header dataFromParent = {this.state} />
        <Container align='center' className='text-light rounded' style={{ background: '#444444' }}>
        <Container className='p-5'>
            <Container align='center' className='p-2'>
                <h3>React</h3>
                <p><b>Sitios realizados con React & Bootstrap</b></p>
                <p>Este sitio y ...</p>
                <Container className='p-2'>
                <h5>La Tía Lita</h5><p><b>Página de fotógrafa</b></p>
                    <Image className='w-50 m-2' src='img/latialita.png' />
                    <br/>
                <a href='https://latialita.netlify.app/' target="_blank" rel="noreferrer"><Image className='p-2' src='img/link.png' />   Ver más...</a>
                </Container>
                <Container className='p-2 wt-2'>
                <h5>Plantilla sencilla</h5><p><b>Template para DJ</b></p>
                    <Image className='w-50' src='img/plantilla-sencilla.png' />
                <br/>
                <a href='https://eponcecode.github.io/plantilla-sencilla/' target="_blank"  rel="noreferrer"><Image className='p-2' src='img/link.png' />   Ver más</a>
                </Container>
            </Container>
            </Container>
            </Container>
        </>
    )
    }
}
