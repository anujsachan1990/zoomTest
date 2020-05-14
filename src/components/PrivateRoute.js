// import ...
import React from "react";
// import { navigate } from "@reach/router";
import { useAuth } from "react-use-auth";

import Layout from "../components/layout";

const PrivateRoute = ({
  component: Component,
  location,
  hideLayout,
  ...rest
}) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated()) {
    // navigate("/");
    return null;
  }

  return hideLayout ? (
    <Component {...rest} />
  ) : (
    <Layout>
      <Component {...rest} />
    </Layout>
  );
};
export default PrivateRoute;
