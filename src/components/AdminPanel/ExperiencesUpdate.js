import '../../App.css';
import pics from '../../images/house.jpg';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import '../../App.css';
import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-react";
import Popup from 'reactjs-popup';
import Paper from '@material-ui/core/Paper';
import { Multiselect } from 'multiselect-react-dropdown';
import { Form, Col, Button, Card, Row, Tabs, Tab } from 'react-bootstrap';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import BorderColorRoundedIcon from '@material-ui/icons/BorderColorRounded';
// import RichTextEditor from './Toolbar';




const useStyles2 = makeStyles({
    table: {
      minWidth: 500,
      borderRadius: 8,
      boxShadowTop: 2, 
      flexGrow: 1,
      boxShodowColor:'red',
    },
    table1: {
    
      borderRadius: 8,
      boxShadow :"1px 1px 5px 1px gray"
    },
    header:{
        fontSize:50,
        fontWieght:'bold',
        color:'black'
    }
  });
function ExperiencesUpdate() {

    const editor = useRef(null)
	const [content, setContent] = useState("Reserva la mesa de tu preferencia en Mandala Cancún y se parte de las emocionantes celebraciones que se viven noche a noche Lo que pagas por tu mesa se convierte en Crédito para bebidas o botellas: Diamond | $1500 USD (10 Covers) El precio publicado es por persona y se basa en un mínimo de 10 pasajeros; en el supuesto que disminuyera el número de pasajeros aumentará el costo de esta actividad. Incluye: Free covers limitados (de acuerdo a la zona reservada); Crédito limitado para consumo; Reserva de mesa en zona seleccionada (garantizada hasta 12:00 am); Servicio de mesero (propinas no incluidas).No incluye: Ubicación de mesa en específico (se garantiza únicamente zona); Propinas.")
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
    


    const [first,setFirst]=useState();
    const [second,setSecond]=useState();
    const classes = useStyles2();



    const [data, setData] = useState([
        {
        key: "1",
        status:true,
        date: "",
        number: "",
        number2: 0.00
    },
    {
        key: "1",
        status:true,
        date: "",
        number: "",
        number2: 0.00
    },
    {
        key: "1",
        status:true,
        date: "",
        number: "",
        number2: 0.00
    },
    {
        key: "1",
        status:true,
        date: "ES",
        number: "Eur",
        number2: 10.00
    },

    
 ]);

    const add = (e) => {
        e.preventDefault()
        let row = {
            key: "1",
            date: first,
            number: second,
            number2: 0.00
        };
        let newStateArray = [...data];
        newStateArray.push(row);
        setData(newStateArray);
    };


    const remove = (a) => {
        a.preventDefault()
        console.log("asdadvdfe")
        document.querySelectorAll('#table .select:checked').forEach(e => {
          e.parentNode.parentNode.remove()
        });

        }
      



    return (
        <Card style={{ width: '23rem' }, { borderWidth: 3 }, { borderColor: 'rgb(238, 91, 46)' }}  >
            <Card.Body>
                <Form >
                    <Row className="rowmarn">
                        <Col className="firstbtn">
                            <div className="firstbtn1"><Link to="/admin/experiences"><Button>Volver</Button></Link></div>
                            <div className="btnfornew" >
                                <Button>Eliminar</Button>
                                <Button className="formarginbtn">Guardar</Button>
                            </div>
                        </Col >
                    </Row>
                    <hr />
                    <Row className="rowmarn">
                        <Col xs={6}>
                        <Form.Label>Nombre</Form.Label>
                            <Form.Control defaultValue="Guardians of EK by soyser" />
                      
                        </Col >
                        <Col >
                        <Form.Label>Type</Form.Label>
                            <Form.Control as="select">
                                        <option>Hosted</option>
                                        <option>Normal</option>
                                    </Form.Control>
                        </Col >
                        <Col >
                        <Form.Label>Estatus</Form.Label>
                                        <Form.Control as="select">
                                        <option>Publicado</option>
                                        <option>Inactivo</option>
                                        <option>Borrador</option>
                                    </Form.Control>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="formlabelleft">
                        <Form.Label className="rowmarn12345">Precios</Form.Label> 
                        </Col>
                    </Row>
                    <Row className="marginbootm">
                    
                           
                            <Col className="tablebutton"> 
                            
                                <Button className="tableaddbutton" onClick={remove}>
                                    Eliminar
                                   </Button>
                                   <Popup trigger={<Button className="tableaddbutton" >Nueva Fecha</Button>} position="bottom right">
                            
                       
                                   <Card style={{ width: '26rem' },{ borderWidth: 3 }, { borderColor: 'rgb(238, 91, 46)' }} >
                                       <div className="popupdiv">
                                <Row className="rowmarn">
                                    <Col>
                                        <Form.Label>País</Form.Label>
                                        <Form.Control as="select"  onChange={e=> setFirst(e.target.value)}>
                                            <option>México</option>
                                            <option>España</option>
                                            <option>Estados Unidos</option>
                                        </Form.Control>
                                    </Col >
                                    <Col>
                                        <Form.Label>Moneda</Form.Label>
                                        <Form.Control as="select" onChange={e=> setSecond(e.target.value)}>
                                            <option>MXN</option>
                                            <option>EUR</option>
                                            <option>USD</option>
                                        </Form.Control>
                                    </Col >
                                </Row>
                        <div className="rightbutton">
                            <button className="buttonmodel1" onClick={add}>Agregar</button>
                        </div>
                        </div>

                        </Card>
                    
                            </Popup>
                            </Col>
                        </Row>
                        <Row className="rowmarn123">
                        <TableContainer component={Paper} className={classes.table1}>
                            <Table size="small" className={classes.table} id="table" aria-label="custom pagination table">
                                <TableHead className="header">
                                    <TableRow>
                                        <TableCell className="collspan"></TableCell>
                                        <TableCell className="collspan">País</TableCell>
                                        <TableCell className="collspan">Moneda</TableCell>
                                        <TableCell className="collspan">Monto</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {data.map((row, a) => (

                                        <TableRow>
                                            <TableCell className="inputintable3"><input class='select' type="checkbox" />
                                            </TableCell>
                                            <TableCell><Form.Control className="inputintable" defaultValue={row.date} type="text" /></TableCell>

                                            <TableCell><Form.Control className="inputintable" defaultValue={row.number} type="text" /></TableCell>

                                            <TableCell><Form.Control className="inputintable" defaultValue={row.number2} type="number" /></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                  
                </Row>
                    <Row className="rowmarn">
                        <Col>
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
                        </Col >
                        <Col >
                            <Form.Label>Duración</Form.Label>
                            <Form.Control defaultValue="5 horas" />
                        </Col >
                        <Col >
                        <Form.Label>Ubicación</Form.Label>
                        <Form.Control defaultValue="Cancún, México" />
                        </Col >
                    </Row>
                    <Row className="rowmarn">
                        <Col >
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control defaultValue="¡The City Cancún ofrece la mejor fiesta de la ciudad!  Reservando la opción de barra libre no sólo tendrás acceso a la disco más grande de Latinoamérica sino que podrás disfrutar de bebidas nacionales ilimitadas.WE OWN THE NIGHT!" />
                        </Col >
                    </Row>
                    <Row className="rowmarn">
                        <Col >
                            <Form.Label>Descripción Corta</Form.Label>
                            <JoditEditor
                                        ref={editor}
                                        value={content}
                                        config={config}
                                        tabIndex={2} // tabIndex of textarea
                                        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                        onChange={newContent => { }}
                                    />
                        </Col >
                    </Row>
                    <Row>
                        <Col className="formlabelleft">
                        <Form.Label className="rowmarn12345">Imagen de lista</Form.Label> 
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        
                            <div class="imageupload">
                                <label for="file-input">
                                    <div className="firstboxupdate"><BorderColorRoundedIcon className="box12" /></div>
                                    <img className="imageinputupdate" src={pics} />
                                </label>
                                <input id="file-input" type="file" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="formlabelleft">
                        <Form.Label className="rowmarn12345">Imágenes</Form.Label> 
                        </Col>
                    </Row>
                    
                    <div className="row mainimagetab">
                                     
                                     <div class="col-sm-6 col-xs-12 col-md-3 col-lg-3 imageuploadtab ">
                                    <label for="file-input">
                                        <div className="firstboxupdatetab"><BorderColorRoundedIcon className="box12tab" /></div>
                                        <img className="imageinputupdatetab" src={pics} />
                                    </label>
                                    <input id="file-input" type="file" />
                                </div>
                                
                                     <div class= "col-sm-6 col-xs-12 col-md-3 col-lg-3 imageuploadtab">
                                    <label for="file-input">
                                        <div className="firstboxupdatetab"><BorderColorRoundedIcon className="box12tab" /></div>
                                        <img className="imageinputupdatetab" src={pics} />
                                    </label>
                                    <input id="file-input" type="file" />
                                </div>
                                
                                     <div class="col-sm-6 col-xs-12 col-md-3 col-lg-3 imageuploadtab">
                                    <label for="file-input">
                                        <div className="firstboxupdateexp"><BorderColorRoundedIcon className="box12tab" /></div>
                                        <img className="imageinputupdatetab" src={pics} />
                                    </label>
                                    <input id="file-input" type="file" />
                                </div>
                                
                                    
                                
                               
    
                                     </div>
                </Form>
            </Card.Body>
        </Card>
    );
}
export default ExperiencesUpdate;
