import "../App.css";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Multiselect } from "multiselect-react-dropdown";
import { Form, Col, Button, Card, Row } from "react-bootstrap";
import {
  localFriendsStateClear,
} from "../store/localFriendsReducer";
import { allUsersAction, allUsersStateClear } from "../store/allUserReducer";
import { useSelector, useDispatch } from "react-redux";
import SnackBar from "./material-ui-comps/SnackBar";
import { useHistory } from "react-router-dom";
import { isEmpty } from "lodash";

function LocalfriendsUpdate() {
  const dispatch = useDispatch();
  const multiselectRef = useRef();
  const history = useHistory();
  const { isError, isSuccess, msg, localFriend } = useSelector(
    (state) => state.localFriendsState
  );
  // const { allUsers } = useSelector((state) => state.allUsersState);

  const [stateValues, setStateValues] = useState({
    userEmail: "",
    name: "",
    age: 0,
    gender: "",
    residentTime: "",
    educationLevel: "",
    languages: [{ name: "" }],
    direction: "",
    aboutUser: "",
    status: "",
    identificationId: "",
    phone: "",
  });
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = useState("error");
  const [snackBar, setSnackBar] = useState("");
  const [isDelete, setIsDelete] = useState(false);
  const [title] = useState({
    objectArray: [
      { name: "Francés", id: 1 },
      { name: "Portugués", id: 2 },
      { name: "Inglés", id: 3 },
      { name: "Español", id: 4 },
    ],
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(allUsersAction({ type: "get", token: token }));
    dispatch(allUsersStateClear());
    return () => {
      dispatch(localFriendsStateClear());
    };
  }, []);

  useEffect(() => {
    if (localFriend) {
      const languageList =
        localFriend.languages &&
        localFriend.languages.map((friend) => {
          return { name: friend };
        });
      setStateValues({ ...localFriend, languages: languageList });
    }
  }, [localFriend]);

  useEffect(() => {
    if (isSuccess && isDelete) {
      history.push("/admin/localfriends");
      setOpen(true);
      setSeverity("success");
      setSnackBar("Your record was successfully deleted");
    }
    if (isSuccess && !isDelete) {
      setOpen(true);
      setSeverity("success");
      setSnackBar("Your record was successfully added");
      dispatch(localFriendsStateClear());
    }
    if (isError) {
      setOpen(true);
      setSeverity("error");
      setSnackBar(msg);
      dispatch(localFriendsStateClear());
    }
  }, [isSuccess, isError]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setStateValues({ ...stateValues, [name]: value });
  };

  const onSelect = (selectedList) => {
    setStateValues({ ...stateValues, languages: selectedList });
  };

  const onRemove = (selectedList) => {
    setStateValues({ ...stateValues, languages: selectedList });
  };

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
                <Link to="/profile/localfriend/data">
                  <Button>Volver</Button>
                </Link>
              </div>
              <div className="btnfornew">
              </div>
            </Col>
          </Row>
          <hr />
          <Row className="rowmarn">
            <Col xs={6}>
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                as="select"
                name="userEmail"
                value={stateValues.userEmail ? stateValues.userEmail : ""}
                onChange={onChangeHandler}
              >
                <option>
                  {stateValues.userEmail ? stateValues.userEmail : ""}
                </option>
                {/* {!isEmpty(allUsers) && allUsers.map((user)=>{
                    return(  
                        <option>{user.userEmail}</option>
                    )
                })} */}
                <option>lefuva97@gmail.com</option>
                <option>ileniasorrentino00@gmail.com</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                name="name"
                value={stateValues.name}
                onChange={onChangeHandler}
              />
            </Col>
            <Col>
              <Form.Label>Edad</Form.Label>
              <Form.Control
                name="age"
                value={stateValues.age ? stateValues.age : ""}
                onChange={onChangeHandler}
              />
            </Col>
          </Row>
          <Row className="rowmarn">
            <Col xs={6}>
              <Form.Label>Género</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={stateValues.gender ? stateValues.gender : ""}
                onChange={onChangeHandler}
              >
                <option>{stateValues.gender ? stateValues.gender : ""}</option>
                <option>Mujer</option>
                <option>Homber</option>
              </Form.Control>
            </Col>
          </Row>
          <Row className="rowmarn">
            <Col>
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                name="phone"
                value={stateValues.phone}
                onChange={onChangeHandler}
              />
            </Col>
            <Col>
              <Form.Label>Tiempo de residencia</Form.Label>
              <Form.Control
                as="select"
                name="residentTime"
                value={stateValues.residentTime ? stateValues.residentTime : ""}
                onChange={onChangeHandler}
              >
                <option>
                  {stateValues.residentTime ? stateValues.residentTime : ""}
                </option>
                <option>Menos de 5 años</option>
                <option>Menos de 3 años</option>
                <option>Entre 3 y 5 años</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Label>Nivel Educativo</Form.Label>
              <Form.Control
                as="select"
                name="educationLevel"
                value={
                  stateValues.educationLevel ? stateValues.educationLevel : ""
                }
                onChange={onChangeHandler}
              >
                <option>
                  {stateValues.educationLevel ? stateValues.educationLevel : ""}
                </option>
                <option>Primaria</option>
                <option>Secundaria</option>
                <option>Preparatoria</option>
                <option>Universidad</option>
                <option>Postgrado</option>
                <option>Otro</option>
              </Form.Control>
            </Col>
          </Row>

          <Row className="rowmarn">
            <Col>
              <Form.Label>Idiomas</Form.Label>
              <Multiselect
                options={title.objectArray}
                displayValue="name"
                ref={multiselectRef}
                onSelect={onSelect}
                onRemove={onRemove}
                selectedValues={
                  !isEmpty(stateValues.languages) ? stateValues.languages : []
                }
              />
            </Col>
          </Row>
          <Row className="rowmarn">
            <Col>
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                name="direction"
                value={stateValues.direction ? stateValues.direction : ""}
                onChange={onChangeHandler}
              />
            </Col>
          </Row>
          <Row className="rowmarn">
            <Col>
              <Form.Label>Acerca de ti</Form.Label>
              <Form.Control
                as="textarea"
                aria-label="With textarea"
                name="aboutUser"
                value={stateValues.aboutUser ? stateValues.aboutUser : ""}
                onChange={onChangeHandler}
              />
            </Col>
          </Row>
          <Row className="rowmarn">
            <Col>
              <Form.Label>Estatus</Form.Label>
              <Form.Control
                as="select"
                name="status"
                value={stateValues.status ? stateValues.status : ""}
                onChange={onChangeHandler}
              >
                <option>{stateValues.status ? stateValues.status : ""}</option>
                <option>En espera</option>
                <option>Aprobado</option>
                <option>Rechazado</option>
                <option>Deshabilitado</option>
              </Form.Control>
            </Col>
          </Row>
          <Row className="rowmarn">
            <Col>
              <Form.Label>Identificación</Form.Label>
              <Form.Control
                name="identificationId"
                value={
                  stateValues.identificationId
                    ? stateValues.identificationId
                    : ""
                }
                onChange={onChangeHandler}
              />
            </Col>
          </Row>
        </Form>
      </Card.Body>
      <SnackBar
        open={open}
        setOpen={setOpen}
        severity={severity}
        msg={snackBar}
      />
    </Card>
  );
}
export default LocalfriendsUpdate;
