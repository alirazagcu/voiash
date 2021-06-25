import '../App.css';
import { Form, Col, Button, Card } from 'react-bootstrap';
function Contact() {
    return (
        <div className="person">
            <div className="person1">
                    <Card style={{ width: '23rem' }, { borderWidth: 3 }, { borderColor: 'rgb(238, 91, 46)' }}  >
                        <Card.Body>
                        <div className="personaltext"><h3>Persona de Contacto</h3></div>
                            <Form className="form1">
                                <div className="form2">
                                    <Form.Group className="form3" as={Col} controlId="formGridEmail">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control defaultValue="CARLOS" />
                                    </Form.Group>
                                    <Form.Group  className="form4" as={Col} controlId="formGridPassword">
                                        <Form.Label>Apellido Paterno</Form.Label>
                                        <Form.Control defaultValue="BERNIER" />
                                    </Form.Group>
                                    </div>
                                    <div className="form2">
                                    <Form.Group className="form3" as={Col} controlId="formGridEmail">
                                        <Form.Label>Apellido Materno</Form.Label>
                                        <Form.Control defaultValue="MORILLO" />
                                    </Form.Group>
                                    <Form.Group  className="form4" as={Col} controlId="formGridPassword">
                                        <Form.Label>Teléfono</Form.Label>
                                        <Form.Control defaultValue="648202569" />
                                    </Form.Group>
                                    </div>
                                    <div className="form2">
                                    <Form.Group className="form3" as={Col} controlId="formGridEmail">
                                        <Form.Label>Móvil</Form.Label>
                                        <Form.Control defaultValue="648202569"/>
                                    </Form.Group>
                                    <Form.Group  className="form4" as={Col} controlId="formGridPassword">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" defaultValue="CARLOS.BERNIER@VOIASH.COM" />
                                    </Form.Group>
                                    </div>
                                    <Form.Group className="form5" as={Col} controlId="formGridEmail">
                                    <button className="buttonform" variant="primary" type="submit">
                                    Continuar
                                   </button>
                                    </Form.Group>
                              
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
         
        </div>
    );
}

export default Contact;
