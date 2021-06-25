
import './Navbar.css';
import { Link } from 'react-router-dom';
import background from '../images/bg.jpg';
import Logo from '../images/logo.png'
import { Card, Row, Col, Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleLogin } from 'react-google-login';
import FacebookIcon from '@material-ui/icons/Facebook';
function Forget() {
    return (
        <div className="LoginMain">
            <div className="styles_container__gxc6Z">
                <div className="loginimage">
                    <img className="styles_background__14z2nreg" src={background} />
                </div>

                <div className="LoginCard">
                    <Card className="cardpadding" >
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
                                <p className="register">Para recuperar tu constraseña, introduce la dirección de correo electrónico con la que te regístraste.</p>
                            </Col>
                        </Row>
                        <Row className="marginTopRow123">
                            <Col>
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type="text" />
                            </Col>
                        </Row>

                        <Row className="marginTopRow1234">
                            <Col>
                                <Button className="loginbutton">Regístrate</Button>
                            </Col>
                        </Row>

                    </Card>
                </div>

            </div>

        </div>
    );
}
export default Forget;
