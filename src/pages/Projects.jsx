import React from 'react'
import {Container, Image } from 'react-bootstrap';
function Projects() {
    return (
        <>
            <br />
            <br />
            <Container align='center'>
                <h3>Angular</h3>
                <br />
                <b><h5>Países App</h5></b>
                <p>Angular & Bootstrap</p>
                <Container>
                    <Image className='w-50' src='img/paises.png' />
                </Container>
                <br />
                <a href='https://eponcecode.github.io/angular-paises-app/' target="_blank"><Image className='p-2' src='img/link.png' />   More...</a>
                <br /><br />
                <b><h5>Pipes App</h5></b>
                <p>Angular & Prime NG</p>
                <Container>
                    <Image className='w-50' src='img/pipes.png' />
                </Container>
                <br />
                <a href='https://eponcecode.github.io/angular-pipes/' target="_blank"><Image className='p-2' src='img/link.png' />   More...</a>
            </Container>
            <br />
            <Container align='center'>
                <h3>React</h3>
                <p><b>Sites made with React & Bootstrap</b></p>
                <br /> <p>This site and...</p><br/>
                <h5>Simple template</h5><br/>
                <Container>
                    <Image className='w-50' src='img/plantilla-sencilla.png' />
                </Container>
                <br />
                <a href='https://eponcecode.github.io/plantilla-sencilla/' target="_blank"><Image className='p-2' src='img/link.png' />   More...</a>
            </Container>
            <br />
            <Container align='center'>
                <h3>Scholar projects</h3>
                <br />
                <h5>Simulators (Java)</h5><br/>
                <Container dangerouslySetInnerHTML={{ __html: "<iframe width='50%' height='315' src='https://www.youtube-nocookie.com/embed/m8TE-WkPrKo?rel=0' allowfullscreen/>" }} />
                <Container className='w-50' align='justify'>
                <br/><p>This work contains 4 simulators in graphic mode for the following cases: Assignment of processes using the location algorithms: <br/><br/>First Fit, Best Fit or Worst Fit, for contiguous memory fixed variable partitions. (An extra is the Next Fit algorithm, which only performs two runs) 5 processes were defined as a maximum of processes so that it can be plotted correctly.<br />
                        <br />
                        *Show the use of the FIFO and LRU replacement policies, taking the information provided by a user from a program that creates the data.txt file with system calls in executable. Language in Java for Windows 10 platform.<br />
                        <br />
                        *Use the system calls to manage files and directories containing a Menu with the options: <br />
                         1.View attributes of a file <br />
                         2.Create a directory <br />
                         3. Delete a directory <br />
                         4.Change to another directory <br />
                         5.List the contents of a directory <br />
                         6.Copy a file from one directory to another <br />
                         7.Delete a file from a directory <br />
                         8.Move a file from one directory to another <br />
                         9. Concatenate two files. <br />
                         10. Show the contents of a file <br />
                        <br />
                        *Shows the operation of the scheduling algorithms: FCFS, SSTF, SCAN, CSCAN, LOOK, CLOOK</p>
                </Container>
                <br />
                <br />
                <h5>Turing machine (Java)</h5><br/>
                <Container dangerouslySetInnerHTML={{ __html: "<iframe width='50%' height='315' src='https://www.youtube-nocookie.com/embed/pzUFC5atpj0?rel=0' allowfullscreen/>" }} />
                <Container className='w-50' align='justify'>
                <br/><p>This work presents the development of a project that accepts any Turing machine (with a single tape), performing the operations of this machine returns the tape with the final result.</p>
                </Container>
                <br />
                <br />
                <h5>Simple sentences (well-formed sentences)  (Java)</h5><br/>
                <Container dangerouslySetInnerHTML={{ __html: "<iframe width='50%' height='315' src='https://www.youtube-nocookie.com/embed/4LVk_cWf_xk?rel=0' allowfullscreen/>" }} />
                <Container className='w-50' align='justify'>
                <br/><p>This program aims to be a tool that helps elementary students (or whoever needs it) to review the construction of well-formed sentences (on spanish). These well-formed sentences are composed of subject and predicate, where, in the subject, they can use articles, nouns, pronouns, proper nouns, conjunctions, and adjectives. The software allows the user to write a sentence with the words presented by the software. Once the program has read the sentence, it then does a lexical check, that is, it checks that the words are spelled correctly; a syntactic check checks that the words are placed in the correct order; and a semantic check, check that the sentence is coherent. Words that can be used to make sentences are loaded into the program, no other words can be used. As this program is just a prototype, it handles only a certain number of words of each type (noun, verb, etc.) and a certain number of syntactic rules. The program, when evaluating the sentence, indicates to the student if the sentence is well-formed and has a user-friendly interface, since, when a sentence is well written, it presents an image that has to do with the sentence that the student finishes to write.</p>
                </Container>
                <br />
                <br />
                <h5>Expert system  (Prolog)</h5><br/>
                <Container dangerouslySetInnerHTML={{ __html: "<iframe width='50%' height='315' src='https://www.youtube-nocookie.com/embed/vN62rVLDZNc?rel=0' allowfullscreen/>" }} />
                <Container className='w-50' align='justify'>
                <br/><p>An expert system was made according to a knowledge base on the subject of psychiatry. This program is merely a simulation.</p>
                </Container>
                <br />
                <br />
            </Container>
            <br />
        </>
    )
}

export default Projects
