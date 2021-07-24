import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import pics from "../images/party.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  experiences,
  experienceStateClear,
  selectedExperience,
} from "../store/experienceReducer";
import { useSelector, useDispatch } from "react-redux";
import Loader from "./material-ui-comps/Loader";
import { isEmpty } from "lodash";

function Option() {
  const dispatch = useDispatch();
  const { isError, isSuccess, responseData } = useSelector(
    (state) => state.experienceState
  );
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

  return isEmpty(responseData) ? (
    <div style={{ marginTop: "300px" }}>
      <Loader />
    </div>
  ) : (
    <div className="App1">
      <div className="grid">
        <div class="row rowwww">
          {!isEmpty(responseData) &&
            responseData.map((exp) => {
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
      </div>
    </div>
  );
}

export default Option;
