import {Accordion} from 'react-bootstrap'
import './SobreMi.css'
import './accordion.css'

function Proyectos(){
    return(
        <>
            <h2>Mis Proyectos</h2>
            <Accordion className='mt-5 p-3'>
                <Accordion.Item eventKey='0' className='item'>
                    <Accordion.Header><p>Tienda de ropa</p></Accordion.Header>
                    <Accordion.Body>
                        <iframe src="https://naatii.github.io/natiworlds.com"></iframe>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1' className='item'>
                    <Accordion.Header><p>Juego del botón</p></Accordion.Header>
                    <Accordion.Body>
                        <iframe src='https://naatii.github.io/JuegoBoton/' title='juegoBoton'></iframe>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2' className='item'>
                    <Accordion.Header><p>Catering de pepes</p></Accordion.Header>
                    <Accordion.Body>
                        <iframe src='https://cateringdepepes.com' title='catering'></iframe>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}

export default Proyectos