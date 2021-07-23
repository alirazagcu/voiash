import "../../App.css";
import { useState } from "react";
import { Form, Col, Button, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
function PaymentsNew() {
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
                    <Link to="/admin/payments">
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
              <h4 className="h4inuser">Registrar un pago</h4>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>ID de usuario</Form.Label>
                  <Form.Control defaultValue="Leonardo" />
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control defaultValue="Valero" />
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>ID de reservación</Form.Label>
                  <Form.Control defaultValue="55 8417 7528" />
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control defaultValue="lefuva97@gmail.com" />
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Referencia</Form.Label>
                  <Form.Control defaultValue="Naucalpan de Juárez" />
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Monto</Form.Label>
                  <Form.Control defaultValue="Plaza Tucan" />
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Comisión</Form.Label>
                  <Form.Control defaultValue="34" />
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Monto Total</Form.Label>
                  <Form.Control defaultValue="2753104729902" />
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Moneda</Form.Label>
                  <Form.Control defaultValue="Leonardo" />
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default PaymentsNew.js;
