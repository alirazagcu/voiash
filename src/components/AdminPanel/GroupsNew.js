import '../../App.css';
import pics from '../../images/house.jpg';
import { Link } from 'react-router-dom';
import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-react";
// import { Dropdown } from "semantic-ui-react";
import { Multiselect } from 'multiselect-react-dropdown';
import { Form, Col, Button, Card, Row, Tabs, Tab } from 'react-bootstrap';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import BorderColorRoundedIcon from '@material-ui/icons/BorderColorRounded';
import MyTableNew from './TableComponentNew';
import GroupsReservationsNew from './GroupsReservationsNew';
import GroupsExperiences from './GroupsExperiences';
import GroupsInsurances from './GroupsInsurances';
// import RichTextEditor from './Toolbar'
function GroupsNew() {


    const editor = useRef(null)
	const [content, setContent] = useState('')
	const config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
	}

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

    const [images,setImages]=useState();
    return (
        <Card style={{ width: '23rem' }, { borderWidth: 3 }, { borderColor: 'rgb(238, 91, 46)' }}  >
            <Card.Body>
                <Form >
                    <Row className="rowmarn">
                        <Col className="firstbtn">
                            <div className="firstbtn1"><Link to="/admin/groups"><Button>Volver</Button></Link></div>
                            <div className="btnfornew" >
                                <Button>Eliminar</Button>
                                <Button className="formarginbtn">Guardar</Button>
                            </div>
                        </Col >
                    </Row>
                    <hr />
                    <Row className="rowmarn">
                        <Col >
                        Nombre


 



                            <Form.Label>Nombre</Form.Label>
                            <Form.Control  />
                        </Col >
                        <Col >
                            <Form.Label>Detalles de Pago</Form.Label>
                            <Form.Control />
                        </Col >
                        <Col >
                            <Form.Label>Duración</Form.Label>
                            <Form.Control  />
                        </Col>
                    </Row>
                    <Row className="rowmarn">
                        <Col >
                            <Form.Label>Destino</Form.Label>
                            <Form.Control as="select">
                                        <option>EUROPA</option>
                                        <option>LOS CABOS</option>
                                        <option>TULUM</option>
                                        <option>EUROPA</option>
                                        <option>LOS CABOS</option>
                                        <option>TULUM</option>
                                        <option>EUROPA</option>
                                        <option>LOS CABOS</option>
                                        <option>TULUM</option>
                                    </Form.Control>
                        </Col >
                        <Col >
                        <Form.Label>Hotel</Form.Label>
                            <Form.Control as="select">
                                        <option>The Pyramid at Grand Oasis</option>
                                        <option>TRS YUCATAN HOTEL</option>
                                        <option>BREATHLESS LOS CABOS</option>
                                        <option>The Pyramid at Grand Oasis</option>
                                        <option>TRS YUCATAN HOTEL</option>
                                        <option>BREATHLESS LOS CABOS</option>
                                        <option>The Pyramid at Grand Oasis</option>
                                        <option>TRS YUCATAN HOTEL</option>
                                        <option>BREATHLESS LOS CABOS</option>
                                    </Form.Control>
                          
                        </Col >
                        <Col >
                        <Form.Label>Familia</Form.Label>
                            <Form.Control as="select">
                                       <option>ADVENTURETRIP</option>
                                        <option>TRS YUCATAN HOTEL</option>
                                        <option>EXPERIENCIAS</option>
                                        <option>SENSES</option>
                                        <option>LOCALFRIEND</option>
                                        <option>THEWEEK</option>
                                        <option>DISCOVERY</option>
                                        </Form.Control>
                        </Col>
                    </Row>
                    <Row className="rowmarn">
                        <Col>
                            <Form.Label>Aeropuertos</Form.Label>
                            <Form.Control  />
                        </Col>
                        <Col>
                            <Form.Label>Estatus</Form.Label>
                            <Form.Control as="select">
                                       <option>Borrador</option>
                                        <option>Inactivo</option>
                                        <option>Publicado</option>
                                        </Form.Control>
                        </Col>
                        <Col >
                            <Form.Label>Fecha de salida</Form.Label>
                            <Form.Control type="date" />
                        </Col >
                    </Row>
                    <Row className="rowmarn">
                        <Col >
                            <Form.Label>Fecha de regreso</Form.Label>
                            <Form.Control type="date" />
                        </Col >
                        <Col >
                            <Form.Label>Tipo</Form.Label>
                            <Form.Control as="select">
                                       <option>Público</option>
                                        <option>Privado</option>
                                        </Form.Control>
                        </Col >
                    </Row>
                    <Row className="rowmarn">
                    <Col className="image-upload12">
                        <Form.Label>Contrato en PDF</Form.Label>
                            <label for="file-input" className="newclass">
                            <p className="paragrapinput"></p>
                            </label>
                            <input id="file-input" type="file" />

                        </Col>
                    </Row>
                    <Row className="rowmarn">
                        <Col >
                            <Form.Label>Descripción Móvil</Form.Label>

                            <Form.Control as="textarea" aria-label="With textarea" />
                        </Col >
                    </Row>
                    <Row>
                        <Col>
                        <Form.Label>Imagen de lista</Form.Label>
                            <div class="imageupload">
                                <label for="file-input">
                                    <div className="firstboxupdatenew"><BorderColorRoundedIcon className="box12" /></div>
                                    <div className="imageinputupdate" src={pics} ></div>
                                </label>
                                <input id="file-input" type="file" />
                            </div>
                        </Col>
                    </Row>
                    <Row className="rowmarn">
                        <Col >
                            <p className="removeMargin">Fecha de creación: 03/09/2021 23:58</p>
                            <p className="removeMargin1">Fecha de modificación: 03/09/2021 23:58</p>
                        </Col >
                    </Row>
                    <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                        <Tab eventKey="home" title="Experiencias">
                            <div className="Tabsetting1">
                            <GroupsExperiences/>
                            </div>
                           
                        </Tab>
                        <Tab eventKey="profile" title="Seguros">
                            <div className="Tabsetting1">  
                            <GroupsInsurances/>
                            </div>
                        </Tab>
                        <Tab eventKey="contact" title="Descripción" >
                            <div className="Tabsetting">
                            <div className="editor">
                                    <JoditEditor
                                        ref={editor}
                                        value={content}
                                        config={config}
                                        tabIndex={2} // tabIndex of textarea
                                        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                        onChange={newContent => { }}
                                    />
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="hom" title="Imágenes">
                            <div className="Tabsetting2">
                                 <div className="row mainimagetab">
                            <div class="col-sm-6 col-xs-12 col-md-3 col-lg-3 imageuploadtab">
                                <label for="file-input">
                                    <div className="firstboxupdatetabnew"><BorderColorRoundedIcon className="box12tab" /></div>
                                    <img className="imageinputupdatetabnew"  src={images}/>
                                </label>
                                <input id="file-input" onChange={e=> setImages(e.target.value)} type="file" />
                            </div>

                                 </div>
                            </div>
                        </Tab>
                        <Tab eventKey="hm" title="Tabla de Pagos">
                            <div className="Tabsetting1">
                               <MyTableNew/>
                            </div>
                        </Tab>

                        <Tab eventKey="profi" title="Compartir">
                            <div className="Tabsetting">
                    
                            <Row className="rowmarntop">
                                        <Col >
                                        <Form.Label>Nombre</Form.Label>
                                            <Form.Control disabled Value="https://app.voiash.com/groups/230yU7NsdoxfvZAjam6w"/>
                                        </Col >
                                    </Row>
                                    <Row className="rowmarn">
                                    <Col >
                                        <Form.Label>País</Form.Label>
                                            <Form.Control as="textarea" aria-label="With textarea"/>
                                        </Col>
                                    </Row>
                                    <Row className="rowmarn">
                                    <Col >
                                        <Form.Label>Ciudad</Form.Label>
                                            <Form.Control  as="textarea" aria-label="With textarea"/>
                                        </Col>
                                    </Row>
                                    <div className="rightbutton">
                                <button className="buttonmodeltab">Envíar</button>
                            </div>
                         
                            </div>
                        </Tab>
                        <Tab eventKey="contt" title="Reservations" >
                            <div className="Tabsetting1">
                            <GroupsReservationsNew/>
                            </div>
                        </Tab>
                        <hr/>
                    </Tabs>


                </Form>
            </Card.Body>
        </Card>
    );
}
export default GroupsNew;
