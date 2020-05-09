// import ...
import React from "react";
// import { navigate } from "gatsby";
import { useAuth } from "react-use-auth";
const PrivateRoute = async ({ component: Component, location, ...rest }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated()) {
    const { navigate } = await import("gatsby");
    navigate("/");
    return null;
  }
  return <Component {...rest} />;
};
export default PrivateRoute;
