import './Header.css';

function Nav(props){
    return(
        <nav className={props.id}>
            <li>
                <a href="#sobreMi">Sobre mí</a>
            </li>
            <li>
                <a href="#misEstudios">Mis Estudios</a>
            </li>
            <li>
                <a href="#colaboraciones">Colaboraciones</a>
            </li>
            <li>
                <a href="https://linktr.ee/natiworlds" target="_blank">Mis redes</a>
            </li>
            <li>
                <a href="https://naatii.github.io/natiworlds.com" target="_blank">Tienda</a>
            </li>
        </nav>
    );
}

export default Nav