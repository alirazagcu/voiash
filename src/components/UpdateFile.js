import "../App.css";
import pics from "../images/house.jpg";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from "@material-ui/core/TableContainer";
import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import Popup from "reactjs-popup";
import Paper from "@material-ui/core/Paper";
import { Form, Col, Button, Card, Row, Tabs, Tab } from "react-bootstrap";
import BorderColorRoundedIcon from "@material-ui/icons/BorderColorRounded";
// import RichTextEditor from './Toolbar';
import {
  experiences,
  experienceStateClear,
} from "../store/experienceReducer";
import {
  families,
  getAllFamiliesstateClear,
} from "../store/familiesReducer";
import { useSelector, useDispatch } from "react-redux";
import Loader from "./material-ui-comps/Loader";
import SnackBar from "./material-ui-comps/SnackBar";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
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
function ExperiencesUpdate() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [experienceInputs, setExperiencesInputs] = useState({});
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = useState("error");
  const [snackBar, setSnackBar] = useState("");
  const [isDelete, setIsDelete] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [logoSrc, setLogoSrc] = useState("");
  const [imagesArrayValue, setImagesArrayValue] = useState("");

  const { isError, isFetching, isSuccess, msg, experience } = useSelector(
    (state) => state.experienceState
  );
  const { responseData } = useSelector((state) => state.familiyState);
  useEffect(() => {
    if (experience) setExperiencesInputs(experience);
    const token = localStorage.getItem("token");
    dispatch(families({ type: "get", token: token }));
    getAllFamiliesstateClear();
  }, []);

  useEffect(() => {
    if (isSuccess && isDelete) {
      history.push("/admin/experiences");
      setOpen(true);
      setSeverity("success");
      setSnackBar("Your record was successfully deleted");
    }
    if (isSuccess && !isDelete) {
      setOpen(true);
      setSeverity("success");
      setSnackBar("Your record was successfully updated");
      dispatch(experienceStateClear());
    }
    if (isError) {
      setOpen(true);
      setSeverity("error");
      setSnackBar(msg);
      dispatch(experienceStateClear());
    }
  }, [isSuccess, isError]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setExperiencesInputs({
      ...experienceInputs,
      [name]: value,
    });
  };

  const onUpdateHandler = () => {
    setIsDelete(false);
    const token = localStorage.getItem("token");
    dispatch(
      experiences({
        type: "put",
        data: { ...experienceInputs, images: imagesArrayValue },
        _id: experienceInputs._id,
        token: token,
      })
    );
  };

  const onDeleteHandler = () => {
    const token = localStorage.getItem("token");
    setIsDelete(true);
    dispatch(
      experiences({ type: "delete", _id: experienceInputs._id, token: token })
    );
  };

  const imageHandler = (e, type) => {
    var file = e.target.files[0];
    if (type === "image") {
      setExperiencesInputs({
        ...experienceInputs,
        ["listImage"]: file,
      });
    } else {
      setImagesArrayValue(file);
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

  const editor = useRef(null);
  const [content, setContent] = useState(
    "Reserva la mesa de tu preferencia en Mandala Cancún y se parte de las emocionantes celebraciones que se viven noche a noche Lo que pagas por tu mesa se convierte en Crédito para bebidas o botellas: Diamond | $1500 USD (10 Covers) El precio publicado es por persona y se basa en un mínimo de 10 pasajeros; en el supuesto que disminuyera el número de pasajeros aumentará el costo de esta actividad. Incluye: Free covers limitados (de acuerdo a la zona reservada); Crédito limitado para consumo; Reserva de mesa en zona seleccionada (garantizada hasta 12:00 am); Servicio de mesero (propinas no incluidas).No incluye: Ubicación de mesa en específico (se garantiza únicamente zona); Propinas."
  );
  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };

  //to0lbar
  const [priceItems, setPriceItems] = useState({
    country: "",
    coin: "",
    amount: "",
    _id: "",
    enable: false,
  });

  const priceItemsOnChangeHandler = (e) => {
    const { value, name } = e.target;
    setPriceItems({
      ...priceItems,
      [name]: value,
    });
  };
  const onPriceChangeHandler = (e, id) => {
    const { name, value } = e.target;
    const { prices } = experienceInputs;
    const selectedItem = prices.filter((price) => price._id === id);
    const updatedItems = { ...selectedItem[0], [name]: value };
    const updatePrices = prices.map((price) =>
      price._id === id ? { ...price, ...updatedItems } : price
    );
    setExperiencesInputs({ ...experienceInputs, prices: updatePrices });
  };

  const classes = useStyles2();
  const add = (e) => {
    e.preventDefault();
    let newStateArray = [...experienceInputs.prices];
    const updatedArray = { ...priceItems, _id: uuidv4() };
    newStateArray.push(updatedArray);
    setExperiencesInputs({ ...experienceInputs, prices: newStateArray });
  };

  const remove = (a) => {
    a.preventDefault();
    const { prices } = experienceInputs;
    const selectedItem = prices.filter((price) => price.enable !== true);
    setExperiencesInputs({ ...experienceInputs, prices: selectedItem });
  };

  const checkboxHandler = (e, id) => {
    const { name, checked } = e.target;
    const { prices } = experienceInputs;
    const selectedItem = prices.filter((price) => price._id === id);
    const updatedItems = { ...selectedItem[0], [name]: checked };
    const updatePrices = prices.map((price) =>
      price._id === id ? { ...price, ...updatedItems } : price
    );
    setExperiencesInputs({ ...experienceInputs, prices: updatePrices });
  };

  const familyChangeHandler = (e) => {
    const { value } = e.target;
    const familiesValues = value.split(",");
    setExperiencesInputs({
      ...experienceInputs,
      family: { familiesId: familiesValues[0], name: familiesValues[1] },
    });
  };

  const shortDescriptionHandler = (value) => {
    setExperiencesInputs({
      ...experienceInputs,
      shortDescription: value.substr(3, value.length - 7),
    });
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
                <Link to="/profile/localfriend/experiences">
                  <Button>Volver</Button>
                </Link>
              </div>
              <div className="btnfornew"> 
              </div>
            </Col>
          </Row>
          <hr />
          <Row className="rowmarn">
            <Col xs={6}>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                value={experienceInputs.name}
                name="name"
                onChange={onChangeHandler}
              />
            </Col>
            <Col>
              <Form.Label>Type</Form.Label>
              <Form.Control as="select" name="type" onChange={onChangeHandler}>
                <option>{experienceInputs.type}</option>
                <option id="hello">Hosted</option>
                <option>Normal</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Label>Estatus</Form.Label>
              <Form.Control
                as="select"
                name="status"
                onChange={onChangeHandler}
              >
                <option>{experienceInputs.status}</option>
                <option>Publicado</option>
                <option>Inactivo</option>
                <option>Borrador</option>
              </Form.Control>
            </Col>
          </Row>
          <Row>
            <Col className="formlabelleft">
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
                          name="country"
                          onChange={priceItemsOnChangeHandler}
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
                          name="coin"
                          onChange={priceItemsOnChangeHandler}
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
                  {experienceInputs &&
                    experienceInputs.prices &&
                    experienceInputs.prices.map((row, a) => (
                      <TableRow key={row._id}>
                        <TableCell className="inputintable3">
                          <input
                            class="select"
                            type="checkbox"
                            value={row.country ? row.country : false}
                            name="enable"
                            onChange={(e) => checkboxHandler(e, row._id)}
                          />
                        </TableCell>
                        <TableCell>
                          <Form.Control
                            className="inputintable"
                            value={row.country}
                            type="text"
                            name="country"
                            onChange={(e) => onPriceChangeHandler(e, row._id)}
                          />
                        </TableCell>

                        <TableCell>
                          <Form.Control
                            className="inputintable"
                            value={row.coin}
                            type="text"
                            name="coin"
                            onChange={(e) => onPriceChangeHandler(e, row._id)}
                          />
                        </TableCell>

                        <TableCell>
                          <Form.Control
                            className="inputintable"
                            value={row.amount}
                            type="number"
                            name="amount"
                            onChange={(e) => onPriceChangeHandler(e, row._id)}
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
              <Form.Label>Familia</Form.Label>
              <Form.Control as="select" onChange={familyChangeHandler}>
                {experienceInputs && experienceInputs.family && (
                  <option
                    value={`${experienceInputs.family.familiesId},${experienceInputs.family.name}`}
                  >
                    {experienceInputs.family.name}
                  </option>
                )}
                {!isEmpty(responseData) &&
                  responseData.map((family) => {
                    return (
                      <option value={`${family.familiesId},${family.name}`}>
                        {family.name}
                      </option>
                    );
                  })}
              </Form.Control>
            </Col>
            <Col>
              <Form.Label>Duración</Form.Label>
              <Form.Control
                name="duration"
                value={experienceInputs.duration}
                onChange={onChangeHandler}
              />
            </Col>
            <Col>
              <Form.Label>Ubicación</Form.Label>
              <Form.Control
                name="location"
                value={experienceInputs.location}
                onChange={onChangeHandler}
              />
            </Col>
          </Row>
          <Row className="rowmarn">
            <Col>
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                name="description"
                value={experienceInputs.description}
                onChange={onChangeHandler}
              />
            </Col>
          </Row>
          <Row className="rowmarn">
            <Col>
              <Form.Label>Descripción Corta</Form.Label>
              <JoditEditor
                ref={editor}
                config={config}
                tabIndex={2} // tabIndex of textarea
                value={experienceInputs.shortDescription}
                onChange={(newContent) => shortDescriptionHandler(newContent)}
              />
            </Col>
          </Row>
          <Row>
            <Col className="formlabelleft">
              <Form.Label className="rowmarn12345">Imagen de lista</Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <div class="imageupload">
                <label for="file-input1">
                  <div className="firstboxupdate">
                    <BorderColorRoundedIcon className="box12" />
                  </div>
                  <img
                    className="imageinputupdate"
                    src={
                      !imageSrc
                        ? experienceInputs.listImage &&
                          experienceInputs.listImage.imageLink
                        : imageSrc
                    }
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
          </Row>
          <Row>
            <Col className="formlabelleft">
              <Form.Label className="rowmarn12345">Imágenes</Form.Label>
            </Col>
          </Row>

          <div className="row mainimagetab">
            {experienceInputs &&
              experienceInputs.images &&
              experienceInputs.images.map((image) => {
                return (
                  <div class="col-sm-6 col-xs-12 col-md-3 col-lg-3 imageuploadtab ">
                    <label for="file-input2">
                      <div className="firstboxupdatetab">
                        <BorderColorRoundedIcon className="box12tab" />
                      </div>
                      <img
                        className="imageinputupdatetab"
                        src={!logoSrc ? image.imageLink : logoSrc}
                      />
                    </label>
                    <input
                      id="file-input2"
                      name="image"
                      type="file"
                      onChange={(e) => imageHandler(e, "images")}
                    />
                  </div>
                );
              })}
          </div>
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
export default ExperiencesUpdate;
