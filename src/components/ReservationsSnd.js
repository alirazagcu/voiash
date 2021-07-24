import "../App.css";
import pics from "../images/empty.223691ab.png";
import { Card } from "react-bootstrap";
function ReservationSnd() {
  return (
    <div className="person">
      <div className="person1">
        <Card style={({ width: "23rem" }, { borderWidth: 1 })} className="res0">
          <Card.Body>
            <div className="res1">
              <div>
                <img src={pics} className="res2" />
              </div>
              <div>
                <p className="res3">Aún no tienes ninguna reservación</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default ReservationSnd;
