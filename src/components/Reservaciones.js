import "../App.css";
import { NavLink } from "react-router-dom";
import Personal from "./Personal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Location from "./Location";
import Contact from "./Contact";
import PaymentMethod from "./Payment-methods";
import Payments from "./Payments";
import Groups from "./Groups";
import Experiences from "./Experiences";
import Details from "./Details";
import Experiences2 from "./Experiences2";
function Reservaciones() {
  return (
    <div className="Personal">
      <div className="personalnavbar">
        <div className="personaldiv">
          <div>
            <NavLink
              to="/profile/reservations/groups"
              className="linkss2"
              activeStyle={{
                fontWeight: "bold",
                backgroundColor: "rgb(240, 239, 239)",
              }}
            >
              Grupos
            </NavLink>
          </div>

          <div>
            {/* <NavLink
              to="/profile/reservations/experiences"
              className="linkss2"
              activeStyle={{
                fontWeight: "bold",
                backgroundColor: "rgb(240, 239, 239)",
              }}
            >
              Experiencias
            </NavLink> */}
          </div>
        </div>
      </div>
      <div className="personalform">
        <Switch>
          <Route exact path="/profile/reservations/groups" component={Groups} />
          <Route
            exact
            path="/profile/reservations/groups/details"
            component={Details}
          />
          {/* <Route
            exact
            path="/profile/reservations/experiences"
            component={Experiences2}
          /> */}
        </Switch>
      </div>
    </div>
  );
}

export default Reservaciones;
