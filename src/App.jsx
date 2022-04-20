import Footer from "./complementos/Footer";
import {BrowserRouter,Route, Routes } from "react-router-dom";
import { Helmet } from 'react-helmet';
import AcercaDe from './pages/ES/AcercaDe';
import Proyectos from './pages/ES/Proyectos';
import Experiencia from './pages/ES/Experiencia';
import Contacto from './pages/ES/Contacto';
import AboutMe from './pages/EN/AboutMe';
import Experience from './pages/EN/Experience';
import Projects from './pages/EN/Projects';
import Contact from './pages/EN/Contact';
export default function App() {
  return (
    <>
      <Helmet>
        <style>{'body { background-color: #212020; text: white;}'}</style>
      </Helmet>

      <BrowserRouter>
          <Routes>
            <Route path="/" element={<><AboutMe /></>} />
            <Route path="about_me" element={<><AboutMe /></>} />
            <Route path="experience" element={<><Experience /></>} />
            <Route path="projects" element={<><Projects /></>} />
            <Route path="contact" element={<><Contact/></>} />
            <Route path="acerca_de" element={<><AcercaDe /></>} />
            <Route path="experiencia" element={<><Experiencia/></>} />
            <Route path="proyectos" element={<><Proyectos/></>} />
            <Route path="contacto" element={<><Contacto/></>} />
          </Routes>
        </BrowserRouter>
      <br />
      <br />
      <Footer />
    </>
  );
}
