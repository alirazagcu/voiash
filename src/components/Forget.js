import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import background from "../images/bg.jpg";
import Logo from "../images/logo.png";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Navbar";
import {
  forgotPassword,
  forgotPasswordStateClear,
} from "../store/forgotPasswordReducer";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Loader from "./material-ui-comps/Loader";
import SnackBar from "./material-ui-comps/SnackBar";

function Forget() {
  const [forgotPasswordValues, setForgotPasswordValues] = useState({
    userEmail: "",
  });
  const [open, setOpen] = useState(false);
  const [msgV, setMsg] = useState("");
  const [severity, setSeverity] = useState("error");
  const { isError, isFetching, isSuccess, msg } = useSelector(
    (state) => state.forgotPasswordState
  );
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isError) {
      setOpen(true);
      setMsg("User Email is required field");
      dispatch(forgotPasswordStateClear());
    }
    if (isSuccess) {
      setOpen(true);
      setMsg(msg);
      setSeverity("success");
      dispatch(forgotPasswordStateClear());
    }
  }, [isSuccess, isError]);

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setForgotPasswordValues({ ...forgotPasswordValues, [name]: value });
  };
  const onSubmitHandler = () => {
    dispatch(forgotPassword(forgotPasswordValues));
    // setOpen(true);
    // setSeverity("success");
    // setMsg("Email was successfully send check your email to reset your password");
    setForgotPasswordValues({
      ...forgotPasswordValues,
      userEmail: ""
    });
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
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control
                    type="text"
                    name="userEmail"
                    value={forgotPasswordValues.userEmail}
                    onChange={onChangeHandler}
                  />
                </Col>
              </Row>

              <Row className="marginTopRow1234">
                <Col>
                  <Button className="loginbutton" onClick={onSubmitHandler}>
                    {isFetching ? <Loader /> : "Submit"}
                  </Button>
                </Col>
              </Row>
            </Card>
          </div>
        </div>
        <SnackBar open={open} setOpen={setOpen} severity={severity} msg={msgV} />
      </div>
    </>
  );
}
export default Forget;
