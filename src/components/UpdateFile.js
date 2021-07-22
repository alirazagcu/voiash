import "../App.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from "@material-ui/core/TableContainer";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import pics from "../images/house.jpg";
import { Toolbar } from "@material-ui/core";
import { Multiselect } from "multiselect-react-dropdown";
import { Form, Col, Button, Card, Row } from "react-bootstrap";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import BorderColorRoundedIcon from "@material-ui/icons/BorderColorRounded";
import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
    borderRadius: 8,
    boxShadowTop: 2,
    flexGrow: 1,
    boxShodowColor: "red",
  },
  table1: {
    borderRadius: 8,
    boxShadow: "1px 1px 5px 1px gray",
  },
  header: {
    fontSize: 50,
    fontWieght: "bold",
    color: "black",
  },
});
function Update() {
  const editor = useRef(null);
  const [content, setContent] = useState(
    "Reserva la mesa de tu preferencia en Mandala Cancún y se parte de las emocionantes celebraciones que se viven noche a noche Lo que pagas por tu mesa se convierte en Crédito para bebidas o botellas: Diamond | $1500 USD (10 Covers) El precio publicado es por persona y se basa en un mínimo de 10 pasajeros; en el supuesto que disminuyera el número de pasajeros aumentará el costo de esta actividad. Incluye: Free covers limitados (de acuerdo a la zona reservada); Crédito limitado para consumo; Reserva de mesa en zona seleccionada (garantizada hasta 12:00 am); Servicio de mesero (propinas no incluidas).No incluye: Ubicación de mesa en específico (se garantiza únicamente zona); Propinas."
  );
  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };

  const [first, setFirst] = useState();
  const [second, setSecond] = useState();
  const classes = useStyles2();

  const [data, setData] = useState([
    {
      key: "1",
      status: true,
      date: "",
      number: "",
      number2: 0.0,
    },
    {
      key: "1",
      status: true,
      date: "",
      number: "",
      number2: 0.0,
    },
    {
      key: "1",
      status: true,
      date: "",
      number: "",
      number2: 0.0,
    },
    {
      key: "1",
      status: true,
      date: "ES",
      number: "Eur",
      number2: 10.0,
    },
  ]);

  const add = (e) => {
    e.preventDefault();
    let row = {
      key: "1",
      date: first,
      number: second,
      number2: 0.0,
    };
    let newStateArray = [...data];
    newStateArray.push(row);
    setData(newStateArray);
  };

  const remove = (a) => {
    a.preventDefault();
    document.querySelectorAll("#table .select:checked").forEach((e) => {
      e.parentNode.parentNode.remove();
    });
  };

  const divMargin = { margin: "25px 0" };
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
      { key: "Inglés", cat: "Group 1" },
    ],
  });
  const [title1, setTitle1] = useState(["Akash", "nadeem", "hameed"]);
  const styles = {
    largeIcon: {
      width: 100,
      height: 100,
    },
  };
  return (
    <div className="person">
      <div className="person1">
        <Card
          style={
            ({ width: "23rem" },
            { borderWidth: 3 },
            { borderColor: "rgb(238, 91, 46)" })
          }
        >
          <Card.Body>
            <Form className="form1">
              <Form>
                <Row className="rowmarn">
                  <Col className="firstbtn">
                    <div className="firstbtn1">
                      <Link to="/profile/localfriend/experiences">
                        <Button>Volver</Button>
                      </Link>
                    </div>

                    <div className="btnfornew">
                      <Button>Eliminar</Button>
                      <Button className="formarginbtn">Guardar</Button>
                    </div>
                  </Col>
                </Row>
                <hr />
                <Row className="rowmarn">
                  <Col>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control defaultValue="The City Open Bar" />
                    <Form.Label className="rowmarn12345">Precios</Form.Label>
                  </Col>
                </Row>
                <Row className="marginbootm">
                  <Col className="tablebutton">
                    <Button className="tableaddbutton" onClick={remove}>
                      Eliminar
                    </Button>
                    <Popup
                      trigger={
                        <Button className="tableaddbutton">Nueva Fecha</Button>
                      }
                      position="bottom right"
                    >
                      <Card
                        style={
                          ({ width: "26rem" },
                          { borderWidth: 3 },
                          { borderColor: "rgb(238, 91, 46)" })
                        }
                      >
                        <div className="popupdiv">
                          <Row className="rowmarn">
                            <Col>
                              <Form.Label>País</Form.Label>
                              <Form.Control
                                as="select"
                                onChange={(e) => setFirst(e.target.value)}
                              >
                                <option>México</option>
                                <option>España</option>
                                <option>Estados Unidos</option>
                              </Form.Control>
                            </Col>
                            <Col>
                              <Form.Label>Moneda</Form.Label>
                              <Form.Control
                                as="select"
                                onChange={(e) => setSecond(e.target.value)}
                              >
                                <option>MXN</option>
                                <option>EUR</option>
                                <option>USD</option>
                              </Form.Control>
                            </Col>
                          </Row>
                          <div className="rightbutton">
                            <button className="buttonmodel1" onClick={add}>
                              Agregar
                            </button>
                          </div>
                        </div>
                      </Card>
                    </Popup>
                  </Col>
                </Row>
                <Row className="rowmarn123">
                  <TableContainer component={Paper} className={classes.table1}>
                    <Table
                      size="small"
                      className={classes.table}
                      id="table"
                      aria-label="custom pagination table"
                    >
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
                            <TableCell className="inputintable3">
                              <input class="select" type="checkbox" />
                            </TableCell>
                            <TableCell>
                              <Form.Control
                                className="inputintable"
                                defaultValue={row.date}
                                type="text"
                              />
                            </TableCell>

                            <TableCell>
                              <Form.Control
                                className="inputintable"
                                defaultValue={row.number}
                                type="text"
                              />
                            </TableCell>

                            <TableCell>
                              <Form.Control
                                className="inputintable"
                                defaultValue={row.number2}
                                type="number"
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Row>
                <Row className="rowmarn">
                  <Col>
                    <Form.Label>Duración</Form.Label>
                    <Form.Control defaultValue="4 horas" />
                  </Col>
                  <Col>
                    <Form.Label>Ubicación</Form.Label>
                    <Form.Control defaultValue="Cancún, México" />
                  </Col>
                  <Col>
                    <Form.Label>Estatus</Form.Label>
                    <Form.Control as="select">
                      <option>Publicado</option>
                      <option>Inactivo</option>
                      <option>Borrador</option>
                    </Form.Control>
                  </Col>
                </Row>
                <Row className="rowmarn">
                  <Col>
                    <Form.Label>Descripción Corta</Form.Label>
                    <Form.Control
                      defaultValue="¡The City Cancún ofrece la mejor fiesta de la ciudad!  Reservando la opción de barra libre no sólo tendrás acceso a la disco más grande de Latinoamérica sino que podrás disfrutar de bebidas nacionales ilimitadas.
WE OWN THE NIGHT!"
                      as="textarea"
                      aria-label="With textarea"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Descripción</Form.Label>
                    <JoditEditor
                      ref={editor}
                      value={content}
                      config={config}
                      tabIndex={2} // tabIndex of textarea
                      onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                      onChange={(newContent) => {}}
                    />
                  </Col>
                </Row>
                <label>Imagen de lista</label>
                <div class="image-upload">
                  <label for="file-input">
                    <img className="imageinput" src={pics} />
                  </label>
                  <input id="file-input" type="file" />
                </div>
                <label>Imágenes</label>
                <Row>
                  <Col>
                    <div class="image-upload">
                      <label for="file-input">
                        <div className="firstbox">
                          {" "}
                          <BorderColorRoundedIcon className="box1" />
                        </div>
                        <img className="imageinput12" src={pics} />
                      </label>
                      <input id="file-input" type="file" />
                    </div>
                  </Col>
                  <Col>
                    <div class="image-upload">
                      <label for="file-input">
                        <div className="firstbox">
                          {" "}
                          <BorderColorRoundedIcon className="box1" />
                        </div>

                        <img className="imageinput12" src={pics} />
                      </label>
                      <input id="file-input" type="file" />
                    </div>
                  </Col>
                  <Col>
                    <div class="image-upload">
                      <label for="file-input">
                        <AddRoundedIcon className="box" />
                        <div className="imageinput134" />
                      </label>
                      <input id="file-input" type="file" />
                    </div>
                  </Col>
                </Row>
              </Form>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default Update;
