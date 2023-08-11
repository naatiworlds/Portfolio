import './SobreMi.css';
import './index.css';
import Imagen from './assets/imagen1.jpg';

function SobreMi(){
    return(
        <section id="sobreMi">
            <div class="card">
            <h2>Sobre Mí</h2>
            <div class="content">
                <img src={Imagen} alt="Imagen propia de mí"/>
                <p>Hola y bienvenido a mi portfolio, soy Natalia aunque en redes sociales se me conoce como NatiWorlds, me encanta el diseño web llevo desde hace 3 años adentrandome poco a poco en este increíble mundo, y ahora mi sueño es poder formar un equipo con mis amigas y poder hacer algo muy chulo juntas.</p>
            </div>
        </div>
        </section>
    );
}

export default SobreMi;