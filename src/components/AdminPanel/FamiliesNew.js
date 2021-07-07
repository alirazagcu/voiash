import "../../App.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pics from "../../images/house.jpg";
import { Toolbar } from "@material-ui/core";
import { Multiselect } from "multiselect-react-dropdown";
import { Form, Col, Button, Card, Row } from "react-bootstrap";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import BorderColorRoundedIcon from "@material-ui/icons/BorderColorRounded";
import {
  families,
  getAllFamiliesstateClear,
  selectedFamily,
} from "../../store/familiesReducer";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../material-ui-comps/Loader";
import SnackBar from "../material-ui-comps/SnackBar";
import { useHistory } from "react-router-dom";

function FamiliesNew() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [familyInputs, setFamilyInputs] = useState({});
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = useState("error");
  const [snackBar, setSnackBar] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isClear, setIsClear] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [logoSrc, setLogoSrc] = useState("");

  const { isError, isFetching, isSuccess, msg } = useSelector(
    (state) => state.familiyState
  );

  useEffect(() => {
    if (familyInputs && Object.keys(familyInputs).length === 8)
      setIsDisabled(false);
    else setIsDisabled(true);
  }, [familyInputs]);

  useEffect(() => {
    if (isSuccess) {
      setOpen(true);
      setSeverity("success");
      setSnackBar("Your record was successfully added");
      dispatch(getAllFamiliesstateClear());
    }
    if (isError) {
      setOpen(true);
      setSeverity("error");
      setSnackBar(msg);
      dispatch(getAllFamiliesstateClear());
    }
  }, [isSuccess, isError]);

  const onChangeHandler = (e) => {
    setIsClear(false);
    const { name, value } = e.target;
    setFamilyInputs({
      ...familyInputs,
      [name]: value,
    });
  };

  const onUpdateHandler = () => {
    const token = localStorage.getItem("token");
    dispatch(
      families({ type: "add", data: { ...familyInputs }, token: token })
    );
    setIsClear(true);
  };

  const imageHandler = (e, type) => {
    // let base64String = "";
    var file = e.target.files[0];
    if (type === "image") {
      setFamilyInputs({
        ...familyInputs,
        ["backgroundImage"]: file,
      });
    } else {
      setFamilyInputs({
        ...familyInputs,
        ["logo"]: file,
      });
    }
    var reader = new FileReader();
    reader.onload = function () {
      const base64String = reader.result
        .replace("data:", "")
        .replace(/^.+,/, "");
      if (type === "image") {
        setImageSrc(`data:${file.type};base64, ${base64String}`);
      } else {
        setLogoSrc(`data:${file.type};base64, ${base64String}`);
      }
    };
    reader.readAsDataURL(file);
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
                <Link to="/admin/families">
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
                value={isClear ? "" : familyInputs.name}
                name="name"
                onChange={onChangeHandler}
              />
            </Col>
            <Col>
              <Form.Label>Slug</Form.Label>
              <Form.Control
                value={isClear ? "" : familyInputs.slug}
                name="slug"
                onChange={onChangeHandler}
              />
            </Col>
            <Col>
              <Form.Label>Hashtag</Form.Label>
              <Form.Control
                value={isClear ? "" : familyInputs.hastag}
                name="hastag"
                onChange={onChangeHandler}
              />
            </Col>
          </Row>
          <Row className="rowmarn">
            <Col>
              <Form.Label>Color</Form.Label>
              <Form.Control
                value={isClear ? "" : familyInputs.color}
                name="color"
                onChange={onChangeHandler}
              />
            </Col>
            <Col>
              <Form.Label>Nivel Educativo</Form.Label>
              <Form.Control
                as="select"
                name="status"
                onChange={onChangeHandler}
              >
                <option>Primaria</option>
                <option>Secundaria</option>
                <option>Preparatoria</option>
                <option>Universidad</option>
                <option>Postgrado</option>
                <option>Otro</option>
              </Form.Control>
            </Col>
          </Row>
          <Row className="rowmarn">
            <Col>
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                value={isClear ? "" : familyInputs.description}
                as="textarea"
                aria-label="With textarea"
                name="description"
                onChange={onChangeHandler}
              />
            </Col>
          </Row>
          <Row className="rowmarn">
            <Col>
              <label>Imagen de fondo</label>
              <div class="image-upload">
                <label for="file-input1">
                  <div className="firstbox">
                    {" "}
                    <BorderColorRoundedIcon className="box1" />
                  </div>
                  <img className="imageinput12" src={isClear ? "" : imageSrc} />
                </label>
                <input
                  id="file-input1"
                  name="image"
                  type="file"
                  onChange={(e) => imageHandler(e, "image")}
                />
              </div>
            </Col>
            <Col>
              <label>Logo</label>
              <div class="image-upload">
                <label for="file-input2">
                  <div className="firstbox">
                    {" "}
                    <BorderColorRoundedIcon className="box1" />
                  </div>

                  <img className="imageinput12" src={isClear ? "" : logoSrc} />
                </label>
                <input
                  id="file-input2"
                  name="logo"
                  type="file"
                  onChange={(e) => imageHandler(e, "logo")}
                />
              </div>
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
export default FamiliesNew;
