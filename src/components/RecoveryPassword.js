import React, { useEffect, useState } from "react";
import "./Navbar.css";
import background from "../images/bg.jpg";
import Logo from "../images/logo.png";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Navbar";
import {
  recoveryPassword,
  recoveryPawdStateClear,
} from "../store/recoveryPasswordReducer";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./material-ui-comps/Loader";
import SnackBar from "./material-ui-comps/SnackBar";
import { useHistory } from "react-router-dom";

function RecoveryPassword() {
  const [recoveryPasswordValues, setRecoveryPasswordValues] = useState({
    userEmail: "",
    userId: "",
    newPassword: "",
    reNewPassword: "",
    oldPassword: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [snackBarMsg, setSnackBarMsg] = useState();
  const [severity, setSeverity] = useState("error");
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const { isError, isFetching, isSuccess, msg } = useSelector(
    (state) => state.recoveryPasswordState
  );
  const { responseData } = useSelector((state) => state.userDetailState);

  useEffect(() => {
    if (responseData ) {
      const { userId, userEmail } = responseData;
      setRecoveryPasswordValues({
        ...recoveryPasswordValues,
        userId: userId,
        userEmail: userEmail,
      });
    }
  }, [responseData]);

  useEffect(() => {
    const { reNewPassword, newPassword, oldPassword } = recoveryPasswordValues;
    if (reNewPassword && newPassword && oldPassword) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [recoveryPasswordValues]);

  useEffect(() => {
    if (msg) {
      setSnackBarMsg(msg);
    }
    if (isError) {
      setOpen(true);
      dispatch(recoveryPawdStateClear());
    }
    if (isSuccess) {
      setOpen(true);
      setSnackBarMsg("Password was successfully updated");
      setSeverity("success");
      dispatch(recoveryPawdStateClear());
    }
  }, [isSuccess, isError, msg]);

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setRecoveryPasswordValues({ ...recoveryPasswordValues, [name]: value });
  };

  const onSubmitHandler = () => {
    dispatch(recoveryPassword(recoveryPasswordValues));
  };

  return (
    <>
      <NavBar />
      <div className="LoginMain">
        <div className="styles_container__gxc6Z">
          <div className="loginimage">
            <img className="styles_background__14z2nreg" src={background} />
          </div>

          <div className="LoginCard">
            <Card className="cardpadding">
              <Row className="marginTopRow">
                <Col>
                  <img src={Logo} className="loginlogo" />
                </Col>
              </Row>

              <Row className="marginTopRow">
                <Col>
                  <hr className="rowwidth" />
                </Col>
              </Row>

              <Row className="marginTopRow">
                <Col>
                  <p className="register">
                    Para recuperar tu constraseña, introduce la dirección de
                    correo electrónico con la que te regístraste.
                  </p>
                </Col>
              </Row>
              <Row className="marginTopRow123">
                <Col>
                  <Form.Label>Contraseña anterio</Form.Label>
                  <Form.Control
                    type="password"
                    name="oldPassword"
                    onChange={onChangeHandler}
                  />
                </Col>
              </Row>
              <Row className="marginTopRow123">
                <Col>
                  <Form.Label>Nueva contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    name="newPassword"
                    onChange={onChangeHandler}
                  />
                </Col>
              </Row>
              <Row className="marginTopRow123">
                <Col>
                  <Form.Label>confirmar nueva contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    name="reNewPassword"
                    onChange={onChangeHandler}
                  />
                </Col>
              </Row>
              <Row className="marginTopRow1234">
                <Col>
                  <Button
                    className="loginbutton"
                    disabled={isDisabled}
                    onClick={onSubmitHandler}
                  >
                    {isFetching ? <Loader /> : "Actualiza"}
                  </Button>
                </Col>
              </Row>
            </Card>
          </div>
        </div>
        <SnackBar
          open={open}
          setOpen={setOpen}
          severity={severity}
          msg={snackBarMsg}
        />
      </div>
    </>
  );
}
export default RecoveryPassword;
