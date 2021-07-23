import React, { useEffect, useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import pics from "../../images/house.jpg";
import { Form, Col, Button, Card, Row } from "react-bootstrap";
import BorderColorRoundedIcon from "@material-ui/icons/BorderColorRounded";
import {
  families,
  getAllFamiliesstateClear,
} from "../../store/familiesReducer";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../material-ui-comps/Loader";
import SnackBar from "../material-ui-comps/SnackBar";
import { useHistory } from "react-router-dom";

function FamiliesUpdate() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [familyInputs, setFamilyInputs] = useState({});
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = useState("error");
  const [snackBar, setSnackBar] = useState("");
  const [isDelete, setIsDelete] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [logoSrc, setLogoSrc] = useState("");

  const {
    isError,
    isFetching,
    isSuccess,
    msg,
    family,
  } = useSelector((state) => state.familiyState);
  useEffect(() => {
    if (family) setFamilyInputs(family);
  }, []);

  useEffect(() => {
    if (isSuccess && isDelete) {
      history.push("/admin/families");
      setOpen(true);
      setSeverity("success");
      setSnackBar("Your record was successfully deleted");
    }
    if (isSuccess && !isDelete) {
      setOpen(true);
      setSeverity("success");
      setSnackBar("Your record was successfully updated");
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
    const { name, value } = e.target;
    setFamilyInputs({
      ...familyInputs,
      [name]: value,
    });
  };

  const onUpdateHandler = () => {
    setIsDelete(false);
    const token = localStorage.getItem("token");
    dispatch(
      families({
        type: "put",
        data: { ...familyInputs },
        _id: familyInputs._id,
        token: token,
      })
    );
  };

  const onDeleteHandler = () => {
    const token = localStorage.getItem("token");
    setIsDelete(true);
    dispatch(families({ type: "delete", _id: familyInputs._id, token: token }));
  };

  const imageHandler = (e, type) => {
    var file = e.target.files[0];
    if (type === "image") {
      setFamilyInputs({
        ...familyInputs,
        backgroundImage: file,
      });
    } else {
      setFamilyInputs({
        ...familyInputs,
        logo: file,
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
                value={familyInputs.name}
                name="name"
                onChange={onChangeHandler}
              />
            </Col>
            <Col>
              <Form.Label>Slug</Form.Label>
              <Form.Control
                value={familyInputs.slug}
                name="slug"
                onChange={onChangeHandler}
              />
            </Col>
            <Col>
              <Form.Label>Hashtag</Form.Label>
              <Form.Control
                value={familyInputs.hashtag}
                name="hashtag"
                onChange={onChangeHandler}
              />
            </Col>
          </Row>
          <Row className="rowmarn">
            <Col>
              <Form.Label>Color</Form.Label>
              <Form.Control
                value={familyInputs.color}
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
                <option>{familyInputs.status}</option>
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
                value={familyInputs.description}
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
                  <img
                    className="imageinput12"
                    src={
                      !imageSrc
                        ? (familyInputs.backgroundImage &&
                            familyInputs.backgroundImage.imageLink) ||
                          pics
                        : imageSrc
                    }
                    alt="img was not found"
                  />
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

                  <img
                    className="imageinput12"
                    src={
                      !logoSrc
                        ? (familyInputs.logo && familyInputs.logo.logoLink) ||
                          pics
                        : logoSrc
                    }
                    alt="img was not found"
                  />
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
export default FamiliesUpdate;
