import "../../App.css";
import { useState } from "react";
import { Form, Col, Button, Card, Row, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

function ReservationsNew() {
  const [modalShow1, setModalShow1] = useState(false);
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
            <Form>
              <Row className="rowmarn">
                <Col className="firstbtn">
                  <div className="firstbtn1">
                    <Link to="/admin/reservations">
                      <Button>Volver</Button>
                    </Link>
                  </div>
                  <div className="btnfornew">
                    <Button className="formarginbtn">Guardar</Button>
                  </div>
                </Col>
              </Row>
              <hr />
              <h4 className="h4inuser">Grupo</h4>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Nombre de grupo</Form.Label>
                  <Form.Control />
                </Col>
                <Col>
                  <Form.Label>Costo total</Form.Label>
                  <Form.Control />
                </Col>
                <Col>
                  <Form.Label>Destino</Form.Label>
                  <Form.Control />
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Hotel</Form.Label>
                  <Form.Control />
                </Col>
                <Col>
                  <Form.Label>Monto Pagado</Form.Label>
                  <Form.Control type="date" />
                </Col>
              </Row>

              <h4 className="h4inuser">Usuario</h4>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Nomber</Form.Label>
                  <Form.Control />
                </Col>
                <Col>
                  <Form.Label>Apellido Pateron</Form.Label>
                  <Form.Control />
                </Col>
                <Col>
                  <Form.Label>Apellido Materno</Form.Label>
                  <Form.Control />
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Fecha de nacimiento</Form.Label>
                  <Form.Control type="date" />
                </Col>
                <Col>
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control type="email" />
                </Col>
                <Col>
                  <Form.Label>Teléfono principal</Form.Label>
                  <Form.Control />
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Teléfono secundario</Form.Label>
                  <Form.Control />
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <h4 className="h4inuser">Pagos</h4>
                </Col>
                <Col className="h4inuser1">
                  <div className="buttondiv">
                    <Button onClick={() => setModalShow1(true)}>
                      Agregar Pago
                    </Button>
                  </div>
                </Col>
                <MyVerticallyCenteredModal1
                  show={modalShow1}
                  onHide={() => setModalShow1(false)}
                />
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default ReservationsNew;

function MyVerticallyCenteredModal1(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="Model">
        <div className="Model0">
          <div className="Model1">
            <CloseRoundedIcon className="closeicon" onClick={props.onHide} />
          </div>
          <div className="Model2">
            <div>
              <div className="Model3">
                <p className="modelp">Registrar un pago</p>
              </div>
              <div className="modelform">
                <Form>
                  <Row className="rowmarn">
                    <Col>
                      <Form.Label>Monto MXN*</Form.Label>
                      <Form.Control type="number" />
                    </Col>
                  </Row>
                  <Row className="rowmarn">
                    <Col>
                      <Form.Label>Tipo</Form.Label>
                      <Form.Control as="select">
                        <option>Tarjeta</option>
                        <option>Depósito</option>
                        <option>Transferencia</option>
                      </Form.Control>
                    </Col>
                  </Row>
                  <Row className="rowmarn">
                    <Col>
                      <Form.Label>Fecha</Form.Label>
                      <Form.Control type="date" placeholder="06/05/2021" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>Referencia</Form.Label>
                      <Form.Control placeholder="" />
                    </Col>
                  </Row>
                </Form>
              </div>
              <div className="rightbutton">
                <button className="buttonmodel1">Registrar</button>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
