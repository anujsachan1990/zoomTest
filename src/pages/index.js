import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { useAuth } from "react-use-auth";
import LoginLogout from "../components/nav";
import { Placeholder } from "../components/placeholder-div";
import { navigate } from "gatsby";

const IndexPage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Layout hideLogin>
      <SEO title="Home" />
      <Placeholder>
        {!isAuthenticated() ? (
          <>
            <h2>Please Login to see your scheduled meetings</h2>
            <LoginLogout />
          </>
        ) : (
          <>
            <p>Click below to see your meetings</p>
            <button onClick={() => navigate("/zoom")}>your meetings</button>
            <LoginLogout />
          </>
        )}
      </Placeholder>
    </Layout>
  );
};

export default IndexPage;
