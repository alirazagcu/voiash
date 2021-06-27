import React, { useState, useEffect } from "react";
import { has } from "lodash";
import "./Navbar.css";
import { Link } from "react-router-dom";
import background from "../images/bg.jpg";
import Logo from "../images/logo.png";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoogleLogin } from "react-google-login";
import FacebookIcon from "@material-ui/icons/Facebook";
import { signUp, stateClear } from "../store/SignUpReducer";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Loader from "./material-ui-comps/Loader";
import SnackBar from "./material-ui-comps/SnackBar";
import Navbar from "./Navbar";
import validator from 'validator';

function Register() {
  const [signUpValues, setSignUpValues] = useState({
    userEmail: "",
    userPassword: "",
    reUserPassword: "",
    isChecked: false
  });
  const [open, setOpen] = useState(false);
  const [signupToggle, setSignupToggle] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const { isError, isFetching, isSuccess, msg } = useSelector(
    (state) => state.signUpState
  );
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isError) {
      setOpen(true);
      dispatch(stateClear());
    }
    if (isSuccess) {
      history.push("/login");
      dispatch(stateClear());
    }
  }, [isSuccess, isError]);

  useEffect(() =>{
    const { userEmail, userPassword, reUserPassword } = signUpValues
    if (userEmail &&  userPassword && reUserPassword && isChecked) {
      setSignupToggle(false);
    }
    else setSignupToggle(true);
  }, [signUpValues, isChecked])

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setSignUpValues({ ...signUpValues, [name]: value });
  };

  const onSignUpHandler = () => {
    dispatch(signUp(signUpValues));
  };

  const onCheckHandler = () => {
    setIsChecked(!isChecked);
  }


  return (
    <>
      <Navbar />
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
                  <GoogleLogin
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    buttonText="Sign in with Google"
                    className="google"
                  />
                </Col>
              </Row>
              <Row className="marginTopRow12">
                <Col>
                  <button className="facebook">
                    <FacebookIcon className="facebook1" />
                    <p className="text12">Sign in with Facebook</p>
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
                    required={true}
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
                    required={true}
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
                    required={true}
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
                    onChange={onCheckHandler}
                    checked={isChecked}
                    custom
                  />
                </Col>
              </Row>
              <Row className="marginTopRow1234">
                <Col>
                  <Button 
                  className="loginbutton" 
                  onClick={onSignUpHandler}
                  disabled={signupToggle}
                  >
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
    </>
  );
}
export default Register;
