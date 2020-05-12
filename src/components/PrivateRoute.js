// import ...
import React from "react";
import Layout from "../components/layout";
const PrivateRoute = ({
  component: Component,
  location,
  hideLayout,
  ...rest
}) => {
  return hideLayout ? (
    <Component {...rest} />
  ) : (
    <Layout>
      <Component {...rest} />
    </Layout>
  );
};
export default PrivateRoute;
