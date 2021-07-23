import "../App.css";
import pics from "../images/house.jpg";
import { Card, Table } from "react-bootstrap";
function Payments() {
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
            <Table striped bordered hover>
              <thead>
                <tr className="tablehead">
                  <th>Método</th>
                  <th>Descripción</th>
                  <th>Monto</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tablebody">
                  <td>
                    <img src={pics} className="paymentpic" alt="img was not found"/>
                    7423
                  </td>
                  <td>Medicina Bellvitge</td>
                  <td>1.01 EUR</td>
                  <td>Invalid date</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default Payments;
