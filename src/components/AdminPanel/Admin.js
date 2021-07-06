import "../../App.css";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HouseIcon from "@material-ui/icons/House";
import LayersIcon from "@material-ui/icons/Layers";
import GroupIcon from "@material-ui/icons/Group";
import WorkIcon from "@material-ui/icons/Work";
import HotelIcon from "@material-ui/icons/Hotel";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PersonIcon from "@material-ui/icons/Person";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import SportsKabaddiIcon from "@material-ui/icons/SportsKabaddi";
import PaymentIcon from "@material-ui/icons/Payment";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import Families from "./Families";
import Groups from "./Groups";
import Experiences from "./Experiences";
import Hotels from "./Hotels";
import Destinations from "./Destinations";
import Insurances from "./Insurances";
import User from "./Users";
import LocalFriend from "./Localfriends";
import Reservation from "./Reservations.js";
import Payments from "./Payments.js";
import Fees from "./Fees";
import FamiliesUpdate from "./FamiliesUpdate";
import HotelsUpdate from "./HotelsUpdate";
import FamiliesNew from "./FamiliesNew";
import HotelsNew from "./HotelsNew";
import DestinationsUpdate from "./DestinationsUpdate";
import DestinationsNew from "./DestinationsNew";
import InsurancesUpdate from "./InsurancesUpdate";
import InsurancesNew from "./InsurancesNew";
import UserUpdate from "./UsersUpdate";
import UsersNew from "./UsersNew";
import GroupsUpdate from "./GroupsUpdate";
import GroupsNew from "./GroupsNew";
import LocalfriendsUpdate from "./LocalfriendsUpdate";
import LocalfriendsNew from "./LocalfriendsNew";
import PaymentsUpdate from "./PaymentsUpdate";
import PaymentsNew from "./PaymentsNew";
import FeeNew from "./FeesNew";
import FeeUpdate from "./FeesUpdate";
import ReservationUpdate from "./ReservationsUpdate";
import ReservationsNew from "./ReservationsNew";
import ExperiencesUpdate from "./ExperiencesUpdate";
import ExperiencesNew from "./ExperiencesNew";
import NavBar from "../Navbar";

function Admin() {
  return (
    <>
      <NavBar />
      <div className="adminPersonal">
        <div className="adminpersonalnavbar">
          <div className="adminpersonaldiv">
            <div>
              <NavLink to="/admin" className="linkss2">
                <HouseIcon className="adminicon" />
                Overview
              </NavLink>
            </div>
            <div>
              <NavLink to="/admin/families" className="linkss2">
                <LayersIcon className="adminicon" />
                Familias
              </NavLink>
            </div>
            <div>
              <NavLink to="/admin/groups" className="linkss2">
                <GroupIcon className="adminicon" />
                Grupos
              </NavLink>
            </div>
            <div>
              <NavLink to="/admin/experiences" className="linkss2">
                <WorkIcon className="adminicon" />
                Experiencias
              </NavLink>
            </div>
            <div>
              <NavLink to="/admin/hotels" className="linkss2">
                <HotelIcon className="adminicon" />
                Hoteles
              </NavLink>
            </div>
            <div>
              <NavLink to="/admin/destinations" className="linkss2">
                <LocationOnIcon className="adminicon" />
                Destinos
              </NavLink>
            </div>
            <div>
              <NavLink to="/admin/insurances" className="linkss2">
                <VerifiedUserIcon className="adminicon" />
                Seguros
              </NavLink>
            </div>
            <div>
              <NavLink to="/admin/users" className="linkss2">
                <PersonIcon className="adminicon" />
                Usuarios
              </NavLink>
            </div>
            <div>
              <NavLink to="/admin/localfriends" className="linkss2">
                <SportsKabaddiIcon className="adminicon" />
                Local Friends
              </NavLink>
            </div>
            <div>
              <NavLink to="/admin/reservations" className="linkss2">
                <TurnedInIcon className="adminicon" />
                Reservaciones
              </NavLink>
            </div>
            <div>
              <NavLink to="/admin/payments" className="linkss2">
                <PaymentIcon className="adminicon" />
                Pagos
              </NavLink>
            </div>
            <div>
              <NavLink to="/admin/fees" className="linkss2">
                <PaymentIcon className="adminicon" />
                Comisiones
              </NavLink>
            </div>
          </div>
        </div>

        <div className="adminpersonalform">
          <Switch>
            <Route exact path="/admin/families" component={Families} />
            <Route exact path="/admin/groups" component={Groups} />
            <Route exact path="/admin/experiences" component={Experiences} />
            <Route exact path="/admin/hotels" component={Hotels} />
            <Route exact path="/admin/destinations" component={Destinations} />
            <Route exact path="/admin/insurances" component={Insurances} />
            <Route exact path="/admin/users" component={User} />
            <Route exact path="/admin/localfriends" component={LocalFriend} />
            <Route exact path="/admin/reservations" component={Reservation} />
            <Route exact path="/admin/payments" component={Payments} />
            <Route exact path="/admin/fees" component={Fees} />

            {/* //update */}
            <Route
              exact
              path="/admin/families/update"
              component={FamiliesUpdate}
            />
            <Route exact path="/admin/families/new" component={FamiliesNew} />
            <Route exact path="/admin/hotels/update" component={HotelsUpdate} />
            <Route exact path="/admin/hotels/new" component={HotelsNew} />
            <Route
              exact
              path="/admin/destinations/update"
              component={DestinationsUpdate}
            />
            <Route
              exact
              path="/admin/destinations/new"
              component={DestinationsNew}
            />
            <Route
              exact
              path="/admin/insurances/update"
              component={InsurancesUpdate}
            />
            <Route
              exact
              path="/admin/insurances/new"
              component={InsurancesNew}
            />
            <Route exact path="/admin/users/update" component={UserUpdate} />
            <Route exact path="/admin/users/new" component={UsersNew} />
            <Route exact path="/admin/groups/update" component={GroupsUpdate} />
            <Route exact path="/admin/groups/new" component={GroupsNew} />
            <Route
              exact
              path="/admin/localfriends/update"
              component={LocalfriendsUpdate}
            />
            <Route
              exact
              path="/admin/localfriends/new"
              component={LocalfriendsNew}
            />
            <Route
              exact
              path="/admin/payments/update"
              component={PaymentsUpdate}
            />
            <Route exact path="/admin/fees/new" component={FeeNew} />
            <Route exact path="/admin/fees/update" component={FeeUpdate} />
            <Route
              exact
              path="/admin/reservations/update"
              component={ReservationUpdate}
            />
            <Route
              exact
              path="/admin/reservations/new"
              component={ReservationsNew}
            />
            <Route
              exact
              path="/admin/experiences/update"
              component={ExperiencesUpdate}
            />
            <Route
              exact
              path="/admin/experiences/new"
              component={ExperiencesNew}
            />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default Admin;
