import React from 'react';
import '../App.css';
import { Col, Card, Row, Container, Carousel } from 'react-bootstrap'
import video from '../images/sildervideo.mp4'   
import pics from '../images/house.jpg';
import pic2 from '../images/bech.jfif';  
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {

    return (
        <div className="App1">
            <div className="slider1">
                <Carousel nextIcon="" prevIcon="" prevLabel="" nextLabel="" >
                    <Carousel.Item>
                      <video className="slider" autoPlay muted loop id="myVideo">
                            <source src={video} type="video/mp4" />
                        </video>   
                        {/* <img className="slider" src={pics} /> */}
                        <Carousel.Caption>
                        <Link className="btnlink" to="/selection/adventuretrip"> <button  className="button" id="myBtn" >#ADVENTURETRIP</button></Link>
                        <Link className="btnlink" to="/selection/experiencies">  <button className="button" id="myBtn" >#EXPERIENCIAS</button></Link>
                        <Link className="btnlink" to="/selection/senses">  <button className="button" id="myBtn" >#SENSES</button></Link>
                        <Link className="btnlink" to="/selection/localfriend">  <button className="button" id="myBtn" >#LOCALFRIEND</button></Link>
                        <Link className="btnlink" to="/selection/theweek">  <button className="button" id="myBtn" >#THEWEEK</button></Link>
                        <Link className="btnlink" to="/selection/discovery"> <button className="button" id="myBtn" >#DISCOVERY</button></Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>    
            </div>

            <div className="setheight">
                <h3 className="text">Experiencias</h3>
                <div className="vertodas">
                    <Link to="/selection/experiencies"><button>Ver todas</button></Link>
                </div>
            </div>
            <div className="grid">
                <div class="row rowwww">
                    
                    <div class="col-sm-6 col-xs-12 col-md-3 col-lg-3 columy">
                    <Link to="/experiencies1">
                        <Card className="columy1" border="secondary" border-radius="50">
                        <img src={pics} className="bgimage"/>
                            <div class="textforcard">
                                <Card.Body>
                                    <Card.Title> Mandala Disco Bottle Service (Diamond)</Card.Title>
                                    <Card.Text>
                                        5 horas
                         </Card.Text>
                                    <div class="textforcard1">
                                        <Card.Title>Desde: 55.00 USD</Card.Title>
                                        <Card.Text>
                                            todo incluido por persona, precio total.
                         </Card.Text>
                                    </div>
                                </Card.Body>
                            </div>
                        </Card></Link></div>
                        <div class="col-sm-6 col-xs-12 col-md-3 col-lg-3 columy">
                    <Link to="/experiencies1">
                        <Card className="columy1" border="secondary" border-radius="50">
                        <img src={pics} className="bgimage"/>
                            <div class="textforcard">
                                <Card.Body>
                                    <Card.Title> Mandala Disco Bottle Service (Diamond)</Card.Title>
                                    <Card.Text>
                                        5 horas
                         </Card.Text>
                                    <div class="textforcard1">
                                        <Card.Title>Desde: 55.00 USD</Card.Title>
                                        <Card.Text>
                                            todo incluido por persona, precio total.
                         </Card.Text>
                                    </div>
                                </Card.Body>
                            </div>
                        </Card></Link></div>
                        <div class="col-sm-6 col-xs-12 col-md-3 col-lg-3 columy">
                    <Link to="/experiencies1">
                        <Card className="columy1" border="secondary" border-radius="50">
                        <img src={pics} className="bgimage"/>
                            <div class="textforcard">
                                <Card.Body>
                                    <Card.Title> Mandala Disco Bottle Service (Diamond)</Card.Title>
                                    <Card.Text>
                                        5 horas
                         </Card.Text>
                                    <div class="textforcard1">
                                        <Card.Title>Desde: 55.00 USD</Card.Title>
                                        <Card.Text>
                                            todo incluido por persona, precio total.
                         </Card.Text>
                                    </div>
                                </Card.Body>
                            </div>
                        </Card></Link></div>
                        <div class="col-sm-6 col-xs-12 col-md-3 col-lg-3 columy">
                    <Link to="/experiencies1">
                        <Card className="columy1" border="secondary" border-radius="50">
                        <img src={pics} className="bgimage"/>
                            <div class="textforcard">
                                <Card.Body>
                                    <Card.Title> Mandala Disco Bottle Service (Diamond)</Card.Title>
                                    <Card.Text>
                                        5 horas
                         </Card.Text>
                                    <div class="textforcard1">
                                        <Card.Title>Desde: 55.00 USD</Card.Title>
                                        <Card.Text>
                                            todo incluido por persona, precio total.
                         </Card.Text>
                                    </div>
                                </Card.Body>
                            </div>
                        </Card></Link></div>
                          
                </div >
                <Link className="moreExperiences" to="/selection/experiencies">Ver más experiencias</Link>
            </div>
        </div>
    );
}

export default Home;
