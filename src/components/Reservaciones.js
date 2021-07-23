import "../App.css";
import { NavLink } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Groups from "./Groups";
import Details from "./Details";
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
