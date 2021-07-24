import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from "@material-ui/core/TableContainer";
import "../../App.css";
import Popup from "reactjs-popup";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { Form, Col, Button, Card, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import {
  insuranceAction,
  insuranceStateClear,
} from "../../store/insuranceReducer";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../material-ui-comps/Loader";
import SnackBar from "../material-ui-comps/SnackBar";
import { isEmpty } from "lodash";

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
    borderRadius: 8,
    boxShadowTop: 2,
    flexGrow: 1,
    boxShodowColor: "red",
  },
  table1: {
    borderRadius: 8,
    boxShadow: "1px 1px 5px 1px gray",
  },
  header: {
    fontSize: 50,
    fontWieght: "bold",
    color: "black",
  },
});
function InsurancesNew() {
  const dispatch = useDispatch();
  const classes = useStyles2();
  const { isError, isFetching, isSuccess, msg } = useSelector(
    (state) => state.insuranceState
  );

  const [stateValues, setStateValues] = useState({
    name: "",
    prices: [],
    description: "",
    contractInPdf: { contractLink: "testing" },
    payLimitInHour: 0,
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = useState("error");
  const [snackBar, setSnackBar] = useState("");
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();

  useEffect(() => {
    return () => {
      dispatch(insuranceStateClear());
    };
  }, []);

  useEffect(() => {
    const {
      name,
      prices,
      description,
      contractInPdf,
      payLimitInHour,
    } = stateValues;
    if (
      name &&
      !isEmpty(prices) &&
      description &&
      !isEmpty(contractInPdf) &&
      payLimitInHour
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [stateValues]);

  useEffect(() => {
    if (isSuccess) {
      setOpen(true);
      setSeverity("success");
      setSnackBar("Your record was successfully added");
      dispatch(insuranceStateClear());
      setStateValues({
        name: "",
        prices: [],
        description: "",
        contractInPdf: { contractLink: "testing" },
        payLimitInHour: 0,
      });
    }
    if (isError) {
      setOpen(true);
      setSeverity("error");
      setSnackBar(msg);
      dispatch(insuranceStateClear());
    }
  }, [isSuccess, isError]);

  const onSubmitHandler = () => {
    const token = localStorage.getItem("token");
    dispatch(
      insuranceAction({
        type: "add",
        data: { ...stateValues, visibility: "ALL" },
        token: token,
      })
    );
  };

  const add = (e) => {
    e.preventDefault();
    let row = {
      _id: uuidv4(),
      country: first,
      coin: second,
      amount: 0.0,
      enable: false,
    };
    let newStateArray = [...stateValues.prices];
    newStateArray.push(row);
    setStateValues({ ...stateValues, prices: newStateArray });
  };

  const onChecboxChangeHandler = (e, id) => {
    const checked = e.target.checked;
    const updatedStateValues =
      stateValues.prices &&
      stateValues.prices.map((value) => {
        if (value._id === id) {
          return { ...value, enable: checked };
        }
        return value;
      });
    setStateValues({ ...stateValues, prices: updatedStateValues });
  };

  const onTableValueChangeHandler = (e, id) => {
    const { name, value } = e.target;
    const updatedStateValues =
      stateValues.prices &&
      stateValues.prices.map((value1) => {
        if (value1._id === id) {
          return { ...value1, [name]: value };
        }
        return value;
      });
    setStateValues({ ...stateValues, prices: updatedStateValues });
  };

  const remove = (a) => {
    a.preventDefault();
    const { prices } = stateValues;
    const selectedItem = prices.filter((price) => price.enable !== true);
    setStateValues({ ...stateValues, prices: selectedItem });
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setStateValues({ ...stateValues, [name]: value });
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
                <Link to="/admin/insurances">
                  <Button>Volver</Button>
                </Link>
              </div>
              <div className="btnfornew">
                <Button
                  disabled={isDisabled}
                  className="formarginbtn"
                  onClick={onSubmitHandler}
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
                name="name"
                value={stateValues.name}
                onChange={onChangeHandler}
              />
              <Form.Label className="rowmarn12345">Precios</Form.Label>
            </Col>
          </Row>
          <Row className="marginbootm">
            <Col className="tablebutton">
              <Button className="tableaddbutton" onClick={remove}>
                Eliminar
              </Button>
              <Popup
                trigger={
                  <Button className="tableaddbutton">Nueva Fecha</Button>
                }
                position="bottom right"
              >
                <Card
                  style={
                    ({ width: "26rem" },
                    { borderWidth: 3 },
                    { borderColor: "rgb(238, 91, 46)" })
                  }
                >
                  <div className="popupdiv">
                    <Row className="rowmarn">
                      <Col>
                        <Form.Label>País</Form.Label>
                        <Form.Control
                          as="select"
                          onChange={(e) => setFirst(e.target.value)}
                        >
                          <option>México</option>
                          <option>España</option>
                          <option>Estados Unidos</option>
                        </Form.Control>
                      </Col>
                      <Col>
                        <Form.Label>Moneda</Form.Label>
                        <Form.Control
                          as="select"
                          onChange={(e) => setSecond(e.target.value)}
                        >
                          <option>MXN</option>
                          <option>EUR</option>
                          <option>USD</option>
                        </Form.Control>
                      </Col>
                    </Row>
                    <div className="rightbutton">
                      <button className="buttonmodel1" onClick={add}>
                        Agregar
                      </button>
                    </div>
                  </div>
                </Card>
              </Popup>
            </Col>
          </Row>
          <Row className="rowmarn123">
            <TableContainer component={Paper} className={classes.table1}>
              <Table
                size="small"
                className={classes.table}
                id="table"
                aria-label="custom pagination table"
              >
                <TableHead className="header">
                  <TableRow>
                    <TableCell className="collspan"></TableCell>
                    <TableCell className="collspan">País</TableCell>
                    <TableCell className="collspan">Moneda</TableCell>
                    <TableCell className="collspan">Monto</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {stateValues.prices &&
                    stateValues.prices.map((row, a) => (
                      <TableRow>
                        <TableCell className="inputintable3">
                          <input
                            class="select"
                            type="checkbox"
                            checked={row.enable}
                            onChange={(e) => onChecboxChangeHandler(e, row._id)}
                          />
                        </TableCell>
                        <TableCell>
                          <Form.Control
                            className="inputintable"
                            value={row.country}
                            name="country"
                            type="text"
                            onChange={(e) =>
                              onTableValueChangeHandler(e, row._id)
                            }
                          />
                        </TableCell>

                        <TableCell>
                          <Form.Control
                            className="inputintable"
                            value={row.coin}
                            name="coin"
                            type="text"
                            onChange={(e) =>
                              onTableValueChangeHandler(e, row._id)
                            }
                          />
                        </TableCell>

                        <TableCell>
                          <Form.Control
                            className="inputintable"
                            value={row.amount}
                            name="amount"
                            type="text"
                            onChange={(e) =>
                              onTableValueChangeHandler(e, row._id)
                            }
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Row>
          <Row className="rowmarn">
            <Col>
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                aria-label="With textarea"
                name="description"
                value={stateValues.description}
                onChange={onChangeHandler}
              />
            </Col>
          </Row>
          <Row className="rowmarn">
            <Col>
              <Form.Label>Límite de tiempo para pagar en horas</Form.Label>
              <Form.Control
                type="number"
                name="payLimitInHour"
                value={stateValues.payLimitInHour}
                onChange={onChangeHandler}
              />
            </Col>
          </Row>
          {/* <Row className="rowmarn">
            <Col className="image-upload12">
              <Form.Label>PDF</Form.Label>
              <label for="file-input" className="newclass">
                <p className="paragrapinput"> </p>
              </label>
              <input id="file-input" type="file" />
            </Col>
          </Row> */}
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
export default InsurancesNew;
