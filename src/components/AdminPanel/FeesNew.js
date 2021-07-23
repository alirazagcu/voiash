import "../../App.css";
import { Link } from "react-router-dom";
import { Form, Col, Button, Card, Row } from "react-bootstrap";
function FeeNew() {
  return (
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
                <Link to="/admin/fees">
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
            </Col>
          </Row>
          <Row className="rowmarn">
            <Col>
              <Form.Label>Porcentaje</Form.Label>
              <Form.Control defaultValue="2" type="number" />
            </Col>
          </Row>
          <Row className="rowmarn">
            <Col>
              <Form.Label>Moneda</Form.Label>
              <Form.Control as="select">
                <option>Todos</option>
                <option>MAX</option>
                <option>EUR</option>
                <option>EUR</option>
              </Form.Control>
            </Col>
          </Row>
          <Row className="rowmarn">
            <Col>
              <Form.Label>Pasarela de pagos</Form.Label>
              <Form.Control as="select">
                <option>Todos</option>
                <option>Conekta</option>
                <option>Addon Payment</option>
              </Form.Control>
            </Col>
          </Row>
          <Row className="rowmarn">
            <Col>
              <Form.Label>Tipo de tarjeta</Form.Label>
              <Form.Control as="select">
                <option>VISA</option>
                <option>MASTERCARD</option>
                <option>AMERICAN EXPRESS</option>
                <option>DISCOVER</option>
                <option>DINERS CLUB</option>
                <option>MAESTRO</option>
              </Form.Control>
            </Col>
          </Row>
          <Row className="rowmarn">
            <Col>
              <Form.Label>Estatus</Form.Label>
              <Form.Control as="select">
                <option>Activo</option>
                <option>Inactivo</option>
              </Form.Control>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}
export default FeeNew;
