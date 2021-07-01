import React, { useEffect, useState } from "react";
import "../App.css";
import { Form, Col, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userDetail, userDetailStateClear } from "../store/userDetailReducer";
import Loader from "./material-ui-comps/Loader";
import SnackBar from "./material-ui-comps/SnackBar";

function Location() {
  const [locationDetail, setLocationDetail] = useState({
    country: "",
    city: "",
    colony: "",
    street: "",
    houseno: 0,
    apartmentno: 0,
    postalCode: "",
  });
  const [snackBarMsg, setSnackBarMsg] = useState("");
  const [severity, setSeverity] = useState("error");
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const { isError, isFetching, isSuccess, msg, responseData } = useSelector(
    (state) => state.userDetailState
  );

  useEffect(() => {
    if (responseData) {
      const { location } = responseData;
      setLocationDetail({ ...location });
    }
  }, [responseData]);

  useEffect(() => {
    dispatch(userDetailStateClear());
  }, []);

  useEffect(() => {
    if (msg) {
      setSnackBarMsg(msg);
    }
    if (isError) {
      setOpen(true);
      setSeverity("error");
      dispatch(userDetailStateClear());
    }
    if (isSuccess) {
      setOpen(true);
      setSeverity("success");
      setSnackBarMsg("User detail was succesfully updated");
      dispatch(userDetailStateClear());
    }
  }, [isSuccess, isError, msg]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setLocationDetail({ ...locationDetail, [name]: value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const updateResponseData = {
      location: locationDetail,
    };
    dispatch(
      userDetail({
        _id: updateResponseData.userId,
        token,
        type: "post",
        updateResponseData: updateResponseData,
      })
    );
  };
  return (
    <div className="person">
      <div className="person1">
        <Card
          style={
            ({ width: "23rem" },
            { borderWidth: 3 },
            { borderColor: "rgb(238, 91, 46)" })
          }
        >
          <Card.Body>
            <div className="personaltext">
              <h3>Ubicación</h3>
            </div>
            <Form className="form1">
              <div className="form2">
                <Form.Group
                  className="form3"
                  as={Col}
                  controlId="formGridEmail"
                >
                  <Form.Label>País</Form.Label>
                  <Form.Control
                    value={locationDetail.country}
                    name="country"
                    onChange={onChangeHandler}
                  />
                </Form.Group>
                <Form.Group
                  className="form4"
                  as={Col}
                  controlId="formGridPassword"
                >
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control
                    value={locationDetail.city}
                    name="city"
                    onChange={onChangeHandler}
                  />
                </Form.Group>
              </div>
              <div className="form2">
                <Form.Group
                  className="form3"
                  as={Col}
                  controlId="formGridEmail"
                >
                  <Form.Label>Colonia o Provincia</Form.Label>
                  <Form.Control
                    value={locationDetail.colony}
                    name="colony"
                    onChange={onChangeHandler}
                  />
                </Form.Group>
                <Form.Group
                  className="form4"
                  as={Col}
                  controlId="formGridPassword"
                >
                  <Form.Label>Calle</Form.Label>
                  <Form.Control
                    value={locationDetail.street}
                    name="street"
                    onChange={onChangeHandler}
                  />
                </Form.Group>
              </div>
              <div className="form2">
                <Form.Group
                  className="form3"
                  as={Col}
                  controlId="formGridEmail"
                >
                  <Form.Label>No.</Form.Label>
                  <Form.Control
                    value={locationDetail.houseno}
                    name="houseno"
                    onChange={onChangeHandler}
                  />
                </Form.Group>
                <Form.Group
                  className="form4"
                  as={Col}
                  controlId="formGridPassword"
                >
                  <Form.Label>Int.</Form.Label>
                  <Form.Control
                    value={locationDetail.apartmentno}
                    name="apartmentno"
                    onChange={onChangeHandler}
                  />
                </Form.Group>
              </div>
              <div className="form2">
                <Form.Group
                  className="form3"
                  as={Col}
                  controlId="formGridEmail"
                >
                  <Form.Label>Código Postal</Form.Label>
                  <Form.Control
                    value={locationDetail.postalCode}
                    name="postalCode"
                    onChange={onChangeHandler}
                  />
                </Form.Group>
                <Form.Group
                  className="form4"
                  as={Col}
                  controlId="formGridEmail"
                ></Form.Group>
              </div>
              <Form.Group className="form5" as={Col} controlId="formGridEmail">
                <button
                  className="buttonform"
                  variant="primary"
                  onClick={onSubmitHandler}
                >
                  {isFetching ? <Loader /> : "Continuar"}
                </button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </div>
      <SnackBar
        open={open}
        setOpen={setOpen}
        severity={severity}
        msg={snackBarMsg}
      />
    </div>
  );
}

export default Location;
