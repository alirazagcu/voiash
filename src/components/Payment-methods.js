import '../App.css';
import { Form, Col, Button, Card,Row,Modal } from 'react-bootstrap';
import pics3 from '../images/unnamed.png'
import { useState } from 'react';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
function PaymentMethod() {
    const [modalShow2, setModalShow2] = useState(false);
    return (
        <div className="person">
            <div className="person1">
                <Card style={{ width: '23rem' }, { borderWidth: 3 }, { borderColor: 'rgb(238, 91, 46)' }}  >
                    <Card.Body>
                        <div  className="form1">
                            <div className="form2">
                                <div className="form3" as={Col} controlId="formGridEmail">
                                <div className="personaltext"><h3>Métodos de Pago</h3></div>
                                </div>
                                <div className="form4a" as={Col} controlId="formGridPassword">
                                    <button onClick={() => setModalShow2(true)} className="buttonform" variant="primary" >
                                    Agregar
                                   </button>
                                   <MyVerticallyCenteredModal2
                                        show={modalShow2}
                                        onHide={() => setModalShow2(false)}
                                    />
                                </div>
                            </div>
                            <div className="form2">
                                <div className="form3a" as={Col} controlId="formGridEmail">
                                <div className="personaltext"><h6>Aún no tienes métodos de pago</h6></div>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
export default PaymentMethod;


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
