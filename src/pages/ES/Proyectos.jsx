import React from 'react'
import { Container } from 'react-bootstrap';
import Header from '../../complementos/Header';
export default class Proyectos extends React.Component {
    state = { language : "ES", URL: 'others' } 
    render(){
    return (
        <>
        <Header dataFromParent = {this.state} />
        <Container align='center' className='text-light rounded' style={{ background: '#444444' }}>
        <Container className='p-5'>
            <Container align='center' className='p-2'>
                <h3>Proyectos escolares</h3>
                <br />
                <h5>Sistema Experto  (Prolog)</h5><br/>
                <Container dangerouslySetInnerHTML={{ __html: "<iframe width='50%' height='315' src='https://www.youtube-nocookie.com/embed/vN62rVLDZNc?rel=0' allowfullscreen/>" }} />
                <Container className='p-4' align='justify'>
                <p>Se realizó un sistema experto de acuerdo a una base de conocimientos del tema de psiquiatría. Este programa es meramente una simulación.</p>
                </Container>
            </Container>
            </Container>
            </Container>
        </>
    )
    }
}
