import '../../App.css';
import {useState} from 'react'
import { Multiselect } from 'multiselect-react-dropdown';
import { Form, Col, Button, Card,Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function PaymentsUpdate() {
    const [title,setTitle]= useState({
        plainArray: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
        objectArray: [
          { key: "Francés", cat: "Group 1" }, 
          { key: "Portugués", cat: "Group 1" },
          { key: "Inglés", cat: "Group 1" },
          { key: "Español", cat: "Group 2" },
         
        ],
        selectedValues: [
          { key: "Español", cat: "Group 1" },
          { key: "Inglés", cat: "Group 1" }
        ]
      });
    const [title1,setTitle1]= useState(["Akash","nadeem","hameed"]);
    return (
        <div className="person">
            <div className="person1">

                <Card style={{ width: '23rem' }, { borderWidth: 3 }, { borderColor: 'rgb(238, 91, 46)' }}  >
                    <Card.Body>
                    <Form >
                    <Row className="rowmarn">
                        <Col className="firstbtn">
                            <div className="firstbtn1"><Link to="/admin/payments"><Button>Volver</Button></Link></div>
                            <div className="btnfornew" >
                               
                                <Button className="formarginbtn">Eliminar</Button>
                            </div>
                                 </Col >
                                    </Row>
                                    <hr/>
                                    <h4 className="h4inuser">Registrar un pago</h4>
                                    <Row className="rowmarn">
                                        <Col >
                                        <Form.Label>ID de usuario</Form.Label>
                                            <Form.Control disabled Value="hV6vFmCGNYh4b3IKYdl703oJkhQ2" />
                                        </Col >
                                    </Row>
                                    <Row className="rowmarn">
                                        <Col >
                                        <Form.Label>Usuario</Form.Label>
                                            <Form.Control disabled defaultValue="Lilian  Prado"/>
                                        </Col >
                                        
                                    </Row>
                                    <Row className="rowmarn">
                                        <Col >
                                        <Form.Label>ID de reservación</Form.Label>
                                            <Form.Control disabled defaultValue="jGzFjqJxMvjaT7AAtAa7" />
                                        </Col >
                                    </Row>
                                    <Row className="rowmarn">
                                        <Col >
                                        <Form.Label>Descripción</Form.Label>
                                            <Form.Control disabled defaultValue="DESPEDIDA DE LILY PRADO"/>
                                        </Col >
                                    </Row>
                                    <Row className="rowmarn">
                                        <Col >
                                        <Form.Label>Referencia</Form.Label>
                                            <Form.Control disabled defaultValue="ord_2pRfP3QxG3DUyoPLb"/>
                                        </Col >
                                    </Row>
                                    <Row className="rowmarn">
                                        <Col >
                                        <Form.Label>Monto</Form.Label>
                                            <Form.Control disabled  defaultValue="1400"/>
                                        </Col >
                                    </Row>
                                    <Row className="rowmarn">
                                        <Col >
                                        <Form.Label>Comisión</Form.Label>
                                            <Form.Control disabled  defaultValue=""/>
                                        </Col >
                                    </Row>
                                    <Row className="rowmarn">
                                        <Col >
                                        <Form.Label>Monto Total</Form.Label>
                                            <Form.Control  disabled defaultValue="1400"/>
                                        </Col >
                                    </Row>
                                    <Row className="rowmarn">
                                    <Col >
                                        <Form.Label>Moneda</Form.Label>
                                            <Form.Control disabled defaultValue="18/03/2021 01:15" />
                                        </Col >
                                    </Row>
                                  
                            </Form>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
}
export default PaymentsUpdate;
