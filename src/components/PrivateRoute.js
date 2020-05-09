// import ...
import React from "react";
import { navigate } from "gatsby";
import { useAuth } from "react-use-auth";
const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated()) {
    navigate("/");
    return null;
  }
  return <Component {...rest} />;
};
export default PrivateRoute;
