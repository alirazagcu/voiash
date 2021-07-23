import React, { useState, useEffect } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import { Form, Col, Button, Card, Row } from "react-bootstrap";
import {
  hotels,
  getAllHoteslsStateClear,
} from "../../store/hotelsReducer";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../material-ui-comps/Loader";
import SnackBar from "../material-ui-comps/SnackBar";

function HotelsNew() {
  const dispatch = useDispatch();

  const [hotelInputs, setHotelInputs] = useState({});
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = useState("error");
  const [snackBar, setSnackBar] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const { isError, isFetching, isSuccess, msg } = useSelector(
    (state) => state.hotelsState
  );

  useEffect(() => {
    const { name, country, city, direction } = hotelInputs;
    if (name && country && city && direction) {
      setIsDisabled(false);
    } else setIsDisabled(true);
  }, [hotelInputs]);

  useEffect(() => {
    if (isSuccess) {
      setOpen(true);
      setSeverity("success");
      setSnackBar("Your record was successfully updated");
      dispatch(getAllHoteslsStateClear());
    }
    if (isError) {
      setOpen(true);
      setSeverity("error");
      setSnackBar(msg);
      dispatch(getAllHoteslsStateClear());
    }
  }, [isSuccess, isError]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setHotelInputs({
      ...hotelInputs,
      [name]: value,
    });
  };

  const onUpdateHandler = () => {
    const token = localStorage.getItem("token");
    dispatch(
      hotels({
        type: "add",
        data: { ...hotelInputs, visibility: "ALL" },
        _id: hotelInputs._id,
        token: token,
      })
    );
  };

  return (
    <Card
      style={
        ({ width: "23rem" },
        { borderWidth: 3 },
        { borderColor: "rgb(238, 91, 46)" })
      }
    >
      <Card.Body>
        <Form>
          <Row className="rowmarn">
            <Col className="firstbtn">
              <div className="firstbtn1">
                <Link to="/admin/hotels">
                  <Button>Volver</Button>
                </Link>
              </div>
              <div className="btnfornew" onClick={onUpdateHandler}>
                <Button className="formarginbtn" disabled={isDisabled}>
                  {isFetching ? <Loader /> : "Guardar"}
                </Button>
              </div>
            </Col>
          </Row>
          <hr />
          <Row className="rowmarn">
            <Col>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                value={hotelInputs.name}
                name="name"
                onChange={onChangeHandler}
              />
            </Col>
          </Row>
          <Row className="rowmarn">
            <Col>
              <Form.Label>País</Form.Label>
              <Form.Control
                value={hotelInputs.country}
                name="country"
                onChange={onChangeHandler}
              />
            </Col>
          </Row>
          <Row className="rowmarn">
            <Col>
              <Form.Label>Ciudad</Form.Label>
              <Form.Control
                value={hotelInputs.city}
                name="city"
                onChange={onChangeHandler}
              />
            </Col>
          </Row>
          <Row className="rowmarn">
            <Col>
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                value={hotelInputs.direction}
                name="direction"
                onChange={onChangeHandler}
              />
            </Col>
          </Row>
        </Form>
      </Card.Body>
      <SnackBar
        open={open}
        setOpen={setOpen}
        severity={severity}
        msg={snackBar}
      />
    </Card>
  );
}
export default HotelsNew;
