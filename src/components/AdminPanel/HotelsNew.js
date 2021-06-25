import '../../App.css';
import {useState} from 'react'
import pics from '../../images/house.jpg';
import { Toolbar } from '@material-ui/core';
import {Link } from 'react-router-dom';
import { Multiselect } from 'multiselect-react-dropdown';
import { Form, Col, Button, Card ,Row} from 'react-bootstrap';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import BorderColorRoundedIcon from '@material-ui/icons/BorderColorRounded';
function HotelsNew() {
    const divMargin = { margin: '25px 0' };
   
    return (
                <Card style={{ width: '23rem' }, { borderWidth: 3 }, { borderColor: 'rgb(238, 91, 46)' }}  >
                    <Card.Body>
                        <Form >
                        <Row className="rowmarn">
                                        <Col className="firstbtn">
                                        <div className="firstbtn1"><Link  to="/admin/hotels"><Button>Volver</Button></Link></div>
                                        <div className="btnfornew">
                                       <Button className="formarginbtn">Guardar</Button>
                                       </div> 
                                        </Col >
                                    </Row>
                                    <hr/>
                                    <Row className="rowmarn">
                                        <Col >
                                        <Form.Label>Nombre</Form.Label>
                                            <Form.Control />
                                        </Col >
                                    </Row>
                                    <Row className="rowmarn">
                                    <Col >
                                        <Form.Label>País</Form.Label>
                                            <Form.Control />
                                        </Col>
                                    </Row>
                                    <Row className="rowmarn">
                                    <Col >
                                        <Form.Label>Ciudad</Form.Label>
                                            <Form.Control  />
                                        </Col>
                                    </Row>
                                    <Row className="rowmarn">
                                    <Col >
                                        <Form.Label>Dirección</Form.Label>
                                            <Form.Control  />
                                        </Col>
                                    </Row>
            
                            </Form>
                    </Card.Body>
                </Card>
    );
}
export default HotelsNew;
