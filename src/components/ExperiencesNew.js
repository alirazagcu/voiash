import "../App.css";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from "@material-ui/core/TableContainer";
import Popup from "reactjs-popup";
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
function NewExperiences() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };

  const [first, setFirst] = useState();
  const [second, setSecond] = useState();
  const classes = useStyles2();

  const [data, setData] = useState([]);

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
                      <Button className="formarginbtn">Guardar</Button>
                    </div>
                  </Col>
                </Row>
                <hr />
                <Row className="rowmarn">
                  <Col>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control />
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
                    <Form.Control />
                  </Col>
                  <Col>
                    <Form.Label>Ubicación</Form.Label>
                    <Form.Control />
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
                    <Form.Control />
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
                    <div className="imageinputuploadpic" />
                  </label>
                  <input id="file-input" type="file" />
                </div>
                <label>Imágenes</label>
                <Row>
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
export default NewExperiences;
