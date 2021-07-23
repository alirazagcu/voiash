import React, { useEffect, useState } from "react";
import "../../App.css";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { Form, Row, Col, Card } from "react-bootstrap";
import { isEmpty } from "lodash";

export default function GroupsInsurances({
  setStateValues,
  stateValues,
  responseData = {},
  defautlInsurance = [],
}) {
  const [showdata, setShowdata] = useState(defautlInsurance);
  useEffect(() => {
    if (!isEmpty(showdata)) {
      const selectedInsurance = showdata.map((data) => {
        return { insuranceId: data.insuranceId };
      });
      setStateValues({
        ...stateValues,
        insurance: selectedInsurance,
      });
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
                <option value={row._id}>{row.name}</option>
              ))}
          </Form.Control>
        </Col>
      </Row>
      {!isEmpty(showdata) &&
        showdata.map((row, a) => (
          <Card className="GroupExpo">
            <div className="GroupExp">
              <div className="GroupExp0">
                <div className="GroupExp1">
                  <img src="lasjfkdjf" className="selectedpic" alt="img was not found"/>
                </div>
                <div className="GroupExp2">
                  <p className="GroupExp3">{row && row.name ? row.name : ""}</p>
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
