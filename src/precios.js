import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import './precios.css'


function Precios (){
    return(
        <section id="precios">
        <CardGroup>
            <Card>
                <Card.Body>
                <Card.Title class="card-title h2">Opción básica</Card.Title>
                <Card.Text>
                Esta opción incluye:
                <hr />
                    <li>
                        1 sola página ( web estática )
                    </li>
                    <li>
                        ✅servicio de mantenimiento ( Discord ) <br />~prioridad baja~
                    </li>
                    <li>
                        ❌ Formularios
                    </li>
                    <li>
                        ❌ Inicio de sesión
                    </li>
                    <li>
                        ❌ Base de datos
                    </li>
                </Card.Text>
                <Button variant="primary"><a href='mailto:natiworlds@gmail.com?subject=Precio Básico&body=Escribe aquí si tienes preguntas "'>Más info</a></Button>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">ult. actualización 29/08/2023</small>
                </Card.Footer>
            </Card>
            <Card>
                
                <Card.Body>
                <Card.Title class="card-title h2">Opción clásica</Card.Title>
                <Card.Text>
                    Esta opción incluye:
                    <hr />
                        <li>
                            Hasta 3 páginas ( web dinámica )
                        </li>
                        <li>
                            ✅servicio de mantenimiento ( Discord )<br />~prioridad media~
                        </li>
                        <li>
                            ✅ Formularios
                        </li>
                        <li>
                            ❌ Inicio de sesión
                        </li>
                        <li>
                            ❌ Base de datos
                        </li>
                </Card.Text>
                <Button variant="primary"><a href='mailto:natiworlds@gmail.com?subject=Precio clásico&body=Escribe aquí si tienes preguntas "'>Más info</a></Button>

                </Card.Body>
                <Card.Footer>
                <small className="text-muted">ult. actualización 29/08/2023</small>
                </Card.Footer>
            </Card>
            <Card>
                
                <Card.Body>
                <Card.Title class="card-title h2">Opción premium</Card.Title>
                <Card.Text>
                    Esta opción incluye:
                    <hr />
                        <li>
                            Hasta 5 páginas ( Página dinámica )
                        </li>
                        <li>
                            ✅servicio de mantenimiento ( Discord )<br />~prioridad alta~
                        </li>
                        <li>
                            ✅ Formularios
                        </li>
                        <li>
                            ✅ Inicio de sesión
                        </li>
                        <li>
                            ✅ Base de datos
                        </li>
                </Card.Text>
                <Button variant="primary"><a href='mailto:natiworlds@gmail.com?subject=Precio premium&body=Escribe aquí si tienes preguntas "'>Más info</a></Button>

                </Card.Body>
                <Card.Footer>
                <small className="text-muted">ult. actualización 29/08/2023</small>
                </Card.Footer>
            </Card>
        </CardGroup>
        </section>
    )
}

export default Precios;
