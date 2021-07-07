import React, { useEffect, useState } from "react";
import "../../App.css";
import pics from "../../images/house.jpg";
import { Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Multiselect } from "multiselect-react-dropdown";
import { Form, Col, Button, Card, Row } from "react-bootstrap";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import BorderColorRoundedIcon from "@material-ui/icons/BorderColorRounded";
import {
  hotels,
  getAllHoteslsStateClear,
  selectedHotel,
} from "../../store/hotelsReducer";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../material-ui-comps/Loader";
import SnackBar from "../material-ui-comps/SnackBar";

function HotelsUpdate() {
  const divMargin = { margin: "25px 0" };
  const dispatch = useDispatch();
  const history = useHistory();

  const [hotelInputs, setHotelInputs] = useState({});
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = useState("error");
  const [snackBar, setSnackBar] = useState("");
  const [isDelete, setIsDelete] = useState(false);

  const { isError, isFetching, isSuccess, msg, hotel } = useSelector(
    (state) => state.hotelsState
  );

  useEffect(() => {
    if (hotel) setHotelInputs(hotel);
  }, []);

  useEffect(() => {
    if (isSuccess && isDelete) {
      history.push("/admin/hotels");
      setOpen(true);
      setSeverity("success");
      setSnackBar("Your record was successfully deleted");
    }
    if (isSuccess && !isDelete) {
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
    setIsDelete(false);
    const token = localStorage.getItem("token");
    dispatch(
      hotels({
        type: "put",
        data: { ...hotelInputs },
        _id: hotelInputs._id,
        token: token,
      })
    );
  };

  const onDeleteHandler = () => {
    const token = localStorage.getItem("token");
    setIsDelete(true);
    dispatch(hotels({ type: "delete", _id: hotelInputs._id, token: token }));
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
              <div className="btnfornew">
                <Button onClick={onDeleteHandler}>
                  {isFetching && isDelete ? <Loader /> : "Eliminar"}
                </Button>
                <Button className="formarginbtn" onClick={onUpdateHandler}>
                  {isFetching && !isDelete ? <Loader /> : "Guardar"}
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
export default HotelsUpdate;
