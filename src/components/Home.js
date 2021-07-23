import React, { useEffect, useState } from "react";
import "../App.css";
import { Col, Card, Row, Container, Carousel } from "react-bootstrap";
import video from "../images/sildervideo.mp4";
import pics from "../images/house.jpg";
import pic2 from "../images/bech.jfif";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import {
  experiences,
  experienceStateClear,
  selectedExperience,
} from "../store/experienceReducer";
import { useSelector, useDispatch } from "react-redux";
import Loader from "./material-ui-comps/Loader";
import SnackBar from "./material-ui-comps/SnackBar";
import { isEmpty } from "lodash";

function Home() {
  const dispatch = useDispatch();
  const { isError, isFetching, isSuccess, msg, responseData } = useSelector(
    (state) => state.experienceState
  );
  const [open, setOpen] = React.useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(experiences({ type: "get", token: token }));
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(experienceStateClear());
    }
    if (isError) {
      setOpen(true);
      dispatch(experienceStateClear());
    }
  }, [isSuccess, isError]);

  useEffect(() => {
    if (!isEmpty(responseData)) {
      let totalAmount1 = 0;
      responseData.map((price) => {
        price.prices.map((data) => {
          if (data.amount) {
            totalAmount1 += parseInt(data.amount);
          }
        });
      });
      setTotalAmount(totalAmount1);
    }
  }, [responseData]);

  const experienceClickHandler = (row) => {
    dispatch(selectedExperience(row));
  };

  return (
    <>
      <Navbar />
      <div className="App1">
        <div className="slider1">
          <Carousel nextIcon="" prevIcon="" prevLabel="" nextLabel="">
            <Carousel.Item>
              <video className="slider" autoPlay muted loop id="myVideo">
                {/* <source src={video} type="video/mp4" /> */}
              </video>
              {/* <img className="slider" src={pics} /> */}
              <Carousel.Caption>
                <Link className="btnlink" to="/selection/adventuretrip">
                  {" "}
                  <button className="button" id="myBtn">
                    #ADVENTURETRIP
                  </button>
                </Link>
                <Link className="btnlink" to="/selection/experiencies">
                  {" "}
                  <button className="button" id="myBtn">
                    #EXPERIENCIAS
                  </button>
                </Link>
                <Link className="btnlink" to="/selection/senses">
                  {" "}
                  <button className="button" id="myBtn">
                    #SENSES
                  </button>
                </Link>
                <Link className="btnlink" to="/selection/localfriend">
                  {" "}
                  <button className="button" id="myBtn">
                    #LOCALFRIEND
                  </button>
                </Link>
                <Link className="btnlink" to="/selection/theweek">
                  {" "}
                  <button className="button" id="myBtn">
                    #THEWEEK
                  </button>
                </Link>
                <Link className="btnlink" to="/selection/discovery">
                  {" "}
                  <button className="button" id="myBtn">
                    #DISCOVERY
                  </button>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="setheight">
          <h3 className="text">Experiencias</h3>
          <div className="vertodas">
            <Link to="/selection/experiencies">
              <button>Ver todas</button>
            </Link>
          </div>
        </div>
        {isEmpty(responseData) ? (
          <div style={{ marginTop: "300px" }}>
            <Loader />
          </div>
        ) : (
          <div className="grid">
            <div class="row rowwww">
              {!isEmpty(responseData) &&
                responseData.slice(0, 4).map((exp) => {
                  return (
                    <div
                      class="col-sm-6 col-xs-12 col-md-3 col-lg-3 columy"
                      key={exp._id}
                    >
                      <Link
                        to="/experiencies1"
                        onClick={() => experienceClickHandler(exp)}
                      >
                        <Card
                          className="columy1"
                          border="secondary"
                          border-radius="50"
                        >
                          <img
                            src={exp.listImage.imageLink || pics}
                            className="bgimage"
                          />
                          <div class="textforcard">
                            <Card.Body>
                              <Card.Title> {exp.name}</Card.Title>
                              <Card.Text>5 horas</Card.Text>
                              <div class="textforcard1">
                                <Card.Title>
                                  Desde: {totalAmount} {exp.prices[0].coin}
                                </Card.Title>
                                <Card.Text>
                                  todo incluido por persona, precio total.
                                </Card.Text>
                              </div>
                            </Card.Body>
                          </div>
                        </Card>
                      </Link>
                    </div>
                  );
                })}
            </div>
            <Link className="moreExperiences" to="/selection/experiencies">
              Ver más experiencias
            </Link>
          </div>
        )}
        <SnackBar open={open} setOpen={setOpen} severity="error" msg={msg} />
      </div>
    </>
  );
}

export default Home;
