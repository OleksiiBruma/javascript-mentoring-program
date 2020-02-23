import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ children, ...props }) => {
  const {
    authContext: { isAuthenticate },
   path 
  } = props;
  return (
    <Route
      {...props}
      render={() => {
        if (isAuthenticate) {
          return path === "/login" ? <Redirect to="/courses" /> : children;
        } else {
          return path === "/login" ? children : <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
