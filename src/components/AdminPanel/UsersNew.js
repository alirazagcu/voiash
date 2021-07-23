import "../../App.css";
import { Form, Col, Button, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
function UsersNew() {
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
                    <Link to="/admin/users">
                      <Button>Volver</Button>
                    </Link>
                  </div>
                  <div className="btnfornew">
                    <Button className="formarginbtn">Guardar</Button>
                  </div>
                </Col>
              </Row>
              <hr />
              <h4 className="h4inuser">Datos Personales</h4>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Nomber</Form.Label>
                  <Form.Control />
                </Col>
                <Col>
                  <Form.Label>Apellido Pateron</Form.Label>
                  <Form.Control />
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Apellido Materno</Form.Label>
                  <Form.Control />
                </Col>
                <Col>
                  <Form.Label>Fecha de Nacimiento</Form.Label>
                  <Form.Control type="date" />
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Móvil</Form.Label>
                  <Form.Control />
                </Col>
                <Col>
                  <Form.Label>Móvil</Form.Label>
                  <Form.Control />
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Email</Form.Label>
                  <Form.Control />
                </Col>
                <Col>
                  <Form.Label>País</Form.Label>
                  <Form.Control as="select">
                    <option>México</option>
                    <option>España</option>
                    <option>Estados Unidos</option>
                  </Form.Control>
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control />
                </Col>
                <Col>
                  <Form.Label>Colonia o Provincia</Form.Label>
                  <Form.Control />
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Calle</Form.Label>
                  <Form.Control />
                </Col>
                <Col>
                  <Form.Label>No.</Form.Label>
                  <Form.Control />
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Int.</Form.Label>
                  <Form.Control />
                </Col>
                <Col>
                  <Form.Label>Código Postal</Form.Label>
                  <Form.Control />
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>DNI</Form.Label>
                  <Form.Control />
                </Col>
                <Col></Col>
              </Row>
              <h4 className="h4inuser">Datos de Contacto</h4>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Nomber</Form.Label>
                  <Form.Control />
                </Col>
                <Col>
                  <Form.Label>Apellido Pateron</Form.Label>
                  <Form.Control />
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Apellido Materno</Form.Label>
                  <Form.Control />
                </Col>
                <Col>
                  <Form.Label>Móvil</Form.Label>
                  <Form.Control />
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Móvil</Form.Label>
                  <Form.Control />
                </Col>
                <Col>
                  <Form.Label>Email</Form.Label>
                  <Form.Control />
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Estatus</Form.Label>
                  <Form.Control />
                </Col>
                <Col></Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default UsersNew;
