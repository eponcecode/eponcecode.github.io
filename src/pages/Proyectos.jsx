import React from 'react'
import { Container, Image } from 'react-bootstrap';
function Proyectos() {
    return (
        <>
            <br />
            <br />
            <Container align='center'>
                <h3>Angular</h3>
                <br />
                <b><h5>Heroes App</h5></b>
                <p>Angular & Material Design</p>
                <Container>
                    <Image className='w-50' src='img/angular-heroes-app.png' />
                </Container>
                <br />
                <a href='https://eponcecode-heroes-app.netlify.app' target="_blank"><Image className='p-2' src='img/link.png' />   Ver más...</a>
            </Container>
            <br />
            <Container align='center'>
                <b><h5>Forms App</h5></b>
                <p>Angular & Bootstrap</p>
                <Container>
                    <Image className='w-50' src='img/angularForms.png' />
                </Container>
                <br />
                <a href='https://eponcecode-angularforms.netlify.app' target="_blank"><Image className='p-2' src='img/link.png' />   Ver más...</a>
            </Container>
            <br />
            <Container align='center'>
                <b><h5>Pipes App</h5></b>
                <p>Angular & Prime NG</p>
                <Container>
                    <Image className='w-50' src='img/pipes.png' />
                </Container>
                <br />
                <a href='https://eponcecode.github.io/angular-pipes/' target="_blank"><Image className='p-2' src='img/link.png' />   Ver más...</a>
            </Container>
            <br />
            <Container align='center'>
                <b><h5>Países App</h5></b>
                <p>Angular & Bootstrap</p>
                <Container>
                    <Image className='w-50' src='img/paises.png' />
                </Container>
                <br />
                <a href='https://eponcecode.github.io/angular-paises-app/' target="_blank"><Image className='p-2' src='img/link.png' />   Ver más...</a>
            </Container>
            <br />
            <Container align='center'>
                <h3>React</h3>
                <p><b>Sitios realizados con React & Bootstrap</b></p>
                <br /><p>Este sitio y ...</p> <br/>
                <h5>Plantilla sencilla</h5><br/>
                <Container>
                    <Image className='w-50' src='img/plantilla-sencilla.png' />
                </Container>
                <br />
                <a href='https://eponcecode.github.io/plantilla-sencilla/' target="_blank"><Image className='p-2' src='img/link.png' />   Ver más</a>
            </Container>
            <br />
            <Container align='center'>
                <h3>Proyectos escolares</h3>
                <br />
                <h5>Simuladores (Java)</h5><br/>
                <Container dangerouslySetInnerHTML={{ __html: "<iframe width='50%' height='315' src='https://www.youtube-nocookie.com/embed/m8TE-WkPrKo?rel=0' allowfullscreen/>" }} />
                <Container className='w-50' align='justify'>
                <br/><p>Este trabajo contiene 4 simuladores en modo grafico para los siguientes casos:<br/><br />* Asignación de procesos utilizando los algoritmos de ubicación: Primer Ajuste, Mejor Ajuste o Peor Ajuste, para memoria contigua particiones variables fijas. (Un extra es el algoritmo de Siguiente ajuste, que únicamente realiza dos corrimientos) Se definió 5 procesos como un máximo de procesos para que se pueda graficar de forma correcta.<br />
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

                <br />
                <br />
                <h5>Máquina de Turing  (Java)</h5><br/>
                <Container dangerouslySetInnerHTML={{ __html: "<iframe width='50%' height='315' src='https://www.youtube-nocookie.com/embed/pzUFC5atpj0?rel=0' allowfullscreen/>" }} />
                <Container className='w-50' align='justify'>
                <br/><p>En este trabajo se presenta el desarrollo de un proyecto que acepta cualquier máquina de Turing (de una sola cinta), realizando las operaciones de esta devuelve la cinta con el resultado final.</p>
                </Container>
                <br />
                <br />
                <h5>Oraciones simples (oraciones bien formadas)  (Java)</h5><br/>
                <Container dangerouslySetInnerHTML={{ __html: "<iframe width='50%' height='315' src='https://www.youtube-nocookie.com/embed/4LVk_cWf_xk?rel=0' allowfullscreen/>" }} />
                <Container className='w-50' align='justify'>
                <br/><p>Este programa tiene como objetivo ser una herramienta que ayude a los estudiantes de primaria (o a quien lo necesite) repasar la construcción de oraciones bien formadas. Estas oraciones bien formadas están compuestas por sujeto y predicado, dónde, en el sujeto podrán utilizarse artículos, sustantivos, pronombres, nombres propios, conjunciones y  adjetivos.
El software permite al usuario escribir una frase con las palabras presentadas por el software. Una vez que el programa ha leído la frase, entonces hace una revisión léxica, esto es, revisa que las palabras estén bien escritas; una revisión sintáctica, revisa que las palabras estén colocadas en el orden correcto; y una revisión semántica, revisa que la oración sea coherente.
Las palabras que se pueden utilizar para formar oraciones están cargadas en el programa, no se podrán utilizar otras palabras. Como este programa es apenas un prototipo, maneja sólo un determinado número de palabras de cada tipo (sustantivo, verbo, etc.) y un determinado número de reglas sintácticas.
El programa, al evaluar la oración, indica al alumno si la oración está bien formada y, tiene una interfaz amigable con el usuario, ya que, cuando una oración esté bien escrita presenta una imagen que tiene que ver con la oración que el estudiante acaba de escribir.</p>
                </Container>
                <br />
                <br />
                <h5>Sistema Experto  (Prolog)</h5><br/>
                <Container dangerouslySetInnerHTML={{ __html: "<iframe width='50%' height='315' src='https://www.youtube-nocookie.com/embed/vN62rVLDZNc?rel=0' allowfullscreen/>" }} />
                <Container className='w-50' align='justify'>
                <br/><p>Se realizó un sistema experto de acuerdo a una base de conocimientos del tema de psiquiatría. Este programa es meramente una simulación.</p>
                </Container>
                <br />
                <br />
            </Container>
            <br />
        </>
    )
}

export default Proyectos
