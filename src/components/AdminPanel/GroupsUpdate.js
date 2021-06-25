import '../../App.css';
import pics from '../../images/house.jpg';
import { Link } from 'react-router-dom';
import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-react";
import { Multiselect } from 'multiselect-react-dropdown';
import { Form, Col, Button, Card, Row, Tabs, Tab } from 'react-bootstrap';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import BorderColorRoundedIcon from '@material-ui/icons/BorderColorRounded';
import MyTable from './TableComponent';
import GroupsReservations from './GroupsReservations';
import GroupsExperiences from './GroupsExperiences';
import GroupsInsurances from './GroupsInsurances';
function GroupsUpdate() {

    const editor = useRef(null)
	const [content, setContent] = useState('Happiness by Design.  INCLUYE: Paquete DESPEDIDA MARISOL:  Incluye: Vuelo redondo Culiacan-Cancun-Culiacan +  Transportación aeropuerto-Playa del carmen-aeropuerto en transportacion privada + kit de despedida que consta de 01 gorra y 01 termo por persona  + 03 noches, 04 días de  hospedaje en plan todo incluido en  REEF 28  ubicado en la quinta avenida de playa del carmen + 1 fiesta en yate de 06 horas con botellas incluidas + 1 día de consumo en Coralina de 1,500 pesos  NO INCLUYE: Propinas ( servicio) en los establecimientos de consumo ')
	
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
                            <Form.Control defaultValue="DESPEDIDA MARISOL CULIACÁN" />
                        </Col >
                        <Col >
                            <Form.Label>Detalles de Pago</Form.Label>
                            <Form.Control defaultValue="Pago hasta 6 meses sin intereses con tarjetas de crédito participantes" />
                        </Col >
                        <Col >
                            <Form.Label>Duración</Form.Label>
                            <Form.Control defaultValue="2 al 5 de Septiembre del 2021" />
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
                            <Form.Control defaultValue="CUL-CUN-CUL" />
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
                            <Form.Control type="date" defaultValue="2021-09-02" />
                        </Col >
                    </Row>
                    <Row className="rowmarn">
                        <Col >
                            <Form.Label>Fecha de regreso</Form.Label>
                            <Form.Control type="date" defaultValue="2021-09-02" />
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
                                <p className="paragrapinput">insurances/QztTQC1NWZcoGFjfRNmd/file.pdf</p>
                            </label>
                            <input id="file-input" type="file" />

                        </Col>
                    </Row>
                    <Row className="rowmarn">
                        <Col >
                            <Form.Label>Descripción Móvil</Form.Label>

                            <Form.Control defaultValue="PUERTO VALLARTA" as="textarea" aria-label="With textarea" />
                        </Col >
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Imagen de lista</Form.Label>
                            <div class="imageupload">
                                <label for="file-input">
                                    <div className="firstboxupdate"><BorderColorRoundedIcon className="box12" /></div>
                                    <img className="imageinputupdate" src={pics} />
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
                                <GroupsExperiences />
                            </div>

                        </Tab>
                        <Tab eventKey="profile" title="Seguros">
                            <div className="Tabsetting1">
                                <GroupsInsurances />
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

                                    <div class="col-sm-6 col-xs-12 col-md-3 col-lg-3 imageuploadtab ">
                                        <label for="file-input">
                                            <div className="firstboxupdatetab"><BorderColorRoundedIcon className="box12tab" /></div>
                                            <img className="imageinputupdatetab" src={pics} />
                                        </label>
                                        <input id="file-input" type="file" />
                                    </div>

                                    <div class="col-sm-6 col-xs-12 col-md-3 col-lg-3 imageuploadtab">
                                        <label for="file-input">
                                            <div className="firstboxupdatetab"><BorderColorRoundedIcon className="box12tab" /></div>
                                            <img className="imageinputupdatetab" src={pics} />
                                        </label>
                                        <input id="file-input" type="file" />
                                    </div>

                                    <div class="col-sm-6 col-xs-12 col-md-3 col-lg-3 imageuploadtab">
                                        <label for="file-input">
                                            <div className="firstboxupdatetab"><BorderColorRoundedIcon className="box12tab" /></div>
                                            <img className="imageinputupdatetab" src={pics} />
                                        </label>
                                        <input id="file-input" type="file" />
                                    </div>

                                    <div class="col-sm-6 col-xs-12 col-md-3 col-lg-3 imageuploadtab">
                                        <label for="file-input">
                                            <div className="firstboxupdatetab"><BorderColorRoundedIcon className="box12tab" /></div>
                                            <img className="imageinputupdatetab" src={pics} />
                                        </label>
                                        <input id="file-input" type="file" />
                                    </div>
                                    <div class="col-sm-6 col-xs-12 col-md-3 col-lg-3 imageuploadtab">
                                        <label for="file-input">
                                            <div className="firstboxupdatetab"><BorderColorRoundedIcon className="box12tab" /></div>
                                            <img className="imageinputupdatetab" src={pics} />
                                        </label>
                                        <input id="file-input" type="file" />
                                    </div>
                                    <div class="col-sm-6 col-xs-12 col-md-3 col-lg-3 imageuploadtab">
                                        <label for="file-input">
                                            <div className="firstboxupdatetab"><BorderColorRoundedIcon className="box12tab" /></div>
                                            <img className="imageinputupdatetab" src={pics} />
                                        </label>
                                        <input id="file-input" type="file" />
                                    </div>

                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="hm" title="Tabla de Pagos">
                            <div className="Tabsetting1">
                                <MyTable />
                            </div>
                        </Tab>

                        <Tab eventKey="profi" title="Compartir">
                            <div className="Tabsetting">

                                <Row className="rowmarntop">
                                    <Col >
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control disabled Value="https://app.voiash.com/groups/230yU7NsdoxfvZAjam6w" />
                                    </Col >
                                </Row>
                                <Row className="rowmarn">
                                    <Col >
                                        <Form.Label>País</Form.Label>
                                        <Form.Control as="textarea" aria-label="With textarea" />
                                    </Col>
                                </Row>
                                <Row className="rowmarn">
                                    <Col >
                                        <Form.Label>Ciudad</Form.Label>
                                        <Form.Control as="textarea" aria-label="With textarea" />
                                    </Col>
                                </Row>
                                <div className="rightbutton">
                                    <button className="buttonmodeltab">Envíar</button>
                                </div>

                            </div>
                        </Tab>
                        <Tab eventKey="contt" title="Reservations" >
                            <div className="Tabsetting1">
                                <GroupsReservations />
                            </div>
                        </Tab>
                        <hr />
                    </Tabs>


                </Form>
            </Card.Body>
        </Card>
    );
}
export default GroupsUpdate;
