import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  publicValue,
  isAdminProps,
  isHome = false,
  ...rest
}) => {
  let token = "";
  let isAdmin = "";
  let location = useLocation();
  if (isHome) {
    const redirect = location.search.split("=")[1];
    if (redirect) {
      localStorage.setItem("token", redirect);
      localStorage.setItem("isAdmin", false);
      isAdmin = "false";
      token = redirect;
    } else {
      token = localStorage.getItem("token");
      isAdmin = localStorage.getItem("isAdmin");
    }
  } else {
    token = localStorage.getItem("token");
    isAdmin = localStorage.getItem("isAdmin");
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        publicValue ? (
          <Component {...props} />
        ) : isAdmin && token ? (
          isAdminProps == isAdmin ? (
            <Component {...props} />
          ) : (
            <Redirect to="/not-found" />
          )
        ) : (
          <Redirect to="/register" />
        )
      }
    />
  );
};

export default PrivateRoute;
