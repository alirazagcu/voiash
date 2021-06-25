import '../App.css';
import pics from '../images/house.jpg';
import { Form, Col, Button, Card, Table,Modal,Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import pics3 from '../images/unnamed.png'
import { useState } from 'react';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Details() {
    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    return (
        <div className="person">
            <div className="person1">
                <Card style={{ width: '23rem' }, { borderWidth: 3 }, { borderColor: 'rgba(0,0,0,.06)' }} className="cardbody"  >
                    <Card.Body>
                        <div className="detail">
                            <img src={pics} className="cardimage22" />
                        </div>
                        <div className="detail1">
                            <div className="detail5">
                                <h2>Medicina Bellvitge</h2>
                            </div>
                            <div className="detail2">
                                <h5 className="detail3">1250.00 EUR</h5>
                                <p className="detail4">todo incluido por persona, precio total.</p>
                            </div>
                        </div>
                        <div>
                            <p className="detail6">El viaje incluye:</p>
                            <p className="detail6">Barra libre</p>
                            <p className="detail6">Régimen de todo incluido</p>
                            <p className="detail6">etc</p>
                            <p className="detail6">etc</p>
                        </div>
                        <div className="detail7">
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Fecha</th>
                                        <th>Pronto Pago</th>
                                        <th>Normal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>2020/10/15</td>
                                        <td>150.00 EUR</td>
                                        <td>150.00 EUR</td>
                                    </tr>
                                    <tr>
                                    <td>2020/10/15</td>
                                        <td>150.00 EUR</td>
                                        <td>150.00 EUR</td>
                                    </tr>
                                    <tr>
                                    <td>2020/10/15</td>
                                        <td>150.00 EUR</td>
                                        <td>150.00 EUR</td>
                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td>1250.00 EUR</td>
                                        <td>1250.00 EUR</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div>
                                 <div className="divbuttonform1">
                                   <button onClick={() => setModalShow(true)} className="buttonform1" variant="primary" >
                                   Realizar Pago Con Tarjeta
                                   </button>
                                   <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                                   </div>
                                   <div className="divbuttonform2">
                                   <button className="buttonform2" variant="primary" onClick={() => setModalShow2(true)} >
                                   Realizar Pago Por Transferencia
                                   </button>
                                   <MyVerticallyCenteredModal3
                                show={modalShow2}
                                onHide={() => setModalShow2(false)}
                            />
                                   </div>
                        </div>
                        
                            <h6>Seguro Contratado:</h6>
                     <div className="detail9">
                         <h6>Seguro Libre Desistimiento - AON ARAG</h6>
                         <div>
                             <p>
                             Adjuntamos la póliza. Podrás cancelar tu viaje por la causa que quieras, sin justificar hasta 24 horas antes del viaje (Libre desistimiento). En este caso, se te devolverá todo el dinero a excepción del 10% de lo pagado en concepto de franquicia por parte de la compañía aseguradora. Este seguro también incluye 31 causas por las cuales puedes cancelar tu viaje, si cancelas por uno de estos motivos se te devolverá todo el dinero sin aplicarte ninguna franquicia. Además, la cobertura médica en destino sube hasta 25.000€
                             </p>
                             <p>
                             75.00 EUR
                             </p>
                         </div>
                     </div>
                     <div>
                         <p>
                         Experiencias
                         </p>
                         <h3>
                         Pagos Realizados
                         </h3>
                     </div>
                     <div className="detail10">
                         <p>
                           Aún no has realizado ningún pago 
                         </p>
                     </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
export default Details;
function MyVerticallyCenteredModal(props) {
    const [modalShow2, setModalShow2] = useState(false);
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="Model">
                <div className="Model0">
                    <div className="Model1">
                        <CloseRoundedIcon className="closeicon" onClick={props.onHide} />
                    </div>
                    <div className="Model2">
                        <div>
                            <div className="Model3"><h4>Selecciona tu método de pago:</h4></div>
                            <div className="Model4">
                                <div className="Model5">
                                    <p>
                                        Aún no tienes ninguna tarjeta guardada
                             </p>
                                    <Link className="secondlink" onClick={() => setModalShow2(true)}>Agregar tarjeta</Link>
                                    <MyVerticallyCenteredModal2
                                        show={modalShow2}
                                        onHide={() => setModalShow2(false)}
                                    />
                                </div>

                            </div>
                            <button className="buttonmodel">CONFIRMAR</button>
                        </div>
                    </div>
                </div>
            </Modal.Body>

        </Modal>
    );
}

function MyVerticallyCenteredModal2(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="Model">
                <div className="Model0">
                    <div className="Model1">
                        <CloseRoundedIcon className="closeicon" onClick={props.onHide} />
                    </div>
                    <div className="Model2">
                        <div>
                            <div>
                                <img src={pics3} className="cardimg2" />
                            </div>
                            <div className="modelform">
                            <Form >
                                    <Row className="rowmarn">
                                        <Col xs={9}>
                                        <Form.Label>Número de tarjeta</Form.Label>
                                            <Form.Control />
                                        </Col >
                                        <Col>
                                        <Form.Label>CVC</Form.Label>
                                            <Form.Control />
                                        </Col>
                                    </Row>
                                    <Row>
                                    <Col xs={7}>
                                        <Form.Label>Titular de la tarjeta</Form.Label>
                                            <Form.Control  />
                                        </Col>
                                        <Col>
                                            <Form.Label>Año</Form.Label>
                                            <Form.Control  />
                                        </Col>
                                        <Col>
                                            <Form.Label>Mes</Form.Label>
                                            <Form.Control  />
                                        </Col>
                                    </Row>
                                    
                                </Form>

                            </div>
                            <div className="rightbutton">
                                <button className="buttonmodel1">Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>

        </Modal>
    );
}

function MyVerticallyCenteredModal3(props) {
  
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="Model123">
                <div className="Model0">
                    <div className="Model1">
                        <CloseRoundedIcon className="closeicon" onClick={props.onHide} />
                    </div>
                    <div className="Model2">
                    <div className="modeldetal2">
                    <p>Para poder proceder a la reserva de tu viaje y disfrutar de las promociones acordadas, se deberá hacer el pago de la siguiente forma:</p>
                        </div>
                        <div>
                            
                            <div className="Model3"><p className="modeldetal">
                                <FiberManualRecordIcon fontSizeLarge className="modeldetal4"/>Ingreso en cuenta CAIXABANK:</p></div>
                            <div className="modeldetal2">
                            <p className="modeldetal1">ES62 2100 3308 9622 0014 8063</p>
                            </div>
                            <div className="Model3"><p className="modeldetal">
                                <FiberManualRecordIcon fontSizeLarge className="modeldetal4"/>Asunto:</p></div>
                            <div className="modeldetal2">
                            <p>Nombre + Apellido + Nombre del grupo + Destino Ejemplo: Alejandro Martinez Complutense Derecho 2º B</p>
                            </div>
                            <div className="Model3"><p className="modeldetal">
                                <FiberManualRecordIcon fontSizeLarge className="modeldetal4"/>Beneficiario:</p></div>
                            <div className="modeldetal2">
                            <p>Voiash Discover International S.L</p>
                      </div>
                        </div>
                        <div className="modeldetal2">
                        <p>Para cualquier pregunta, no dudes en contactar con nosotros.¡Gracias!</p>
                    </div>
                    </div>
                </div>
            </Modal.Body>

        </Modal>
    );
}
