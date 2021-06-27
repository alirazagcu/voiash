import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BnavBar from "./Footer.js";
import Home from "./Home.js";
import NavBar from "./Navbar";
import Selection from "./Selection.js";
import Option from "./Option";
import RouteConfig1 from "./Router1";
import Profile from "./Profile.js";
import Admin from "./AdminPanel/Admin";
import Experiences1 from "./Experiences1.js";
import Login from "./Login.js";
import Register from "./Register.js";
import Forget from "./Forget.js";
import AdminRegister from "./AdminRegister";
import ForgotPassword from "./ResetPassword";
import RecoveryPassword from "./RecoveryPassword";

function RouteConfig() {
  const userType = localStorage.getItem("isAdmin");
  const token = localStorage.getItem("token");
  return (
    <Router>
      <div className="comp">
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/registeradmin" component={AdminRegister} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Login} />
          <Route exact path="/forget" component={Forget} />
          <Route exact path="/user/resetPassword/:userEmail/reset/:userId" component={ForgotPassword} />
          <Route exact path="/user/recoveryPassword" component={RecoveryPassword} />
          <Route exact path="/selection/adventuretrip" component={Selection} />
          <Route exact path="/selection/experiencies" component={Selection} />
          <Route exact path="/selection/senses" component={Selection} />
          <Route exact path="/selection/localfriend" component={Selection} />

          <Route exact path="/experiencies1" component={Experiences1} />
          <Route exact path="/profile" component={Profile} />

          <Route exact path="/profile/information" component={Profile} />
          <Route exact path="/profile/reservations" component={Profile} />
          <Route exact path="/profile/localfriend" component={Profile} />
          <Route exact path="/selection/theweek" component={Selection} />
          <Route exact path="/selection/discovery" component={Selection} />
          <Route exact path="/home" component={Home} />

          <Route
            exact
            path="/profile/information/personal"
            component={Profile}
          />
          <Route
            exact
            path="/profile/information/location"
            component={Profile}
          />
          <Route
            exact
            path="/profile/information/contact"
            component={Profile}
          />
          <Route
            exact
            path="/profile/information/payment-methods"
            component={Profile}
          />
          <Route
            exact
            path="/profile/information/payments"
            component={Profile}
          />
          <Route
            exact
            path="/profile/reservations/groups"
            component={Profile}
          />
          <Route
            exact
            path="/profile/reservations/experiences"
            component={Profile}
          />

          <Route exact path="/profile/localfriend/data" component={Profile} />
          <Route
            exact
            path="/profile/localfriend/experiences"
            component={Profile}
          />
          <Route
            exact
            path="/profile/localfriend/reservations"
            component={Profile}
          />
          <Route exact path="/selection" component={Selection} />
          <Route
            exact
            path="/profile/reservations/groups/details"
            component={Profile}
          />
          <Route
            exact
            path="/profile/localfriend/experiences/update"
            component={Profile}
          />
          <Route
            exact
            path="/profile/localfriend/experiences/new"
            component={Profile}
          />

          {/* admin panel */}
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/admin/families" component={Admin} />
          <Route exact path="/admin/groups" component={Admin} />
          <Route exact path="/admin/experiences" component={Admin} />
          <Route exact path="/admin/hotels" component={Admin} />
          <Route exact path="/admin/destinations" component={Admin} />
          <Route exact path="/admin/insurances" component={Admin} />
          <Route exact path="/admin/users" component={Admin} />
          <Route exact path="/admin/localfriends" component={Admin} />
          <Route exact path="/admin/reservations" component={Admin} />
          <Route exact path="/admin/payments" component={Admin} />
          <Route exact path="/admin/fees" component={Admin} />

          {/* update */}
          <Route exact path="/admin/families/update" component={Admin} />
          <Route exact path="/admin/hotels/update" component={Admin} />
          <Route exact path="/admin/families/new" component={Admin} />
          <Route exact path="/admin/hotels/new" component={Admin} />
          <Route exact path="/admin/destinations/update" component={Admin} />
          <Route exact path="/admin/destinations/new" component={Admin} />
          <Route exact path="/admin/insurances/update" component={Admin} />
          <Route exact path="/admin/insurances/new" component={Admin} />
          <Route exact path="/admin/users/update" component={Admin} />
          <Route exact path="/admin/users/new" component={Admin} />
          <Route exact path="/admin/groups/update" component={Admin} />
          <Route exact path="/admin/groups/new" component={Admin} />
          <Route exact path="/admin/localfriends/update" component={Admin} />
          <Route exact path="/admin/localfriends/new" component={Admin} />
          <Route exact path="/admin/payments/update" component={Admin} />
          <Route exact path="/admin/fees/new" component={Admin} />
          <Route exact path="/admin/fees/update" component={Admin} />
          <Route exact path="/admin/reservations/update" component={Admin} />
          <Route exact path="/admin/reservations/new" component={Admin} />
          <Route exact path="/admin/experiences/update" component={Admin} />
          <Route exact path="/admin/experiences/new" component={Admin} />
          <Route path="*" component={() => <h2>404 Not Found</h2>} />
        </Switch>
      </div>
      <BnavBar />
    </Router>
  );
}
export default RouteConfig;
