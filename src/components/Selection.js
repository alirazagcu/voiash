import React from 'react';
import '../App.css';
import { Col, Card, Row, Container, Carousel } from 'react-bootstrap'
import pics from '../images/cover.jpg';
import Option from './Option';
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function Selection() {

    return (
        <div className="App1">
            <div className="sliders1">
                <Carousel nextIcon="" prevIcon="" prevLabel="" nextLabel="" >
                    <Carousel.Item>
                        <img className="sliders" src={pics} />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
            <Link className="btnlink" to="/selection/adventuretrip"> <button className="buttons" id="myBtn" >ADVENTURETRIP</button></Link>
            <Link className="btnlink" to="/selection/experiencies">  <button className="buttons" id="myBtn" >EXPERIENCIAS</button></Link>
            <Link className="btnlink" to="/selection/senses"> <button className="buttons" id="myBtn" >SENSES</button></Link>
            <Link className="btnlink" to="/selection/localfriend"> <button className="buttons" id="myBtn" >LOCALFRIEND</button></Link>
            <Link className="btnlink" to="/selection/theweek"> <button className="buttons" id="myBtn" >THEWEEK</button></Link>
            <Link className="btnlink" to="/selection/discovery"> <button className="buttons" id="myBtn" >DISCOVERY</button></Link>
                        </div>
                        <Option/>
                        {/* <Router>
                        <Switch>
                            <Route exact path="/adventuretrip" component={Option} />
                            <Route exact path="/experiencies" component={Option} />
                            <Route exact path="/senses" component={Option} />
                            <Route exact path="/localfriend" component={Option} />
                            <Route exact path="/theweek" component={Option} />
                            <Route exact path="/discovery" component={Option} />
                            <Route path="*" component={() => <h2>404 Not Found</h2>} />
                        </Switch> 
             </Router> */}
            {/* <Row >
                    <Col className="columy" xs={12} sm={3}>
                        <div className="pakistan">
           
                    </div>
                        </Col>

                        <Col className="columy" xs={12} sm={3}>abcd
                       </Col>

                        <Col className="columy" xs={12} sm={3}>abcd
                       </Col>

                        <Col className="columy" xs={12} sm={3}>abcd
                       </Col>

                        <Col className="columy" xs={12} sm={3}>abcd
                       </Col>

                        <Col className="columy" xs={12} sm={3}>abcd
                       </Col>

                        <Col className="columy" xs={12} sm={3}>abcd
                      </Col> */}
            {/* <Col className="columy" xs={12} sm={3}>
                        <Card className="columy1">
                        
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                             </Card.Text>
                         
                             <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                             </Card.Text>
                         
                            </Card.Body>
                           
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card></Col> */}


            {/* </Row> */}


        </div>
    );
}

export default Selection;
