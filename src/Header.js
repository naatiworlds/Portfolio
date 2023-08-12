import './Header.css';
import Nav from './Nav'

function Header(){
    return(
    <header className="header">
        <h1>Natiworlds.com</h1>
        <div id="content-header">
            <p id='parrafo-header'>Este es mi portfolio, se aceptan contrataciones mediante correo, tanto para crear una web desde 0 como para hacer el mantenimiento de la misma.</p>
            <h2 id='contacto-header'><a href='mailto:natiworlds@gmail.com'>Contacto</a></h2>
        </div>
        
        <Nav id="nav-superior"/>
    </header>
    );
}

export default Header;