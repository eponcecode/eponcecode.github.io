import React from 'react'
import {Container, Image } from 'react-bootstrap';
import Header from '../../complementos/Header';
export default class Projects extends React.Component{
    state = { language : "EN", URL: 'otros' } 
    render(){
    return (
        <>
        <Header dataFromParent = {this.state} />
        <Container  className='text-light rounded' style={{ background: '#444444' }}>
        <Container className='p-5'>
            <Container align='center' className='p-2'>
                <h3>Scholar projects</h3>
                <br />
                <h5>Expert system  (Prolog)</h5><br/>
                <Container dangerouslySetInnerHTML={{ __html: "<iframe width='50%' height='315' src='https://www.youtube-nocookie.com/embed/vN62rVLDZNc?rel=0' allowfullscreen/>" }} />
                <Container className='p-4' align='justify'>
                <p>An expert system was made according to a knowledge base on the subject of psychiatry. This program is merely a simulation.</p>
                </Container>
            </Container>
            </Container>
            </Container>
        </>
    )
    }
}
