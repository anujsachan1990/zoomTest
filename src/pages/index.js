import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import LoginLogout from "../components/loginLogout";
import { Placeholder } from "../components/placeholder-div";
import { useAuth0 } from "../../plugins/gatsby-plugin-auth0";
import { navigate } from "gatsby";

const IndexPage = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Layout hideLogin>
      <SEO title="Home" />
      <Placeholder>
        {!isAuthenticated ? (
          <>
            <h3>Please Login to see your scheduled meetings</h3>
            <LoginLogout />
          </>
        ) : (
          <>
            <h3>Click below to see your meetings</h3>
            <button onClick={() => navigate("/zoom")}>your meetings</button>
            <LoginLogout />
          </>
        )}
      </Placeholder>
    </Layout>
  );
};

export default IndexPage;
