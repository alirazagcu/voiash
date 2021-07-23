import React, { useEffect, useState } from "react";
import "../../App.css";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { Form, Row, Col, Card } from "react-bootstrap";
import { isEmpty } from "lodash";

export default function GroupsExperiences({
  setStateValues,
  stateValues,
  responseData = {},
  setSelectedExpPrices,
  defautlExperiences = [],
}) {
  const [showdata, setShowdata] = useState(defautlExperiences);
  useEffect(() => {
    if (!isEmpty(showdata)) {
      const selectedExperiences = showdata.map((data) => {
        return { experienceId: data.experienceId };
      });
      setStateValues({
        ...stateValues,
        experience: selectedExperiences,
      });

      const prices = showdata.map((data) => {
        return { prices: data.prices };
      });
      setSelectedExpPrices(prices);
    }
  }, [showdata]);

  const add = (e) => {
    if (e !== "default") {
      const isUserDuplicate =
        !isEmpty(showdata) && showdata.find((u) => u._id === e);
      if (isEmpty(isUserDuplicate)) {
        let user =
          !isEmpty(responseData) && responseData.find((u) => u._id === e);
        let row = user;
        let newStateArray = [...showdata];
        newStateArray.push(row);
        setShowdata(newStateArray);
      }
    }
  };

  function handleRemove(id) {
    const newList = showdata.filter((item) => item._id !== id);
    setShowdata(newList);
  }
  return (
    <div className="grouptable">
      <Row className="marginbootm">
        <Col className="tablebutton">
          <Form.Control as="select" onChange={(e) => add(e.target.value)}>
            <option value="default"></option>
            {!isEmpty(responseData) &&
              responseData.map((row, a) => (
                <option value={row._id} key={row._id}>
                  {row.name}
                </option>
              ))}
          </Form.Control>
        </Col>
      </Row>
      {showdata.map((row, a) => (
        <Card className="GroupExpo">
          <div className="GroupExp">
            <div className="GroupExp0">
              <div className="GroupExp1">
                <img src={row.listImage.imageLink} className="selectedpic" alt="img was not found"/>
              </div>
              <div className="GroupExp2">
                <p className="GroupExp3">{row.name}</p>
                <p className="GroupExp4">{row.address}</p>
              </div>
            </div>
            <div className="GroupExp5">
              <div className="GroupExp6">
                <RemoveCircleIcon
                  className="largesize"
                  onClick={() => handleRemove(row._id)}
                />
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
