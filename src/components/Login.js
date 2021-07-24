import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import background from "../images/bg.jpg";
import Logo from "../images/logo.png";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoogleLogin } from "react-google-login";
import FacebookIcon from "@material-ui/icons/Facebook";
import { signIn, stateClear } from "../store/signInReducer";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Loader from "./material-ui-comps/Loader";
import SnackBar from "./material-ui-comps/SnackBar";
import Navbar from "./Navbar";

function Login() {
  const [signInValues, setSignInValues] = useState({
    userEmail: "",
    userPassword: "",
  });
  const [submitToggle, setSubmitToggle] = useState(true);

  const [open, setOpen] = React.useState(false);
  const { isError, isFetching, isSuccess, msg } = useSelector(
    (state) => state.loginState
  );
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isError) {
      setOpen(true);
      dispatch(stateClear());
    }
    if (isSuccess) {
      const isAdmin = localStorage.getItem("isAdmin");
      if(isAdmin == "true"){
        history.push("/admin");
      }
      else{
      history.push("/home");}
      dispatch(stateClear());
    }
  }, [isSuccess, isError]);

  useEffect(()=>{
    if(signInValues.userEmail && signInValues.userPassword){
      setSubmitToggle(false);
    }
    else{
      setSubmitToggle(true);
    }
  },[signInValues])

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setSignInValues({ ...signInValues, [name]: value });
  };

  const onLoginHandler = () => {
    dispatch(signIn(signInValues));
  };

  return (
    <>
      <Navbar />
      <div className="LoginMain">
        <div className="styles_container__gxc6Z">
          <div className="loginimage">
            <img className="styles_background__14z2n" src={background} />
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
                    placeholder="Enter email"
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
                    placeholder="Enter Password"
                    name="userPassword"
                    onChange={onChangeHandler}
                  />
                </Col>
              </Row>
              <Row className="marginTopRow1235">
                <Col>
                  <Link to="/forget" className="marginTopRow12345">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </Col>
              </Row>
              {/* <Row  className="marginTopRow123">
              <Col>
              <Form.Check type="checkbox" label="Check me out" />
                  </Col>
            </Row> */}
              <Row className="marginTopRow1234">
                <Col>
                  <Button className="loginbutton" disabled={submitToggle} onClick={onLoginHandler}>
                    {isFetching ? <Loader /> : "Iniciar"}
                  </Button>
                </Col>
              </Row>
              <Row className="marginTopRow123456">
                <Col>
                  <Link to="/register" className="marginTopRow12345">
                    ¿Aún no tienes cuenta?{" "}
                    <p className="register">Regístrate</p>
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
export default Login;
