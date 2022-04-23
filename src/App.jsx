import Footer from "./complementos/Footer";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Helmet } from 'react-helmet';
import AcercaDe from './pages/ES/AcercaDe';
import Proyectos from './pages/ES/Proyectos';
import Experiencia from './pages/ES/Experiencia';
import Contacto from './pages/ES/Contacto';
import AboutMe from './pages/EN/AboutMe';
import Experience from './pages/EN/Experience';
import Projects from './pages/EN/Projects';
import Contact from './pages/EN/Contact';
import AngularEn from "./pages/EN/Angular";
import ReactEn from "./pages/EN/React";
import JavaEn from "./pages/EN/Java";
import AngularEs from "./pages/ES/Angular";
import JavaEs from "./pages/ES/Java";
import ReactEs from "./pages/ES/React";
export default function App() {
  return (
    <>
      <Helmet>
        <style>{'body { background-color: #212020; text: white;}'}</style>
      </Helmet>

      <HashRouter>
          <Routes>
            <Route path="/" element={<><AboutMe /></>} />
            <Route path="about_me" element={<><AboutMe /></>} />
            <Route path="experience" element={<><Experience /></>} />
            <Route path="projects" element={<><Projects /></>} />
            <Route path="en/#/angular" element={<><AngularEn /></>} />
            <Route path="en/#/react" element={<><ReactEn /></>} />
            <Route path="en/#/java" element={<><JavaEn /></>} />
            <Route path="others" element={<><Projects /></>} />
            <Route path="contact" element={<><Contact/></>} />
            <Route path="acerca_de" element={<><AcercaDe /></>} />
            <Route path="experiencia" element={<><Experiencia/></>} />
            <Route path="es/angular" element={<><AngularEs /></>} />
            <Route path="es/react" element={<><ReactEs /></>} />
            <Route path="es/java" element={<><JavaEs /></>} />
            <Route path="otros" element={<><Proyectos /></>} />
            <Route path="contacto" element={<><Contacto/></>} />
          </Routes>
        </HashRouter>
      <br />
      <br />
      <Footer />
    </>
  );
}
