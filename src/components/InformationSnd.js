import '../App.css';
import {useState} from 'react'
import pics from '../images/house.jpg';
import { Multiselect } from 'multiselect-react-dropdown';
import { Form, Col, Button, Card,Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Information2() {
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

                        <Form className="form1">
                            <Row className="rowmarn">
                                <Col xs={6}>
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control defaultValue="CARLOS BERNIER" />
                                </Col>
                                <Col>
                                    <Form.Label>Edad</Form.Label>
                                    <Form.Control defaultValue="32" />
                                </Col>
                                <Col>
                                    <Form.Label>Género</Form.Label>
                                    <Form.Control as="select">
                                        <option>Hombre</option>
                                        <option>Mujer</option>
                                        </Form.Control>
                                </Col>
                                </Row>
                                 <Row className="rowmarn">
                             <Col>
                                    <Form.Label>Teléfono</Form.Label>
                                    <Form.Control defaultValue="648202569" />
                            </Col>
                               <Col>
                                    <Form.Label>Tiempo de residencia</Form.Label>
                                    <Form.Control as="select">
                                    <option>Menos de 5 años</option>
                                        <option>Menos de 3 años</option>
                                        <option>Entre 3 y 5 años</option>
                                    </Form.Control>
                                    </Col>
                                <Col>
                                    <Form.Label>Nivel Educativo</Form.Label>
                                    <Form.Control as="select">
                                        <option>Primaria</option>
                                        <option>Secundaria</option>
                                        <option>Preparatoria</option>
                                        <option>Universidad</option>
                                        <option>Postgrado</option>
                                        <option>Otro</option>
                                    </Form.Control>
                            </Col>
                            </Row>
                            <Row className="rowmarn">
                                  <Col>
                                    <Form.Label>Idiomas</Form.Label>
                                    <Multiselect
                                    options={title.objectArray}
                                    displayValue="key"
                                    selectedValues={title.selectedValues}
                                />
                                </Col>
                            </Row>
                            <Row className="rowmarn">
                                <Col>
                                    <Form.Label>Dirección</Form.Label>
                                    <Form.Control defaultValue="PASEO SAN FRANCISCO DE SALES 23" />
                                </Col>
                            </Row>
                            <Row className="rowmarn">
                                <Col>
                                    <Form.Label>Acerca de ti</Form.Label>
                                    <Form.Control defaultValue="Soy un tio divertido"  as="textarea" aria-label="With textarea"/>
                                </Col>
                            </Row>
                            <label>Identificación</label>
                            <div class="image-upload">
                                <label for="file-input">
                                    <img className="imageinput" src={pics} />
                                </label>
                                <input id="file-input" type="file" />
                            </div>
                            <Form.Group className="Infobutton" as={Col} controlId="formGridEmail">
                                <button className="buttonform" variant="primary" >
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
export default Information2;
