import React, { useState, useEffect } from "react";
import "./Navbar.css";
import background from "../images/bg.jpg";
import Logo from "../images/logo.png";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Navbar";
import {
  resetPassword,
  resetPasswordStateClear,
} from "../store/resetPasswordReducer";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./material-ui-comps/Loader";
import SnackBar from "./material-ui-comps/SnackBar";

function ResetPassword() {
  const [resetPasswordValues, setResetPasswordValues] = useState({
    userEmail: "",
    userId: "",
    newPassword: "",
    reNewPassword: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const dispatch = useDispatch();
  const { isError, isFetching, isSuccess, msg } = useSelector(
    (state) => state.resetPasswordState
  );
  const [snackBarMsg, setSnackBarMsg] = useState();
  const [severity, setSeverity] = useState("error");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (resetPasswordValues.reNewPassword && resetPasswordValues.newPassword) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [resetPasswordValues]);

  useEffect(() => {
    if (msg) {
      setSnackBarMsg(msg);
    }
    if (isError) {
      setOpen(true);
      dispatch(resetPasswordStateClear());
    }
    if (isSuccess) {
      setOpen(true);
      setSnackBarMsg("Password was successfully updated");
      setSeverity("success");
      dispatch(resetPasswordStateClear());
    }
  }, [isSuccess, isError, msg]);

  useEffect(() => {
    const urlData = window !== "undefined" && window.location.href.split("/");
    setResetPasswordValues({
      ...resetPasswordValues,
      userEmail: (urlData && urlData[urlData.length - 1 - 2]) || "",
      userId: (urlData && urlData[urlData.length - 1]) || "",
    });
  }, []);

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setResetPasswordValues({ ...resetPasswordValues, [name]: value });
  };

  const onSubmitHandler = () => {
    dispatch(resetPassword(resetPasswordValues));
  };
  
  return (
    <>
      <NavBar />
      <div className="LoginMain">
        <div className="styles_container__gxc6Z">
          <div className="loginimage">
            <img className="styles_background__14z2nreg" src={background} alt="img was not found"/>
          </div>

          <div className="LoginCard">
            <Card className="cardpadding">
              <Row className="marginTopRow">
                <Col>
                  <img src={Logo} className="loginlogo" alt="img was not found"/>
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
export default ResetPassword;
