import "../../App.css";
import pics from "../../images/house.jpg";
import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import { Form, Col, Button, Card, Row, Tabs, Tab } from "react-bootstrap";
import BorderColorRoundedIcon from "@material-ui/icons/BorderColorRounded";
import MyTableNew from "./TableComponentNew";
import GroupsReservationsNew from "./GroupsReservationsNew";
import GroupsExperiences from "./GroupsExperiences";
import GroupsInsurances from "./GroupsInsurances";
import {
  destinations,
  getAllDestinationsStateClear,
} from "../../store/destinationReducer";
import { hotels, getAllHoteslsStateClear } from "../../store/hotelsReducer";
import {
  families,
  getAllFamiliesstateClear,
} from "../../store/familiesReducer";
import {
  groupsActions,
  groupsStateClear,
  selectedGroup,
} from "../../store/groupReducer";
import {
  insuranceAction,
  insuranceStateClear,
} from "../../store/insuranceReducer";
import {
  experiences,
  experienceStateClear,
} from "../../store/experienceReducer";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../material-ui-comps/Loader";
import SnackBar from "../material-ui-comps/SnackBar";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { isEmpty } from "lodash";

const defaultValues = {
  name: "",
  paymentDetails: "",
  duration: "",
  destination: {
    destinationId: "",
  },
  hotel: {
    hotelId: "",
  },
  family: {
    familiesId: "",
  },
  airports: "",
  status: "",
  departureDate: "",
  returnDate: "",
  contractInPdf: {
    contractLink: "this is the testing pdf file",
  },
  descriptionMobile: "",
  listImage: {
    imageLink: "fjlasjdfjadfalsjfdlajfdlkajflkjafds",
  },
  kind: "",
  experience: [],
  insurance: [],
  description: "",
  images: [],
  paymentTable: [],
  share: {},
  visibility: "ALL",
};
function GroupsNew() {
  const editor = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };
  const { isError, isFetching, isSuccess, msg, experience } = useSelector(
    (state) => state.groupsState
  );
  const { responseData: destinationResponse } = useSelector(
    (state) => state.destinationState
  );
  const { responseData: hotelResponse } = useSelector(
    (state) => state.hotelsState
  );
  const { responseData: familyResponse } = useSelector(
    (state) => state.familiyState
  );
  const { responseData: insuranceResponse } = useSelector(
    (state) => state.insuranceState
  );
  const { responseData: experienceResponse } = useSelector(
    (state) => state.experienceState
  );
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = useState("error");
  const [snackBar, setSnackBar] = useState("");
  const [share, setShare] = useState({});
  const [images, setImages] = useState();
  const [content, setContent] = useState("");
  const [selectExpPrices, setSelectedExpPrices] = useState([]);
  const [stateValues, setStateValues] = useState(defaultValues);
  const [allImages, setAllImages] = useState([]);
  const [listImage, setListImage] = useState({});

  useEffect(() => {
    if (isSuccess) {
      setOpen(true);
      history.push("/admin/groups");
    }
    if (isError) {
      setOpen(true);
      setSeverity("error");
      setSnackBar(msg);
      dispatch(groupsStateClear());
    }
  }, [isSuccess, isError]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(destinations({ type: "get", token: token }));
    dispatch(hotels({ type: "get", token: token }));
    dispatch(families({ type: "get", token: token }));
    dispatch(insuranceAction({ type: "get", token: token }));
    dispatch(experiences({ type: "get", token: token }));
    return () => {
      dispatch(getAllDestinationsStateClear());
      dispatch(getAllHoteslsStateClear());
      dispatch(getAllFamiliesstateClear());
      dispatch(insuranceStateClear());
      dispatch(experienceStateClear());
    };
  }, []);

  useEffect(() => {
    if (content) {
      setStateValues({
        ...stateValues,
        description: content,
      });
    }
  }, [content]);

  //image uploader
  const imageHandler = (e, type) => {
    var file = e.target.files[0];
    if (type === "list") {
      setListImage(file);
    } else {
      const stateAllImage = allImages;
      stateAllImage.push({ file });
      setAllImages(stateAllImage);
    }
    const stateImages = stateValues.images;
    var reader = new FileReader();
    reader.onload = function () {
      const base64String = reader.result
        .replace("data:", "")
        .replace(/^.+,/, "");
      if (type === "list") {
        setStateValues({
          ...stateValues,
          listImage: { imageLink: `data:${file.type};base64, ${base64String}` },
        });
      } else {
        stateImages.push({
          imageLink: `data:${file.type};base64, ${base64String}`,
        });
        setStateValues({ ...stateValues, images: stateImages });
      }
    };
    reader.readAsDataURL(file);
  };
  
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setStateValues({
      ...stateValues,
      [name]: value,
    });
  };

  const onIdSelctedHandler = (e, objectKey) => {
    const { name, value } = e.target;
    const splitedValues = value.split(",");
    setStateValues({
      ...stateValues,
      [objectKey]: {
        ...stateValues[objectKey],
        [name]: splitedValues[0],
        name: splitedValues[1],
      },
    });
  };

  const onShareChangeHandler = (e) => {
    const { name, value } = e.target;
    setShare({
      ...share,
      [name]: value,
    });
  };

  const onSubmitHandler = () => {
    const token = localStorage.getItem("token");
    const listImage = {
      imageLink: "fjlasjdfjadfalsjfdlajfdlkajflkjafds",
    };
    const images = [
      {
        imageLink: "fjlasjdfjadfalsjfdlajfdlkajflkjafds",
      },
    ];
    dispatch(
      groupsActions({
        type: "add",
        data: { ...stateValues, listImage: listImage, images: images },
        token: token,
        allImages: allImages,
        listImage: listImage,
      })
    );
  };

  const onShareSubmitHandler = (e) => {
    e.preventDefault();
    setStateValues({ ...stateValues, share: share });
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
                <Link to="/admin/groups">
                  <Button>Volver</Button>
                </Link>
              </div>
              <div className="btnfornew">
                <Button className="formarginbtn" onClick={onSubmitHandler}>
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
                value={stateValues.name ? stateValues.name : ""}
                onChange={onChangeHandler}
              />
            </Col>
            <Col>
              <Form.Label>Detalles de Pago</Form.Label>
              <Form.Control
                name="paymentDetails"
                value={
                  stateValues.paymentDetails ? stateValues.paymentDetails : ""
                }
                onChange={onChangeHandler}
              />
            </Col>
            <Col>
              <Form.Label>Duración</Form.Label>
              <Form.Control
                name="duration"
                value={stateValues.duration ? stateValues.duration : ""}
                onChange={onChangeHandler}
              />
            </Col>
          </Row>
          <Row className="rowmarn">
            <Col>
              <Form.Label>Destino</Form.Label>
              <Form.Control
                as="select"
                name="destinationId"
                value={
                  stateValues.destination && stateValues.destination.name
                    ? stateValues.destination.name
                    : ""
                }
                onChange={(e) => onIdSelctedHandler(e, "destination")}
              >
                <option>
                  {stateValues.destination && stateValues.destination.name
                    ? stateValues.destination.name
                    : ""}
                </option>
                {!isEmpty(destinationResponse) &&
                  destinationResponse.map((dest) => {
                    return (
                      <option value={`${dest.destinationId},${dest.name}`}>
                        {dest.name}
                      </option>
                    );
                  })}
              </Form.Control>
            </Col>
            <Col>
              <Form.Label>Hotel</Form.Label>
              <Form.Control
                as="select"
                name="hotelId"
                value={
                  stateValues.hotel && stateValues.hotel.name
                    ? stateValues.hotel.name
                    : ""
                }
                onChange={(e) => onIdSelctedHandler(e, "hotel")}
              >
                <option>
                  {stateValues.hotel && stateValues.hotel.name
                    ? stateValues.hotel.name
                    : ""}
                </option>
                {!isEmpty(hotelResponse) &&
                  hotelResponse.map((hotel) => {
                    return (
                      <option value={`${hotel.hotelId},${hotel.name}`}>
                        {hotel.name}
                      </option>
                    );
                  })}
              </Form.Control>
            </Col>
            <Col>
              <Form.Label>Familia</Form.Label>
              <Form.Control
                as="select"
                name="familiesId"
                value={
                  stateValues.family && stateValues.family.name
                    ? stateValues.family.name
                    : ""
                }
                onChange={(e) => onIdSelctedHandler(e, "family")}
              >
                <option>
                  {stateValues.family && stateValues.family.name
                    ? stateValues.family.name
                    : ""}
                </option>
                {!isEmpty(familyResponse) &&
                  familyResponse.map((family) => {
                    return (
                      <option value={`${family.familiesId},${family.name}`}>
                        {family.name}
                      </option>
                    );
                  })}
              </Form.Control>
            </Col>
          </Row>
          <Row className="rowmarn">
            <Col>
              <Form.Label>Aeropuertos</Form.Label>
              <Form.Control
                name="airports"
                value={stateValues.airports ? stateValues.airports : ""}
                onChange={onChangeHandler}
              />
            </Col>
            <Col>
              <Form.Label>Estatus</Form.Label>
              <Form.Control
                as="select"
                name="status"
                value={stateValues.status ? stateValues.status : ""}
                onChange={onChangeHandler}
              >
                <option></option>
                <option>Borrador</option>
                <option>Inactivo</option>
                <option>Publicado</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Label>Fecha de salida</Form.Label>
              <Form.Control
                type="date"
                name="departureDate"
                value={stateValues.departureDate && stateValues.departureDate}
                onChange={onChangeHandler}
              />
            </Col>
          </Row>
          <Row className="rowmarn">
            <Col>
              <Form.Label>Fecha de regreso</Form.Label>
              <Form.Control
                type="date"
                name="returnDate"
                value={stateValues.returnDate && stateValues.returnDate}
                onChange={onChangeHandler}
              />
            </Col>
            <Col>
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                as="select"
                name="kind"
                value={stateValues.kind ? stateValues.kind : ""}
                onChange={onChangeHandler}
              >
                <option></option>
                <option>Público</option>
                <option>Privado</option>
              </Form.Control>
            </Col>
          </Row>
          {/* <Row className="rowmarn">
            <Col className="image-upload12">
              <Form.Label>Contrato en PDF</Form.Label>
              <label for="file-input" className="newclass">
                <p className="paragrapinput"></p>
              </label>
              <input id="file-input" type="file" />
            </Col>
          </Row> */}
          <Row className="rowmarn">
            <Col>
              <Form.Label>Descripción Móvil</Form.Label>
              <Form.Control
                as="textarea"
                aria-label="With textarea"
                name="descriptionMobile"
                value={
                  stateValues.descriptionMobile
                    ? stateValues.descriptionMobile
                    : ""
                }
                onChange={onChangeHandler}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Imagen de lista</Form.Label>
              <div class="imageupload">
                <label for="file-input">
                  <div className="firstboxupdatenew">
                    <BorderColorRoundedIcon className="box12" />
                  </div>
                  <img
                    className="imageinputupdate"
                    src={
                      (stateValues &&
                        stateValues.listImage &&
                        stateValues.listImage.imageLink) ||
                      ""
                    }
                  />
                </label>
                <input
                  id="file-input"
                  type="file"
                  onChange={(e) => imageHandler(e, "list")}
                />
              </div>
            </Col>
          </Row>
          <Row className="rowmarn">
            <Col>
              <p className="removeMargin">
                Fecha de creación: 03/09/2021 23:58
              </p>
              <p className="removeMargin1">
                Fecha de modificación: 03/09/2021 23:58
              </p>
            </Col>
          </Row>
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
          >
            <Tab eventKey="home" title="Experiencias">
              <div className="Tabsetting1">
                <GroupsExperiences
                  setStateValues={setStateValues}
                  stateValues={stateValues}
                  setSelectedExpPrices={setSelectedExpPrices}
                  responseData={experienceResponse}
                />
              </div>
            </Tab>
            <Tab eventKey="profile" title="Seguros">
              <div className="Tabsetting1">
                <GroupsInsurances
                  setStateValues={setStateValues}
                  stateValues={stateValues}
                  responseData={insuranceResponse}
                />
              </div>
            </Tab>
            <Tab eventKey="contact" title="Descripción">
              <div className="Tabsetting">
                <div className="editor">
                  <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    tabIndex={2} // tabIndex of textarea
                    onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    onChange={(newContent) => {}}
                  />
                </div>
              </div>
            </Tab>
            <Tab eventKey="hom" title="Imágenes">
              <div className="Tabsetting2">
                <div className="row mainimagetab">
                  {stateValues &&
                    stateValues.images &&
                    stateValues.images.map((image, index) => {
                      return (
                        <div
                          className="col-sm-6 col-xs-12 col-md-3 col-lg-3 imageuploadtab "
                          style={{
                            display: `${
                              stateValues &&
                              stateValues.images &&
                              stateValues.images.length >= 1
                                ? "block"
                                : "none"
                            }`,
                          }}
                        >
                          <label for={`file-input${index}`}>
                            <div className="firstboxupdatenew">
                              <BorderColorRoundedIcon className="box12" />
                            </div>
                            <img
                              className="imageinputupdate"
                              src={image.imageLink}
                            />
                          </label>
                        </div>
                      );
                    })}
                  <div class="col-sm-6 col-xs-12 col-md-3 col-lg-3 imageuploadtab">
                    <label for="file-input1">
                      <div className="firstboxupdatetabnew">
                        <BorderColorRoundedIcon className="box12tab" />
                      </div>
                      <img className="imageinputupdatetabnew" src={images} />
                    </label>
                    <input
                      id="file-input1"
                      onChange={(e) => imageHandler(e, "adf")}
                      type="file"
                    />
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="hm" title="Tabla de Pagos">
              <div className="Tabsetting1">
                <MyTableNew
                  setStateValues={setStateValues}
                  stateValues={stateValues}
                  selectExpPrices={selectExpPrices}
                />
              </div>
            </Tab>

            <Tab eventKey="profi" title="Compartir">
              <div className="Tabsetting">
                <Row className="rowmarntop">
                  <Col>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      name="url"
                      Value={stateValues.share && stateValues.share.url}
                      onChange={onShareChangeHandler}
                    />
                  </Col>
                </Row>
                <Row className="rowmarn">
                  <Col>
                    <Form.Label>País</Form.Label>
                    <Form.Control
                      as="textarea"
                      aria-label="With textarea"
                      name="sendByemail"
                      Value={stateValues.share && stateValues.share.sendByemail}
                      onChange={onShareChangeHandler}
                    />
                  </Col>
                </Row>
                <Row className="rowmarn">
                  <Col>
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control
                      as="textarea"
                      aria-label="With textarea"
                      name="emailText"
                      Value={stateValues.share && stateValues.share.emailText}
                      onChange={onShareChangeHandler}
                    />
                  </Col>
                </Row>
                <div className="rightbutton">
                  <button
                    className="buttonmodeltab"
                    onClick={onShareSubmitHandler}
                  >
                    Envíar
                  </button>
                </div>
              </div>
            </Tab>
            <Tab eventKey="contt" title="Reservations">
              <div className="Tabsetting1">
                <GroupsReservationsNew />
              </div>
            </Tab>
            <hr />
          </Tabs>
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
export default GroupsNew;
