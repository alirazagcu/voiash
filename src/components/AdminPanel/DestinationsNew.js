import "../../App.css";
import React, { useEffect, useState } from "react";
import pics from "../../images/house.jpg";
import { Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Multiselect } from "multiselect-react-dropdown";
import { Form, Col, Button, Card, Row } from "react-bootstrap";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import BorderColorRoundedIcon from "@material-ui/icons/BorderColorRounded";
import {
  destinations,
  getAllDestinationsStateClear,
  selectedDestination,
} from "../../store/destinationReducer";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../material-ui-comps/Loader";
import SnackBar from "../material-ui-comps/SnackBar";
import { useHistory } from "react-router-dom";

function DestinationsNew() {
  const divMargin = { margin: "25px 0" };

  const dispatch = useDispatch();
  const history = useHistory();

  const [destinationInputs, setDestinationInputs] = useState({});
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = useState("error");
  const [snackBar, setSnackBar] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const { isError, isFetching, isSuccess, msg, destination } = useSelector(
    (state) => state.destinationState
  );

  useEffect(() => {
    const { name, country, city, direction } = destinationInputs;
    if (name && country && city && direction) {
      setIsDisabled(false);
    } else setIsDisabled(true);
  }, [destinationInputs]);

  useEffect(() => {
    if (isSuccess) {
      setOpen(true);
      setSeverity("success");
      setSnackBar("Your record was successfully updated");
      dispatch(getAllDestinationsStateClear());
    }
    if (isError) {
      setOpen(true);
      setSeverity("error");
      setSnackBar(msg);
      dispatch(getAllDestinationsStateClear());
    }
  }, [isSuccess, isError]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setDestinationInputs({
      ...destinationInputs,
      [name]: value,
    });
  };

  const onUpdateHandler = () => {
    const token = localStorage.getItem("token");
    dispatch(
      destinations({
        type: "add",
        data: { ...destinationInputs, visibility: "ALL" },
        _id: destinationInputs._id,
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
                <Link to="/admin/destinations">
                  <Button>Volver</Button>
                </Link>
              </div>
              <div className="btnfornew">
                <Button
                  className="formarginbtn"
                  disabled={isDisabled}
                  onClick={onUpdateHandler}
                >
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
                value={destinationInputs.name}
                name="name"
                onChange={onChangeHandler}
              />
            </Col>
          </Row>
          <Row className="rowmarn">
            <Col>
              <Form.Label>País</Form.Label>
              <Form.Control
                value={destinationInputs.country}
                name="country"
                onChange={onChangeHandler}
              />
            </Col>
          </Row>
          <Row className="rowmarn">
            <Col>
              <Form.Label>Ciudad</Form.Label>
              <Form.Control
                value={destinationInputs.city}
                name="city"
                onChange={onChangeHandler}
              />
            </Col>
          </Row>
          <Row className="rowmarn">
            <Col>
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                value={destinationInputs.direction}
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
export default DestinationsNew;
