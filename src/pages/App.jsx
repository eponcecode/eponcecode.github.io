import Footer from "../complementos/Footer";
import TitleBar from "../complementos/TitleBar";
import NavbarBody from "../complementos/Navbar"
import { Container, Image } from 'react-bootstrap';
import { HashRouter, Route, Switch,Redirect } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Acerca from '../pages/Acerca';
import Proyectos from '../pages/Proyectos';
import Experiencia from '../pages/Experiencia';
import Contacto from '../pages/Contacto';
import About from '../pages/About';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import NavbarEn from "../complementos/NavbarEn";
import TitleBarEn from "../complementos/TitleBarEn";
function App() {
  return (
    <>
      <Helmet>
        <style>{'body { background-color: #212020; text: white;}'}</style>
      </Helmet>
      
        <Container className='background- text-light rounded' style={{ background: '#444444' }}>
        <HashRouter>
          <Switch>
            <Route exact path='/contacto' ><TitleBar /><Image src="img/header.png" fluid /><NavbarBody /> <Contacto/> </Route>
            <Route exact path='/proyectos' ><TitleBar /><Image src="img/header.png" fluid /><NavbarBody /> <Proyectos/> </Route>
            <Route exact path='/experiencia' ><TitleBar /><Image src="img/header.png" fluid /><NavbarBody /> <Experiencia/> </Route>
            <Route exact path='/inicio' ><TitleBar /><Image src="img/header.png" fluid /><NavbarBody /> <Acerca/> </Route>
            <Route exact path='/' ><TitleBar /><Image src="img/header.png" fluid /><NavbarBody /> <Acerca/> </Route>
            <Route exact path='/contact' ><TitleBarEn /><Image src="img/header.png" fluid /><NavbarEn /> <Contact/> </Route>
            <Route exact path='/projects' ><TitleBarEn /><Image src="img/header.png" fluid /><NavbarEn /> <Projects/> </Route>
            <Route exact path='/experience' ><TitleBarEn /><Image src="img/header.png" fluid /><NavbarEn /> <Experience/> </Route>
            <Route exact path='/home' ><TitleBarEn /><Image src="img/header.png" fluid /><NavbarEn /> <About/> </Route>
            <Route exact path='/en' ><TitleBarEn /><Image src="img/header.png" fluid /><NavbarEn /> <About/> </Route>
            <Route path='/' ><Redirect to="/inicio" /></Route>
          </Switch>
          <br/>
          </HashRouter>
        </Container>
      
      <br />
      <br />
      <Footer />

    </>
  );
}

export default App;
