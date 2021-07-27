import React, { useState, useEffect } from "react";
import "../App.css";
import { Form, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userDetail, userDetailStateClear } from "../store/userDetailReducer";
import Loader from "./material-ui-comps/Loader";
import SnackBar from "./material-ui-comps/SnackBar";

function Personal() {
  const [personalDetail, setPersonalDetail] = useState({
    firstname: "",
    lastname: "",
    motherlastname: "",
    phone: 0,
    mobile: 0,
    identificationId: "",
    dob: "",
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
      const { personalDetails } = responseData;
      setPersonalDetail({ ...personalDetails });
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
    setPersonalDetail({ ...personalDetail, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const updateResponseData = {
      personalDetails: personalDetail,
      userId: responseData.userId
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
              <h3>Personal</h3>
            </div>
            <Form className="form1">
              <div className="form2">
                <Form.Group
                  className="form3"
                  as={Col}
                  controlId="formGridEmail"
                >
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    value={personalDetail.firstname}
                    name="firstname"
                    onChange={onChangeHandler}
                  />
                </Form.Group>
                <Form.Group
                  className="form4"
                  as={Col}
                  controlId="formGridPassword"
                >
                  <Form.Label>Apellido Paterno</Form.Label>
                  <Form.Control
                    value={personalDetail.lastname}
                    name="lastname"
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
                  <Form.Label>Apellido Materno</Form.Label>
                  <Form.Control
                    value={personalDetail.motherlastname}
                    name="motherlastname"
                    onChange={onChangeHandler}
                  />
                </Form.Group>
                <Form.Group
                  className="form4"
                  as={Col}
                  controlId="formGridPassword"
                >
                  <Form.Label>Fecha de Nacimiento (mes/día/año)</Form.Label>
                  <Form.Control
                    type="date"
                    value={personalDetail.dob || "1982-02-16"}
                    name="dob"
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
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control
                    value={personalDetail.phone}
                    name="phone"
                    onChange={onChangeHandler}
                  />
                </Form.Group>
                <Form.Group
                  className="form4"
                  as={Col}
                  controlId="formGridPassword"
                >
                  <Form.Label>Móvil</Form.Label>
                  <Form.Control
                    value={personalDetail.mobile}
                    name="mobile"
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
                  <Form.Label>Identificación o DNI</Form.Label>
                  <Form.Control
                    value={personalDetail.identificationId}
                    name="identificationId"
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
export default Personal;
