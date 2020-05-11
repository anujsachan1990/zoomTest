// import ...
import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import { useAuth } from "react-use-auth";
const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const isLoggedin = JSON.parse(localStorage.getItem("useAuth:user"));

  if (!isLoggedin) {
    navigate("/");
  }

  return <Component {...rest} />;
};
export default PrivateRoute;
