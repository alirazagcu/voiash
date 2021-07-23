import React from "react";
import "../App.css";
import { Carousel } from "react-bootstrap";
import pics from "../images/cover.jpg";
import Option from "./Option";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Navbar";
function Selection() {
  return (
    <>
      <NavBar />
      <div className="App1">
        <div className="sliders1">
          <Carousel nextIcon="" prevIcon="" prevLabel="" nextLabel="">
            <Carousel.Item>
              <img className="sliders" src={pics} alt="img was not found"/>
            </Carousel.Item>
          </Carousel>
        </div>
        <div>
          <Link className="btnlink" to="/selection/adventuretrip">
            {" "}
            <button className="buttons" id="myBtn">
              ADVENTURETRIP
            </button>
          </Link>
          <Link className="btnlink" to="/selection/experiencies">
            {" "}
            <button className="buttons" id="myBtn">
              EXPERIENCIAS
            </button>
          </Link>
          <Link className="btnlink" to="/selection/senses">
            {" "}
            <button className="buttons" id="myBtn">
              SENSES
            </button>
          </Link>
          <Link className="btnlink" to="/selection/localfriend">
            {" "}
            <button className="buttons" id="myBtn">
              LOCALFRIEND
            </button>
          </Link>
          <Link className="btnlink" to="/selection/theweek">
            {" "}
            <button className="buttons" id="myBtn">
              THEWEEK
            </button>
          </Link>
          <Link className="btnlink" to="/selection/discovery">
            {" "}
            <button className="buttons" id="myBtn">
              DISCOVERY
            </button>
          </Link>
        </div>
        <Option />
      </div>
    </>
  );
}

export default Selection;
