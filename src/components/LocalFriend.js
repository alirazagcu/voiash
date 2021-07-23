import "../App.css";
import { NavLink } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Experiences from "./Experiences";
import Information2 from "./InformationSnd";
import Update from "./UpdateFile";
import ReservationSnd from "./ReservationsSnd";
import NewExperiences from "./ExperiencesNew";
import LocalFriendDetail from "./LocalFriendDetail";
function LocalFriend() {
  return (
    <div className="Personal">
      <div className="personalnavbar">
        <div className="personaldiv">
          <div>
            <NavLink
              to="/profile/localfriend/data"
              className="linkss2"
              activeStyle={{
                fontWeight: "bold",
                backgroundColor: "rgb(240, 239, 239)",
              }}
            >
              Información
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/profile/localfriend/experiences"
              className="linkss2"
              activeStyle={{
                fontWeight: "bold",
                backgroundColor: "rgb(240, 239, 239)",
              }}
            >
              Experiencias
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/profile/localfriend/reservations"
              className="linkss2"
              activeStyle={{
                fontWeight: "bold",
                backgroundColor: "rgb(240, 239, 239)",
              }}
            >
              Reservaciones
            </NavLink>
          </div>
        </div>
      </div>
      <div className="personalform">
        <Switch>
          <Route
            exact
            path="/profile/localfriend/data"
            component={Information2}
          />
          <Route
            exact
            path="/profile/localfriend/detail"
            component={LocalFriendDetail}
          />
          <Route
            exact
            path="/profile/localfriend/experiences"
            component={Experiences}
          />
          <Route
            exact
            path="/profile/localfriend/experiences/update"
            component={Update}
          />
          <Route
            exact
            path="/profile/localfriend/experiences/new"
            component={NewExperiences}
          />

          <Route
            exact
            path="/profile/localfriend/reservations"
            component={ReservationSnd}
          />
        </Switch>
      </div>
    </div>
  );
}

export default LocalFriend;
