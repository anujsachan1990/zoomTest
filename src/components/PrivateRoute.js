// import ...
import React from "react";
import { useAuth0 } from "../../plugins/gatsby-plugin-auth0";
import { navigate } from "@reach/router";

// import { navigate } from "@reach/router";
// import { useAuth } from "react-use-auth";

import Layout from "../components/layout";

const PrivateRoute = ({
  component: Component,
  location,
  hideLayout,
  ...rest
}) => {
  const { isAuthenticated, loading } = useAuth0();

  if (loading) {
    return <p>loading...</p>;
  } else {
    if (!isAuthenticated && typeof window !== "undefined") {
      navigate("/");
      return null;
    } else {
      return hideLayout ? (
        <Component {...rest} />
      ) : (
        <Layout>
          <Component {...rest} />
        </Layout>
      );
    }
  }
};
export default PrivateRoute;
