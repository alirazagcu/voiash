import '../App.css';
import { Form, Col, Button, Card } from 'react-bootstrap';
function Location() {
    return (
        <div className="person">
            <div className="person1">
               
                    <Card style={{ width: '23rem' }, { borderWidth: 3 }, { borderColor: 'rgb(238, 91, 46)' }}  >
                        <Card.Body>
                        <div className="personaltext"><h3>Ubicación</h3></div>
                            <Form className="form1">
                                <div className="form2">
                                    <Form.Group className="form3" as={Col} controlId="formGridEmail">
                                        <Form.Label>País</Form.Label>
                                        <Form.Control defaultValue="España" />
                                    </Form.Group>
                                    <Form.Group  className="form4" as={Col} controlId="formGridPassword">
                                        <Form.Label>Ciudad</Form.Label>
                                        <Form.Control defaultValue="MADRID" />
                                    </Form.Group>
                                    </div>
                                    <div className="form2">
                                    <Form.Group className="form3" as={Col} controlId="formGridEmail">
                                        <Form.Label>Colonia o Provincia</Form.Label>
                                        <Form.Control defaultValue="MADRID" />
                                    </Form.Group>
                                    <Form.Group  className="form4" as={Col} controlId="formGridPassword">
                                        <Form.Label>Calle</Form.Label>
                                        <Form.Control defaultValue="PASEO SAN FRANCISCO DE SALES 23" />
                                    </Form.Group>
                                    </div>
                                    <div className="form2">
                                    <Form.Group className="form3" as={Col} controlId="formGridEmail">
                                        <Form.Label>No.</Form.Label>
                                        <Form.Control defaultValue="232" />
                                    </Form.Group>
                                    <Form.Group  className="form4" as={Col} controlId="formGridPassword">
                                        <Form.Label>Int.</Form.Label>
                                        <Form.Control defaultValue="223"/>
                                    </Form.Group>
                                    </div>
                                    <div className="form2">
                                    <Form.Group className="form3" as={Col} controlId="formGridEmail">
                                        <Form.Label>Código Postal</Form.Label>
                                        <Form.Control defaultValue="28003" />
                                    </Form.Group>
                                    <Form.Group className="form4" as={Col} controlId="formGridEmail">
                                        
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

export default Location;
