import React from 'react'
import {Container } from 'react-bootstrap';
import Header from '../../complementos/Header';
export default class JavaEn extends React.Component{
    state = { language : "EN", URL: 'es-java' } 
    render(){
    return (
        <>
        <Header dataFromParent = {this.state} />
        <Container  className='text-light rounded' style={{ background: '#444444' }}>
        <Container className='p-5'>
            <Container align='center' className='p-2'>
                <h3>Scholar projects</h3>
                <br />
                <h5>Simulators (Java)</h5><br/>
                <Container dangerouslySetInnerHTML={{ __html: "<iframe width='50%' height='315' src='https://www.youtube-nocookie.com/embed/m8TE-WkPrKo?rel=0' allowfullscreen/>" }} />
                <Container className='p-4' align='justify'>
                <p>This work contains 4 simulators in graphic mode for the following cases: Assignment of processes using the location algorithms: <br/><br/>First Fit, Best Fit or Worst Fit, for contiguous memory fixed variable partitions. (An extra is the Next Fit algorithm, which only performs two runs) 5 processes were defined as a maximum of processes so that it can be plotted correctly.<br />
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
                <h5>Turing machine (Java)</h5><br/>
                <Container dangerouslySetInnerHTML={{ __html: "<iframe width='50%' height='315' src='https://www.youtube-nocookie.com/embed/pzUFC5atpj0?rel=0' allowfullscreen/>" }} />
                <Container className='p-4' align='justify'>
                <p>This work presents the development of a project that accepts any Turing machine (with a single tape), performing the operations of this machine returns the tape with the final result.</p>
                </Container>
                <h5>Simple sentences (well-formed sentences)  (Java)</h5><br/>
                <Container dangerouslySetInnerHTML={{ __html: "<iframe width='50%' height='315' src='https://www.youtube-nocookie.com/embed/4LVk_cWf_xk?rel=0' allowfullscreen/>" }} />
                <Container className='p-4' align='justify'>
                <p>This program aims to be a tool that helps elementary students (or whoever needs it) to review the construction of well-formed sentences (on spanish). These well-formed sentences are composed of subject and predicate, where, in the subject, they can use articles, nouns, pronouns, proper nouns, conjunctions, and adjectives. The software allows the user to write a sentence with the words presented by the software. Once the program has read the sentence, it then does a lexical check, that is, it checks that the words are spelled correctly; a syntactic check checks that the words are placed in the correct order; and a semantic check, check that the sentence is coherent. Words that can be used to make sentences are loaded into the program, no other words can be used. As this program is just a prototype, it handles only a certain number of words of each type (noun, verb, etc.) and a certain number of syntactic rules. The program, when evaluating the sentence, indicates to the student if the sentence is well-formed and has a user-friendly interface, since, when a sentence is well written, it presents an image that has to do with the sentence that the student finishes to write.</p>
                </Container>
            </Container>
            </Container>
            </Container>
        </>
    )
    }
}
