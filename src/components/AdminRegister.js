import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import background from "../images/bg.jpg";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoogleLogin } from "react-google-login";
import FacebookIcon from "@material-ui/icons/Facebook";
import googleIcon from "../assests/google.svg";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import { adminSignUp, adminStateClear } from "../store/adminSignUpReducer";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Loader from "./material-ui-comps/Loader";
import SnackBar from "./material-ui-comps/SnackBar";
import {BASE_URL} from "../store/constant";

function Register() {
  const [signUpValues, setSignUpValues] = useState({
    userEmail: "",
    userPassword: "",
    reUserPassword: "",
  });
  const [open, setOpen] = React.useState(false);
  const { isError, isFetching, isSuccess, msg } = useSelector(
    (state) => state.adminSignUpStat
  );
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isError) {
      setOpen(true);
      dispatch(adminStateClear());
    }
    if (isSuccess) {
      history.push("/login");
      dispatch(adminStateClear());
    }
  }, [isSuccess, isError]);

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setSignUpValues({ ...signUpValues, [name]: value });
  };

  const onSignUpHandler = () => {
    dispatch(adminSignUp(signUpValues));
  };

  return (
    <div className="LoginMain">
      <div className="styles_container__gxc6Z">
        <div className="loginimage">
          <img className="styles_background__14z2nreg" src={background} />
        </div>

        <div className="LoginCard">
          <Card className="cardpadding">
            {/* <Row className="marginTopRow">
            <Col>
             <img src={Logo} className="loginlogo" />
            </Col>
          </Row> */}
            <Row className="marginTopRow">
              <Col>
                <button className="facebook">
                  <img src={googleIcon} width="30"/>
                  <a
                    style={{ marginLeft: "20px" }}
                    href={`${BASE_URL}google`}
                  >
                    Sign in with google
                  </a>
                </button>
              </Col>
            </Row>
            <Row className="marginTopRow12">
              <Col>
                <button className="facebook">
                  <FacebookIcon className="facebook1" />
                  <a
                    style={{ marginLeft: "20px" }}
                    href={`${BASE_URL}facebook`}
                  >
                    Sign in with Facebook
                  </a>
                </button>
              </Col>
            </Row>
            <Row className="marginTopRow">
              <Col>
                <hr className="rowwidth" />
              </Col>
            </Row>

            <Row className="marginTopRow123">
              <Col>
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  type="email"
                  name="userEmail"
                  onChange={onChangeHandler}
                />
              </Col>
            </Row>
            <Row className="marginTopRow123">
              <Col>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="userPassword"
                  onChange={onChangeHandler}
                />
              </Col>
            </Row>
            <Row className="marginTopRow123">
              <Col>
                <Form.Label>Confirmación de contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="reUserPassword"
                  onChange={onChangeHandler}
                />
              </Col>
            </Row>
            <Row className="marginTopRow1235">
              <Col>
                <Link className="marginTopRow12345">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Col>
            </Row>
            <Row className="marginTopRow123reg">
              <Col>
                <Form.Check
                  type="checkbox"
                  id="customControlInline"
                  label="He leido y acepto la politica de privacidad"
                  custom
                />
              </Col>
            </Row>
            <Row className="marginTopRow1234">
              <Col>
                <Button className="loginbutton" onClick={onSignUpHandler}>
                  {isFetching ? <Loader /> : "Regístrate"}
                </Button>
              </Col>
            </Row>
            <Row className="marginTopRow123456">
              <Col>
                <Link to="/login" className="marginTopRow12345">
                  ¿Ya tienes cuenta?<p className="register">Inicia Sesión</p>
                </Link>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
      <SnackBar open={open} setOpen={setOpen} severity="error" msg={msg} />
    </div>
  );
}
export default Register;
