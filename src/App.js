import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header';
import Imagen from './assets/imagen1.jpg'
import LogoCatering from './assets/logoCatering.png'
import Card from './Card'
import Footer from './Footer';
import Proyectos from './Proyectos';
import './App.css'
import './SobreMi.css'


function App() {
  return(
    <>
      <Header 
      id="header" 
      titulo="Natiworlds.com"/>
      <Proyectos/>
      <hr></hr>
      <Card 
        id="sobreMi" 
        titulo="Sobre Mí" 
        content="Hola y bienvenido a mi portfolio, soy Natalia aunque en redes sociales se me conoce como NatiWorlds, me encanta el diseño web llevo desde hace 3 años adentrandome poco a poco en este increíble mundo, y ahora mi sueño es poder formar un equipo con mis amigas y poder hacer algo muy chulo juntas." 
        imagen={Imagen}
        alt="Foto de mí."/>
      <hr></hr>
      <Card 
        id="misEstudios" 
        titulo="Mis Estudios" 
        content="Refente a mís estudios, soy estudiante del grado superior de diseño de aplicaciones web (DAW) en el instituto IES Rafael Alberti (Cádiz), estoy en primer año y creo que tengo mucha iniciativa en lo referente al aprendizaje, jamás me esperé antes de entrar a este grado la inmensidad de cosas que no tenía ni idea de como funcionaban en el ordenador, y hoy en día estoy haciendo esta página web con react y boostrap."
      />
      <hr></hr>
      <Card 
        id="colaboraciones" 
        titulo="Colaboraciones con empresas" 
        content=""
        imagen={LogoCatering}
        figure="Catering de pepes"
        imagen2={Imagen}
        figure2="Prueba"
      />
      <Footer/>
    </>
  );
}

export default App;
