import "../App.css";
import { Card, Modal, Form, Row, Col } from "react-bootstrap";
import pics1 from "../images/house.jpg";
import pics3 from "../images/unnamed.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import Loader from "./material-ui-comps/Loader";
import { isEmpty } from "lodash";
import jwt_decode from "jwt-decode";
import { userDetail, userDetailStateClear } from "../store/userDetailReducer";

function Experiences1() {
  const dispatch = useDispatch();
  const { experience } = useSelector((state) => state.experienceState);
  const { responseData } = useSelector(
    (state) => state.userDetailState
  );

  const [modalShow, setModalShow] = useState(false);
  const [img, setImg] = useState();
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (!isEmpty(experience)) {
      let totalAmount1 = 0;
      experience.prices.map((data) => {
        if (data.amount) {
          totalAmount1 += parseInt(data.amount);
        }
      });
      setTotalAmount(totalAmount1);
    }
  }, [experience]);

  return isEmpty(experience) ? (
    <div style={{ marginTop: "300px" }}>
      <Loader />
    </div>
  ) : (
    <>
      <Navbar />
      <div className="Experiences">
        <Card className="Experiences0">
          <div className="Experiences1">
            <div className="Experiences2">
              <div className="Experiencesimg">
                <img src={img} className="mainimage" />
                <div className="btnimage0">
                  {!isEmpty(experience.images) &&
                    experience.images.map((imgg) => {
                      return (
                        <button className="imagebtn">
                          <img
                            value={imgg.imageLink || pics1}
                            onClick={(e) => setImg(imgg.imageLink)}
                            onLoad={(e) => setImg(imgg.imageLink)}
                            className="btnimage"
                            src={imgg.imageLink}
                          />
                        </button>
                      );
                    })}
                </div>
              </div>
              <div className="Experiencestext">
                <h1>{experience.name}</h1>
                <h5 className="price1">
                  From: {totalAmount} {experience.prices[0].coin}
                </h5>

                <p className="price">all inclusive per person, total price.</p>
                <div className="icontext">
                  <img
                    src={experience.listImage.imageLink}
                    className="imgicon"
                  />
                  <p>{experience.duration} hours</p>
                </div>

                <button
                  onClick={() => setModalShow(true)}
                  className="reservbtn"
                >
                  RESERVAR
                </button>

                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>

            <div className="discription">
              <p className="dispara12">Descripción</p>
              <hr className="dispara" />
              <p className="dispara1">{experience.description}</p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Experiences1;
function MyVerticallyCenteredModal(props) {
  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
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
              <p>
                Antes de reservar, asegúrate que los datos de tu perfil sean
                correctos. Más adelante no podrás modificarlos.
                <Link className="firstlink" onClick={() => setModalShow1(true)}>
                  Revisa tu perfil
                </Link>{" "}
              </p>
              <MyVerticallyCenteredModal1
                show={modalShow1}
                onHide={() => setModalShow1(false)}
              />
              <div className="Model3">
                <h4>Selecciona tu método de pago:</h4>
              </div>
              <div className="Model4">
                <div className="Model5">
                  <p>Aún no tienes ninguna tarjeta guardada</p>
                  <Link
                    className="secondlink"
                    onClick={() => setModalShow2(true)}
                  >
                    Agregar tarjeta
                  </Link>
                  <MyVerticallyCenteredModal2
                    show={modalShow2}
                    onHide={() => setModalShow2(false)}
                  />
                </div>
              </div>
              <button className="buttonmodel">CONFIRMAR</button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

//seond model
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
              <p>
                Completa tu perfil de usuario, asegúrate que los datos sean
                correctos.
              </p>
              <div className="Model3">
                <p className="modelp">Información Básica</p>
              </div>

              {/* <div className="Model5">
                             <p>
                             Aún no tienes ninguna tarjeta guardada
                             </p>
                             <Link className="secondlink">Agregar tarjeta</Link>
                         </div> */}
              <div className="modelform">
                <Form>
                  <Row className="rowmarn">
                    <Col>
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control defaultValue="CARLOS" />
                    </Col>
                    <Col>
                      <Form.Label>Apellido Paterno</Form.Label>
                      <Form.Control defaultValue="BERNIER" />
                    </Col>
                  </Row>
                  <Row className="rowmarn">
                    <Col>
                      <Form.Label>Apellido Materno</Form.Label>
                      <Form.Control defaultValue="MORILLO" />
                    </Col>
                    <Col>
                      <Form.Label>Fecha de Nacimiento (mes/día/año)</Form.Label>
                      <Form.Control
                        type="date"
                        className="myDate"
                        defaultValue="2000-05-05"
                      />
                    </Col>
                  </Row>
                  <Row className="rowmarn">
                    <Col>
                      <Form.Label>Teléfono</Form.Label>
                      <Form.Control defaultValue="648202569" />
                    </Col>
                    <Col>
                      <Form.Label>Móvil</Form.Label>
                      <Form.Control defaultValue="648202569" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>Identificación o DNI</Form.Label>
                      <Form.Control defaultValue="47619986g" />
                    </Col>
                    <Col></Col>
                  </Row>
                </Form>
              </div>
              <div className="rightbutton">
                <button className="buttonmodel1">Siguiente</button>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

//3rdmodel
function MyVerticallyCenteredModal2(props) {
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
              <div>
                <img src={pics3} className="cardimg2" />
              </div>
              <div className="modelform">
                <Form>
                  <Row className="rowmarn">
                    <Col xs={9}>
                      <Form.Label>Número de tarjeta</Form.Label>
                      <Form.Control />
                    </Col>

                    <Col>
                      <Form.Label>CVC</Form.Label>
                      <Form.Control />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={7}>
                      <Form.Label>Titular de la tarjeta</Form.Label>
                      <Form.Control />
                    </Col>
                    <Col>
                      <Form.Label>Año</Form.Label>
                      <Form.Control />
                    </Col>
                    <Col>
                      <Form.Label>Mes</Form.Label>
                      <Form.Control />
                    </Col>
                  </Row>
                </Form>
              </div>
              <div className="rightbutton">
                <button className="buttonmodel1">Guardar</button>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
