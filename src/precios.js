import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import './precios.css'


function Precios() {
    return (
        <section id="precios">
            <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title class="card-title h2">Opción básica</Card.Title>
                        <Card.Text>
                            Esta opción incluye:
                            <hr />
                            <p><strong>Descripción:</strong> Ideal para pequeñas empresas o emprendedores que necesitan una presencia web básica pero efectiva.</p>
                            <p><strong>Características:</strong></p>
                            <ul>
                                <li><strong>Diseño y Desarrollo Web:</strong>
                                    <ul>
                                        <li>Sitio web de hasta 5 páginas (Inicio, Servicios, Sobre Nosotros, Contacto, Blog).</li>
                                        <li>Diseño responsivo y adaptado a dispositivos móviles.</li>
                                        <li>Integración con redes sociales.</li>
                                        <li>SEO básico (optimización para motores de búsqueda).</li>
                                    </ul>
                                </li>
                                <li><strong>Funcionalidades:</strong>
                                    <ul>
                                        <li>Formulario de contacto.</li>
                                        <li>Blog sencillo.</li>
                                        <li>Mapa de Google integrado.</li>
                                        <li>Certificado SSL para seguridad.</li>
                                    </ul>
                                </li>
                                <li><strong>Mantenimiento:</strong>
                                    <ul>
                                        <li>Actualizaciones mensuales de plugins y temas.</li>
                                        <li>Backup mensual.</li>
                                        <li>Monitoreo de seguridad básico.</li>
                                    </ul>
                                </li>
                                <li><strong>Soporte:</strong>
                                    <ul>
                                        <li>Soporte por correo electrónico con respuesta en 24-48 horas.</li>
                                        <li>2 horas mensuales de soporte técnico y ajustes.</li>
                                    </ul>
                                </li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary"><a href='mailto:natiworlds@gmail.com?subject=Precio Básico&body=Escribe aquí si tienes preguntas "'>Más info</a></Button>

                        <small className="text-muted">ult. actualización 14/05/2024</small>
                    </Card.Footer>
                </Card>
                <Card>

                    <Card.Body>
                        <Card.Title class="card-title h2">Opción clásica</Card.Title>
                        <Card.Text>
                            Esta opción incluye:
                            <hr />
                            <p><strong>Descripción:</strong> Ideal para empresas en crecimiento que requieren funcionalidades avanzadas y personalización moderada.</p>
                            <p><strong>Características:</strong></p>
                            <ul>
                                <li><strong>Diseño y Desarrollo Web:</strong>
                                    <ul>
                                        <li>Sitio web de hasta 10 páginas.</li>
                                        <li>Diseño personalizado.</li>
                                        <li>SEO avanzado.</li>
                                        <li>Integración con herramientas de marketing (MailChimp, Google Analytics).</li>
                                    </ul>
                                </li>
                                <li><strong>Funcionalidades:</strong>
                                    <ul>
                                        <li>Sistema de gestión de contenido (CMS) como WordPress o similar.</li>
                                        <li>Integración de tienda online básica (hasta 50 productos).</li>
                                        <li>Chat en vivo.</li>
                                        <li>Certificado SSL avanzado.</li>
                                    </ul>
                                </li>
                                <li><strong>Mantenimiento:</strong>
                                    <ul>
                                        <li>Actualizaciones quincenales de plugins y temas.</li>
                                        <li>Backup quincenal.</li>
                                        <li>Monitoreo de seguridad avanzado.</li>
                                    </ul>
                                </li>
                                <li><strong>Soporte:</strong>
                                    <ul>
                                        <li>Soporte por correo electrónico y chat con respuesta en 12-24 horas.</li>
                                        <li>5 horas mensuales de soporte técnico y ajustes.</li>
                                    </ul>
                                </li>
                            </ul>
                        </Card.Text>

                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary"><a href='mailto:natiworlds@gmail.com?subject=Precio clásico&body=Escribe aquí si tienes preguntas "'>Más info</a></Button>

                        <small className="text-muted">ult. actualización 14/05/2024</small>
                    </Card.Footer>
                </Card>
                <Card>

                    <Card.Body>
                        <Card.Title class="card-title h2">Opción premium</Card.Title>
                        <Card.Text>
                            Esta opción incluye:
                            <hr />
                            <p><strong>Descripción:</strong> Destinado a grandes empresas o corporaciones que necesitan un sitio web robusto, con alto rendimiento y funcionalidades complejas.</p>
                            <p><strong>Características:</strong></p>
                            <ul>
                                <li><strong>Diseño y Desarrollo Web:</strong>
                                    <ul>
                                        <li>Sitio web de más de 10 páginas con diseño altamente personalizado.</li>
                                        <li>Consultoría SEO integral y estrategia de contenido.</li>
                                        <li>Integración con CRM y ERP.</li>
                                        <li>Creación de aplicaciones web personalizadas.</li>
                                    </ul>
                                </li>
                                <li><strong>Funcionalidades:</strong>
                                    <ul>
                                        <li>E-commerce avanzado (más de 50 productos, múltiples métodos de pago).</li>
                                        <li>Integración con sistemas de terceros (API, microservicios).</li>
                                        <li>Certificado SSL avanzado y seguridad de datos.</li>
                                    </ul>
                                </li>
                                <li><strong>Mantenimiento:</strong>
                                    <ul>
                                        <li>Actualizaciones semanales de plugins y temas.</li>
                                        <li>Backup diario.</li>
                                        <li>Monitoreo de seguridad premium.</li>
                                        <li>Optimización de rendimiento mensual.</li>
                                    </ul>
                                </li>
                                <li><strong>Soporte:</strong>
                                    <ul>
                                        <li>Soporte 24/7 por correo electrónico, chat y teléfono.</li>
                                        <li>15 horas mensuales de soporte técnico y ajustes.</li>
                                        <li>Plan de contingencia y recuperación ante desastres.</li>
                                    </ul>
                                </li>
                            </ul>
                        </Card.Text>

                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary"><a href='mailto:natiworlds@gmail.com?subject=Precio premium&body=Escribe aquí si tienes preguntas "'>Más info</a></Button>

                        <small className="text-muted">ult. actualización 14/05/2024</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </section>
    )
}

export default Precios;
