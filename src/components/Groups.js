import React, { useEffect } from "react";
import "../App.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  groupsActions,
  groupsStateClear,
  selectedGroup,
} from "../store/groupReducer";
import { useSelector, useDispatch } from "react-redux";
import Loader from "./material-ui-comps/Loader";
import { isEmpty } from "lodash";

function Groups() {
  const dispatch = useDispatch();
  const { isFetching, responseData } = useSelector(
    (state) => state.groupsState
  );

  console.log("responseData ", responseData);
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(groupsActions({ type: "get", token: token }));
    return () => {
      dispatch(groupsStateClear());
    };
  }, []);

  const groupClickHandler = (row) => {
    dispatch(selectedGroup(row));
  };

  return isFetching ? (
    <div style={{ marginTop: "300px" }}>
      <Loader />
    </div>
  ) : (
    <div className="person">
      <div className="person1">
        {!isEmpty(responseData) &&
          responseData.map((data) => {
            return (
              <Link
                to="/profile/reservations/groups/details"
                className="grouplink"
                key={data._id}
                onClick={() => groupClickHandler(data)}
              >
                <Card
                  style={
                    ({ width: "23rem" },
                    { borderWidth: 3 },
                    { borderColor: "rgba(0,0,0,.06)" })
                  }
                  className="cardbody"
                >
                  <Card.Body>
                    <div className="carddiv">
                      <div>
                        <img
                          src={data.listImage.imageLink}
                          className="cardimage"
                          alt="no image was found"
                        />
                      </div>
                      <div>
                        <h5 className="groupcardtext">{data.name}</h5>
                        <p className="grouppara">
                          {data.paymentDetails} - {data.departureDate} -{" "}
                          {!isEmpty(data.paymentTable)
                            ? data.paymentTable[0].total.soonPayment
                            : ""}{" "}
                          {!isEmpty(data.paymentTable)
                            ? data.paymentTable[0].coin
                            : ""}
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
export default Groups;
