import "../../App.css";
import { Form, Col, Button, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loader from "../material-ui-comps/Loader";
import { useSelector } from "react-redux";
import {isEmpty} from "lodash";

function UserUpdate() {
  const { user } = useSelector(
    (state) => state.allUsersState
  );
  const {personalDetails, location, contact} = user;
  return isEmpty(user) ? (
    <div style={{ marginTop: "300px" }}>
      <Loader />
    </div>
  ) : (
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
                  <div className="btnfornew"></div>
                </Col>
              </Row>
              <hr />
              <h4 className="h4inuser">Datos Personales</h4>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Nomber</Form.Label>
                  <Form.Control defaultValue={personalDetails.firstname ?personalDetails.firstname: ""} />
                </Col>
                <Col>
                  <Form.Label>Apellido Pateron</Form.Label>
                  <Form.Control defaultValue={personalDetails.lastname ? personalDetails.lastname: ""} />
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Apellido Materno</Form.Label>
                  <Form.Control defaultValue={personalDetails.motherlastname ? personalDetails.motherlastname: ""} />
                </Col>
                <Col>
                  <Form.Label>Fecha de Nacimiento</Form.Label>
                  <Form.Control type="date" defaultValue="1997-07-12" />
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Móvil</Form.Label>
                  <Form.Control defaultValue={personalDetails.mobile? personalDetails.mobile: ""} />
                </Col>
                <Col>
                  <Form.Label>Móvil</Form.Label>
                  <Form.Control defaultValue={personalDetails.mobile? personalDetails.mobile: ""} />
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Email</Form.Label>
                  <Form.Control defaultValue={user.userEmail? user.userEmail: ""}  />
                </Col>
                <Col>
                  <Form.Label>País</Form.Label>
                  <Form.Control as="select">
                    <option>{location.country? location.country: ""}</option>
                    <option>México</option>
                    <option>España</option>
                    <option>Estados Unidos</option>
                  </Form.Control>
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control defaultValue={location.city? location.city: ""} />
                </Col>
                <Col>
                  <Form.Label>Colonia o Provincia</Form.Label>
                  <Form.Control defaultValue={location.colony? location.colony: ""} />
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Calle</Form.Label>
                  <Form.Control defaultValue={location.street? location.street: ""} />
                </Col>
                <Col>
                  <Form.Label>No.</Form.Label>
                  <Form.Control defaultValue={location.houseno? location.houseno: ""}/>
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Int.</Form.Label>
                  <Form.Control defaultValue={location.apartmentno? location.apartmentno: ""} />
                </Col>
                <Col>
                  <Form.Label>Código Postal</Form.Label>
                  <Form.Control defaultValue={location.postalCode? location.postalCode: ""} />
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>DNI</Form.Label>
                  <Form.Control defaultValue={user.userId? user.userId: ""} />
                </Col>
                <Col></Col>
              </Row>
              <h4 className="h4inuser">Datos de Contacto</h4>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Nomber</Form.Label>
                  <Form.Control defaultValue={contact.firstname? contact.firstname: ""} />
                </Col>
                <Col>
                  <Form.Label>Apellido Pateron</Form.Label>
                  <Form.Control defaultValue={contact.lastname? contact.lastname: ""} />
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Apellido Materno</Form.Label>
                  <Form.Control defaultValue={contact.motherlastname? contact.motherlastname: ""} />
                </Col>
                <Col>
                  <Form.Label>Móvil</Form.Label>
                  <Form.Control defaultValue={contact.phone? contact.phone: ""} />
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Móvil</Form.Label>
                  <Form.Control defaultValue={contact.mobile? contact.mobile: ""} />
                </Col>
                <Col>
                  <Form.Label>Email</Form.Label>
                  <Form.Control defaultValue={user.userEmail? user.userEmail: ""} />
                </Col>
              </Row>
              <Row className="rowmarn">
                <Col>
                  <Form.Label>Estatus</Form.Label>
                  <Form.Control disabled defaultValue={user.status? user.status: ""} />
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
export default UserUpdate;
