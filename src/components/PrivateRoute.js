import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  publicValue,
  isAdminProps,
  ...rest
}) => {
  const token = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin");
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
