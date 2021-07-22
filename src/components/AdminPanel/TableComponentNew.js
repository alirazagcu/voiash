import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from "@material-ui/core/TableContainer";
import "../../App.css";
import Paper from "@material-ui/core/Paper";
import { Button, Form, Row, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { isEmpty } from "lodash";
import { selectedExperience } from "../../store/experienceReducer";

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

export default function MyTableNew({
  stateValues,
  setStateValues,
  selectExpPrices,
  defaultPaymentTableValues = {},
}) {
  const classes = useStyles2();
  const [paymentTable, setPaymentTable] = useState(defaultPaymentTableValues);
  const [date, setDate] = useState(
    defaultPaymentTableValues && !isEmpty(defaultPaymentTableValues.date)
      ? defaultPaymentTableValues.date
      : []
  );
  const [total, setTotal] = useState({
    soonPayment: "",
    normalPayment: "",
  });

  useEffect(() => {
    setStateValues({
      ...stateValues,
      paymentTable: [paymentTable],
    });
  }, [paymentTable, paymentTable.data && paymentTable.data.length]);

  useEffect(() => {
    if (!isEmpty(date) && !isEmpty(total)) {
      setPaymentTable({
        ...paymentTable,
        date: date,
        total: total,
      });
    }
  }, [date, date.length, total]);

  useEffect(() => {
    if (!isEmpty(selectExpPrices)) {
      let totalAmount = 0;
      selectExpPrices.map((price) => {
        price.prices.map((data) => {
          if (data.amount) {
            totalAmount += parseInt(data.amount);
          }
        });
      });
      setPaymentTable({
        ...paymentTable,
        costOfExperiences: totalAmount,
      });
    }
  }, [selectExpPrices && selectExpPrices.length]);

  useEffect(() => {
    if (!isEmpty(date)) {
      let totalSoonPayment = 0;
      let totalNormalPayment = 0;
      date.map((dateValue) => {
        totalSoonPayment += dateValue.soonPayment;
        totalNormalPayment += dateValue.normalPayment;
      });
      setTotal({
        ...total,
        soonPayment: totalSoonPayment,
        normalPayment: totalNormalPayment,
      });
    }
  }, [!isEmpty(date) && date.length, date]);

  const add = (e) => {
    e.preventDefault();
    let row = {
      _id: uuidv4(),
      date: "",
      soonPayment: 0,
      normalPayment: 0,
      enable: false,
    };
    let newStateArray = [...date];
    newStateArray.push(row);
    setDate(newStateArray);
  };

  const remove = (a) => {
    a.preventDefault();
    const filteredDate = date.filter((item) => item.enable !== true);
    setDate(filteredDate);
  };

  const onPaymentChangeHandler = (e) => {
    const { name, value } = e.target;
    setPaymentTable({
      ...paymentTable,
      [name]: parseInt(value),
    });
  };

  const onChangeHandlerMain = (e) => {
    const { name, value } = e.target;
    setPaymentTable({
      ...paymentTable,
      [name]: value,
    });
  };
  const onChecboxChangeHandler = (e, id) => {
    const checked = e.target.checked;
    const updatedDate =
      date &&
      date.map((value) => {
        if (value._id === id) {
          return { ...value, enable: checked };
        }
        return value;
      });
    setDate(updatedDate);
  };

  const onChangeHandler = (e, id) => {
    const { name, value } = e.target;
    const updatedDate =
      date &&
      date.map((value1) => {
        if (value1._id === id) {
          return {
            ...value1,
            [name]: name === "date" ? value : parseInt(value),
          };
        }
        return value1;
      });
    setDate(updatedDate);
  };

  return (
    <div className="grouptable">
      <Row className="marginbootm">
        <Col className="tablebutton">
          <Button className="tableaddbutton" onClick={remove}>
            Eliminar
          </Button>
          <Button className="tableaddbutton" onClick={add}>
            Nueva Fecha
          </Button>
        </Col>
      </Row>

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
              <TableCell className="collspan">Fecha</TableCell>
              <TableCell className="collspan">Pronto Pago MXN</TableCell>
              <TableCell className="collspan">Pago Normal MXN</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {date.map((row, a) => (
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
                    type="date"
                    name="date"
                    value={row.date ? row.date.split("T")[0] : ""}
                    onChange={(e) => onChangeHandler(e, row._id)}
                  />
                </TableCell>

                <TableCell>
                  <Form.Control
                    className="inputintable"
                    type="number"
                    name="soonPayment"
                    value={row.soonPayment ? row.soonPayment : ""}
                    onChange={(e) => onChangeHandler(e, row._id)}
                  />
                </TableCell>

                <TableCell>
                  <Form.Control
                    className="inputintable"
                    type="number"
                    name="normalPayment"
                    value={row.normalPayment ? row.normalPayment : ""}
                    onChange={(e) => onChangeHandler(e, row._id)}
                  />
                </TableCell>
              </TableRow>
            ))}
            <TableRow className={classes.header}>
              <TableCell className="collspan"></TableCell>
              <TableCell className="collspan">Total:</TableCell>
              <TableCell className="collspan">
                {total.soonPayment ? total.soonPayment : ""}
              </TableCell>
              <TableCell className="collspan">
                {total.normalPayment ? total.normalPayment : ""}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <div className="tabletext">
        <p className="tabletext1">
          Costo experiencias incluidas:{" "}
          <p className="tabletext11">{paymentTable.costOfExperiences}</p>
        </p>

        <p className="tabletext1">
          Descuento pronto pago:{" "}
          <Form.Control
            type="number"
            defaultValue="0"
            name="earlyPaymentDiscount"
            value={
              paymentTable.earlyPaymentDiscount
                ? paymentTable.earlyPaymentDiscount
                : ""
            }
            onChange={onPaymentChangeHandler}
          />
        </p>
        <p className="tabletext1">
          Descuento pago normal:
          <Form.Control
            type="number"
            defaultValue="0"
            name="normalPaymentDiscount"
            value={
              paymentTable.normalPaymentDiscount
                ? paymentTable.normalPaymentDiscount
                : ""
            }
            onChange={onPaymentChangeHandler}
          />
        </p>
        <p className="tabletext1">
          identificación de pago:{" "}
          <Form.Control
            type="text"
            name="installmentId"
            value={paymentTable.installmentId ? paymentTable.installmentId : ""}
            onChange={onChangeHandlerMain}
          />
        </p>
        <p className="tabletext1">
          país:
          <Form.Control
            type="text"
            name="country"
            value={paymentTable.country ? paymentTable.country : ""}
            onChange={onChangeHandlerMain}
          />
        </p>
        <p className="tabletext1">
          divisa:{" "}
          <Form.Control
            type="text"
            name="coin"
            value={paymentTable.coin ? paymentTable.coin : ""}
            onChange={onChangeHandlerMain}
          />
        </p>
      </div>
    </div>
  );
}
