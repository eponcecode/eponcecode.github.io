import React from 'react'
import { Container } from 'react-bootstrap';
import Header from '../../complementos/Header';
export default class JavaEs extends React.Component {
    state = { language : "ES", URL: 'en-java' } 
    render(){
    return (
        <>
        <Header dataFromParent = {this.state} />
        <Container align='center' className='text-light rounded' style={{ background: '#444444' }}>
        <Container className='p-5'>
            <Container align='center' className='p-2'>
                <h3>Proyectos escolares</h3>
                <br />
                <h5>Simuladores (Java)</h5><br/>
                <Container dangerouslySetInnerHTML={{ __html: "<iframe width='50%' height='315' src='https://www.youtube-nocookie.com/embed/m8TE-WkPrKo?rel=0' allowfullscreen/>" }} />
                <Container className='p-4' align='justify'>
                <p>Este trabajo contiene 4 simuladores en modo grafico para los siguientes casos:<br/><br />* Asignación de procesos utilizando los algoritmos de ubicación: Primer Ajuste, Mejor Ajuste o Peor Ajuste, para memoria contigua particiones variables fijas. (Un extra es el algoritmo de Siguiente ajuste, que únicamente realiza dos corrimientos) Se definió 5 procesos como un máximo de procesos para que se pueda graficar de forma correcta.<br />
                        <br />
                        *Mostrar el uso de las políticas de reemplazo FIFO y LRU, sacando la información proporcionada por un usuario desde un programa que crea el archivo datos.txt con llamadas al sistema en ejecutable para Windows. Lenguaje en Java, en plataforma Windows 10.<br />
                        <br />
                        *Utilizar las llamadas del sistema para el manejo de archivos y directorios conteniendo un Menú que con las opciones:<br />
                        1.Ver atributos de un archivo<br />
                        2.Crear un directorio<br />
                        3.Borrar un directorio<br />
                        4.Cambiar a otro directorio<br />
                        5.Listar el contenido de un directorio<br />
                        6.Copiar un archivo de un directorio a otro<br />
                        7.Borrar un archivo de un directorio<br />
                        8.Mover un archivo de un directorio a otro<br />
                        9. Concatenar dos archivos.<br />
                        10. Mostrar el contenido de un archivo<br />
                        <br />
                        *Muestra el funcionamiento de los algoritmos de planificación: FCFS, SSTF, SCAN, CSCAN, LOOK, CLOOK</p>
                </Container>
                <h5>Máquina de Turing  (Java)</h5><br/>
                <Container dangerouslySetInnerHTML={{ __html: "<iframe width='50%' height='315' src='https://www.youtube-nocookie.com/embed/pzUFC5atpj0?rel=0' allowfullscreen/>" }} />
                <Container className='p-4' align='justify'>
                <p>En este trabajo se presenta el desarrollo de un proyecto que acepta cualquier máquina de Turing (de una sola cinta), realizando las operaciones de esta devuelve la cinta con el resultado final.</p>
                </Container>
                <h5>Oraciones simples (oraciones bien formadas)  (Java)</h5><br/>
                <Container dangerouslySetInnerHTML={{ __html: "<iframe width='50%' height='315' src='https://www.youtube-nocookie.com/embed/4LVk_cWf_xk?rel=0' allowfullscreen/>" }} />
                <Container className='p-4' align='justify'>
                <p>Este programa tiene como objetivo ser una herramienta que ayude a los estudiantes de primaria (o a quien lo necesite) repasar la construcción de oraciones bien formadas. Estas oraciones bien formadas están compuestas por sujeto y predicado, dónde, en el sujeto podrán utilizarse artículos, sustantivos, pronombres, nombres propios, conjunciones y  adjetivos.
El software permite al usuario escribir una frase con las palabras presentadas por el software. Una vez que el programa ha leído la frase, entonces hace una revisión léxica, esto es, revisa que las palabras estén bien escritas; una revisión sintáctica, revisa que las palabras estén colocadas en el orden correcto; y una revisión semántica, revisa que la oración sea coherente.
Las palabras que se pueden utilizar para formar oraciones están cargadas en el programa, no se podrán utilizar otras palabras. Como este programa es apenas un prototipo, maneja sólo un determinado número de palabras de cada tipo (sustantivo, verbo, etc.) y un determinado número de reglas sintácticas.
El programa, al evaluar la oración, indica al alumno si la oración está bien formada y, tiene una interfaz amigable con el usuario, ya que, cuando una oración esté bien escrita presenta una imagen que tiene que ver con la oración que el estudiante acaba de escribir.</p>
                </Container>
            </Container>
            </Container>
            </Container>
        </>
    )
    }
}
