import '../../App.css';
import { useState } from 'react'
import React, { Component } from 'react';
import pics from '../../images/house.jpg';
import { Link } from 'react-router-dom';
// import { Dropdown } from "semantic-ui-react";
import { Multiselect } from 'multiselect-react-dropdown';
import { Form, Col, Button, Card, Row, Tabs, Tab } from 'react-bootstrap';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import BorderColorRoundedIcon from '@material-ui/icons/BorderColorRounded';
// import RichTextEditor from './Toolbar';
function LocalfriendsNew() {
    const divMargin = { margin: '25px 0' };
    const [title, setTitle] = useState({
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

    //to0lbar
    


    const friendOptions = [
        {
            key: "Jnny Hess",
            text: 'iiugih',
            value: 'Jnny Hess',
            image: {
                avatar: true,
                src: "https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
            }
        },
        {
            key: "Eliot Fu",
            text: "Eliot Fu",
            value: "Eliot Fu",
            image: {
                avatar: true,
                src: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
            }
        },
        {
            key: "Jenny Hess",
            text: "Jenny Hess",
            value: "Jenny Hess",
            image: {
                avatar: true,
                src: "https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
            }
        },
        {
            key: "Elliot Fu",
            text: "Elliot Fu",
            value: "Elliot Fu",
            image: {
                avatar: true,
                src: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
            }
        },
        {
            key: "Stevie Feliciano",
            text: "Stevie Feliciano",
            value: "Stevie Feliciano",
            image: {
                avatar: true,
                src: "https://react.semantic-ui.com/images/avatar/small/stevie.jpg"
            }
        },
        {
            key: "Christian",
            text: "Christian",
            value: "Christian",
            image: {
                avatar: true,
                src: "https://react.semantic-ui.com/images/avatar/small/christian.jpg"
            }
        },
        {
            key: "Matt",
            text: "Matt",
            value: "Matt",
            image: {
                avatar: true,
                src: "https://react.semantic-ui.com/images/avatar/small/matt.jpg"
            }
        },
        {
            key: "Justen Kitsune",
            text: "Justen Kitsune",
            value: "Justen Kitsune",
            image: {
                avatar: true,
                src: "https://react.semantic-ui.com/images/avatar/small/justen.jpg"
            }
        }
    ];
    return (
        <Card style={{ width: '23rem' }, { borderWidth: 3 }, { borderColor: 'rgb(238, 91, 46)' }}  >
            <Card.Body>
                <Form >
                    <Row className="rowmarn">
                        <Col className="firstbtn">
                            <div className="firstbtn1"><Link to="/admin/localfriends"><Button>Volver</Button></Link></div>
                            <div className="btnfornew" >
                                <Button>Eliminar</Button>
                                <Button className="formarginbtn">Guardar</Button>
                            </div>
                        </Col >
                    </Row>
                    <hr />
                    <Row className="rowmarn">
                        <Col xs={6}>
                        <Form.Label>Usuario</Form.Label>
                            <Form.Control as="select">
                                        <option>luciaespinal133@gmail.com</option>
                                        <option>lefuva97@gmail.com</option>
                                        <option>ileniasorrentino00@gmail.com</option>
                                        <option>luciaespinal133@gmail.com</option>
                                        <option>lefuva97@gmail.com</option>
                                        <option>ileniasorrentino00@gmail.com</option>
                                        <option>luciaespinal133@gmail.com</option>
                                        <option>lefuva97@gmail.com</option>
                                        <option>ileniasorrentino00@gmail.com</option>
                                        <option>luciaespinal133@gmail.com</option>
                                        <option>lefuva97@gmail.com</option>
                                        <option>ileniasorrentino00@gmail.com</option>
                                      
                                    </Form.Control>
                        </Col >
                        <Col >
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control  />
                        </Col >
                        <Col >
                            <Form.Label>Edad</Form.Label>
                            <Form.Control  />
                        </Col>
                    </Row>
                    <Row className="rowmarn">
                        <Col xs={6}>
                            <Form.Label>Género</Form.Label>
                            <Form.Control as="select">
                                        <option>Mujer</option>
                                        <option>Homber</option>  
                                    </Form.Control>
                        </Col >
                    </Row>
                    <Row className="rowmarn">
                        <Col >
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control  />
                        </Col >
                        <Col >
                        <Form.Label>Tiempo de residencia</Form.Label>
                                    <Form.Control as="select">
                                    <option>Menos de 5 años</option>
                                        <option>Menos de 3 años</option>
                                        <option>Entre 3 y 5 años</option>
                                    </Form.Control>
                        </Col >
                        <Col >
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
                        <Form.Label>Idiomas</Form.Label>
                                    <Multiselect
                                    options={title.objectArray}
                                    displayValue="key"
                                    selectedValues={title.selectedValues}
                                />
                        </Col >
                     
                    </Row>
                    <Row className="rowmarn">
                                <Col>
                                    <Form.Label>Dirección</Form.Label>
                                    <Form.Control />
                                </Col>
                            </Row>
                            <Row className="rowmarn">
                                <Col>
                                    <Form.Label>Acerca de ti</Form.Label>
                                    <Form.Control   as="textarea" aria-label="With textarea"/>
                                </Col>
                            </Row>
                            <Row className="rowmarn">
                                        <Col >
                                        <Form.Label>Estatus</Form.Label>
                                        <Form.Control as="select">
                                        <option>En espera</option>
                                        <option>Aprobado</option>
                                        <option>Rechazado</option>
                                        <option>Deshabilitado</option>
                                    </Form.Control>
                                        </Col >
                                     
                                    </Row>
                    <Row className="rowmarn">
                        <Col >
                            <Form.Label>Identificación</Form.Label>
                            <Form.Control />
                        </Col >
                    </Row>
                   


                </Form>
            </Card.Body>
        </Card>
    );
}
export default LocalfriendsNew;
