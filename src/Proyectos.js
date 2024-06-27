import {Accordion} from 'react-bootstrap'
import './SobreMi.css'
import './accordion.css'
import rootedWar from './assets/rootedWar.webp'
import tikpocalipsis from './assets/tikpocalipsis.webp'

function Proyectos(){
    return(
        <>
            <h2>Mis Proyectos</h2>
            <Accordion className='mt-5 p-3'>
                <Accordion.Item eventKey='0' className='item'>
                    <Accordion.Header><p>Tienda de ropa</p></Accordion.Header>
                    <Accordion.Body>
                        <iframe src="https://tienda.natiworlds.com/" title='natiworlds'></iframe>
                        <p>( <a href='https://tienda.natiworlds.com/' target='blank'>Click a la aquí para acceder</a> )</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1' className='item'>
                    <Accordion.Header><p>Juego del botón</p></Accordion.Header>
                    <Accordion.Body>
                        <iframe src='https://naatii.github.io/JuegoBoton/' title='juegoBoton'></iframe>
                        <p>( <a href='https://naatii.github.io/JuegoBoton/' target='blank'>Click a la aquí para acceder</a> )</p>
                        
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2' className='item'>
                    <Accordion.Header><p>Catering de pepes</p></Accordion.Header>
                    <Accordion.Body>
                        <iframe src='https://cateringdcortes.netlify.app/' title='catering'></iframe>
                        <p>( <a href='https://cateringdcortes.netlify.app/' target='blank'>Click a la aquí para acceder</a> )</p>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3' className='item'>
                    <Accordion.Header><p>Rooted Wars ( Juego )</p></Accordion.Header>
                    <Accordion.Body>
                        <a href="https://gaulent.itch.io/rooted-war" target="_blank"><img src={rootedWar} height="350px"/><br/></a>
                        <p>( Click a la foto para acceder )</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4' className='item'>
                    <Accordion.Header><p>Tikpocalipsis ( Juego )</p></Accordion.Header>
                    <Accordion.Body>
                        <a href='https://alexroivas.itch.io/tikpocalipsis' title='Tikpocalipsis'><img src={tikpocalipsis} height="350px"></img></a>
                        <p>( Click a la foto para acceder )</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='5' className='item'>
                    <Accordion.Header><p>Recetagram ( Red social )</p></Accordion.Header>
                    <Accordion.Body>
                        <iframe src='https://recetagram.netlify.app/' title='Recetagram'></iframe>
                        <p>( <a href='https://recetagram.netlify.app/' target='blank'>Click a la aquí para acceder</a> )</p>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}

export default Proyectos