import '../../App.css';
import {useState} from 'react';
import {Link} from 'react-router-dom'
import pics from '../../images/house.jpg';
import { Toolbar } from '@material-ui/core';
import { Multiselect } from 'multiselect-react-dropdown';
import { Form, Col, Button, Card ,Row} from 'react-bootstrap';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import BorderColorRoundedIcon from '@material-ui/icons/BorderColorRounded';
function FamiliesUpdate() {
    const divMargin = { margin: '25px 0' };
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
    const styles = {

        largeIcon: {
          width: 100,
          height: 100,
        },
      
      };
    return (
                <Card style={{ width: '23rem' }, { borderWidth: 3 }, { borderColor: 'rgb(238, 91, 46)' }}  >
                    <Card.Body>
                        <Form >
                        <Row className="rowmarn">
                                        <Col className="firstbtn">
                                        <div className="firstbtn1"><Link to="/admin/families"><Button>Volver</Button></Link></div>
                                        <div className="btnfornew" >
                                        <Button>Eliminar</Button>
                                       <Button className="formarginbtn">Guardar</Button>
                                       </div> 
                                        </Col >
                                    </Row>
                                    <hr/>
                                    <Row className="rowmarn">
                                        <Col >
                                        <Form.Label>Nombre</Form.Label>
                                            <Form.Control defaultValue="Adventure Trip"/>
                                        </Col >
                                        <Col>
                                        <Form.Label>Slug</Form.Label>
                                            <Form.Control  defaultValue="adventuretrip" />
                                        </Col>
                                        <Col>
                                        <Form.Label>Hashtag</Form.Label>
                                            <Form.Control   defaultValue="#adventuretrip"/>
                                        </Col>
                                    </Row>
                                    <Row className="rowmarn">
                                    <Col >
                                        <Form.Label>Color</Form.Label>
                                            <Form.Control   defaultValue="#000000"/>
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
                                    <Col >
                                        <Form.Label>Descripción</Form.Label>
                                            <Form.Control defaultValue="Destinos y experiencias imprescindibles que siempre quisiste realizar."  as="textarea" aria-label="With textarea"/>
                                        </Col>
                                    </Row>
                                    <Row className="rowmarn">
                                    <Col >
                                    <label>Imagen de fondo</label>
                            <div class="image-upload">
                                <label for="file-input">
                                <div className="firstbox">   <BorderColorRoundedIcon   className="box1"/></div>
                                    <img className="imageinput12" src={pics} />
                                </label>
                                <input id="file-input" type="file" />
                            </div>
                            </Col>
                            <Col>
                            <label>Logo</label>
                            <div class="image-upload">
                                <label for="file-input">
                                    <div className="firstbox">   <BorderColorRoundedIcon   className="box1"/></div>
                             
                                    <img className="imageinput12" src={pics} />
                                </label>
                                <input id="file-input" type="file" />
                            </div></Col>
                            </Row>
                            </Form>
                    </Card.Body>
                </Card>
    );
}
export default FamiliesUpdate;
